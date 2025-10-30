import { resumeAtom } from "@/app/store";
import { createClient } from "@/lib/client";
import { ResumeData } from "@/lib/resume-types";
// No longer need to import throttle
import { useAtom } from "jotai";
import { RefObject, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const SAVE_DELAY = 2000; // 2 seconds debounce

export function useResumeSync(resumeId: string) {
  const [resumeData, setResumeData] = useAtom(resumeAtom);
  const [isLoading, setIsLoading] = useState(true);

  // Ref to hold the ID of the debounce timer
  const debounceTimer = useRef<NodeJS.Timeout | undefined>(undefined);
  // Ref to hold the string of the last *successfully* synced data
  const lastSyncedData = useRef<string>("");

  // ✅ Fetch from cache or Supabase on mount
  // This logic was already excellent.
  useEffect(() => {
    (async () => {
      // 1. Try to load from fast, local cache first
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setResumeData(parsed as ResumeData);
          console.log(parsed);
        } catch {
          toast.error("Invalid cached data");
          localStorage.removeItem(`resume-${resumeId}`); // Clear bad data
        } finally {
          setIsLoading(false);
        }
      } else {
        // 2. If no cache, fetch from database
        const data = await fetchFromSupabase(resumeId);
        if (data) {
          setResumeData(data);
          // Save to cache for next time
          localStorage.setItem(`resume-${resumeId}`, JSON.stringify(data));
        }
        setIsLoading(false);
      }
    })();
    console.log("runn1");
    // Adding setResumeData to dependency array
  }, [resumeId, setResumeData]);

  // ✅ Save to cache instantly + DEBOUNCE save to server
  useEffect(() => {
    // Don't save if there's no data or we are still loading
    if (!resumeData || isLoading) return;

    // 1. Save to localStorage *instantly* on every change.
    // This is synchronous and fast. This is what makes reloads work.
    const jsonString = JSON.stringify(resumeData);
    localStorage.setItem(`resume-${resumeId}`, jsonString);

    // 2. Debounce the save to Supabase (the "slow" part)
    // Clear any previously scheduled save
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Schedule a new save for 2 seconds in the future
    debounceTimer.current = setTimeout(() => {
      saveToSupabase(resumeId, resumeData, jsonString, lastSyncedData);
    }, SAVE_DELAY);

    console.log("runn2");
    // Cleanup: Clear the timer if the component unmounts
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };

    // Re-run this effect whenever data, ID, or loading state changes
  }, [resumeData, resumeId, isLoading]);

  // ✅ Sync on reconnect (Force-save cached data)
  // This logic was also good.
  useEffect(() => {
    const handleOnline = () => {
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        try {
          const data = JSON.parse(cached) as ResumeData;
          // We pass 'cached' (the jsonString) directly
          saveToSupabase(resumeId, data, cached, lastSyncedData);
        } catch {
          toast.error("Failed to re-sync corrupt cached data.");
        }
      }
    };
    console.log("runn3");
    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [resumeId]);

  return { resumeData, setResumeData, isLoading };
}

// -------------------- HELPERS --------------------

// This helper function is unchanged
async function fetchFromSupabase(resumeId: string): Promise<ResumeData | null> {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("resumes")
    .select("data")
    .eq("id", resumeId)
    .single();

  if (error) {
    toast.error(error.message);
    return null;
  }

  return data?.data || null;
}

// ❌ The `throttledSave` helper is no longer needed.

// ✅ Actual save function (Modified to accept jsonString)
async function saveToSupabase(
  resumeId: string,
  data: ResumeData,
  jsonString: string, // Pass string to avoid re-stringifying
  lastSyncedData: RefObject<string>
): Promise<void> {
  try {
    // 1. Skip redundant writes if data hasn't changed since last sync
    if (jsonString === lastSyncedData.current) {
      return; // Data is already up-to-date
    }

    const supabase = createClient();
    const { error } = await supabase
      .from("resumes")
      .update({ data }) // Save the actual object
      .eq("id", resumeId);

    if (error) {
      toast.error(error.message);
      return;
    }

    // 2. Update the "last synced" data only after a *successful* save
    lastSyncedData.current = jsonString;
    // Optional: Add a subtle success toast
    // toast.success("Changes saved to cloud");
  } catch (err) {
    toast.error((err as Error).message);
  }
}

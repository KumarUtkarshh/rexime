import { resumeAtom } from "@/app/store";
import { createClient } from "@/lib/client";
import { ResumeData } from "@/lib/resume-types";
import { throttle } from "@/lib/throttle";
import { useAtom } from "jotai";
import { RefObject, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const SAVE_DELAY = 2000; // 2 seconds debounce

export function useResumeSync(resumeId: string) {
  const [resumeData, setResumeData] = useAtom(resumeAtom);
  const [isLoading, setIsLoading] = useState(true);
  const lastSyncedData = useRef<string>("");

  // ✅ Fetch from cache or Supabase on mount
  useEffect(() => {
    (async () => {
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          setResumeData(parsed as ResumeData);
          setIsLoading(false);
        } catch {
          toast.error("Invalid cached data");
        }
      } else {
        const data = await fetchFromSupabase(resumeId);
        if (data) {
          setResumeData(data);
          localStorage.setItem(`resume-${resumeId}`, JSON.stringify(data));
        }
        setIsLoading(false);
      }
    })();
  }, [resumeId]);

  // ✅ Save to cache instantly and debounce save to server
  useEffect(() => {
    if (!resumeData) return;
    localStorage.setItem(`resume-${resumeId}`, JSON.stringify(resumeData));
    throttledSave(resumeId, resumeData, lastSyncedData);
  }, [resumeData]);

  // ✅ Sync on reconnect
  useEffect(() => {
    const handleOnline = () => {
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        const data = JSON.parse(cached);
        saveToSupabase(resumeId, data, lastSyncedData);
      }
    };
    window.addEventListener("online", handleOnline);
    return () => window.removeEventListener("online", handleOnline);
  }, [resumeId]);

  // ✅ Final save before leaving
  useEffect(() => {
    const handleUnload = () => {
      const cached = localStorage.getItem(`resume-${resumeId}`);
      if (cached) {
        const data = JSON.parse(cached);
        saveToSupabase(resumeId, data, lastSyncedData);
      }
    };
    window.addEventListener("beforeunload", handleUnload);
    return () => window.removeEventListener("beforeunload", handleUnload);
  }, [resumeId]);

  return { resumeData, setResumeData, isLoading };
}

// -------------------- HELPERS --------------------

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

const throttledSave = async (
  resumeId: string,
  data: ResumeData,
  lastSyncedData: RefObject<string>
) => {
  throttle(() => saveToSupabase(resumeId, data, lastSyncedData), SAVE_DELAY);
};

// ✅ Actual save function (typed & safe)
async function saveToSupabase(
  resumeId: string,
  data: ResumeData,
  lastSyncedData: RefObject<string>
): Promise<void> {
  try {
    const supabase = createClient();

    const jsonString = JSON.stringify(data);
    if (jsonString === lastSyncedData.current) return; // Skip redundant writes

    const { error } = await supabase
      .from("resumes")
      .update({ data })
      .eq("id", resumeId);

    if (error) {
      toast.error(error.message);
      return;
    }

    lastSyncedData.current = jsonString;
  } catch (err) {
    toast.error((err as Error).message);
  }
}

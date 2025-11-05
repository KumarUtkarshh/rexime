import { Resume } from "../resume-types";
import { createClient } from "../server";

export const fetchResumes = async (user_id: string) => {
  const supabase = await createClient();
  const { data: resumes, error } = await supabase
    .from("resumes")
    .select("*")
    .eq("user_id", user_id)
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return resumes as Resume[];
};

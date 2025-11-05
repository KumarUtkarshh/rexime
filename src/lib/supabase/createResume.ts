import { createClient } from "../client";
import { ResumeData, ResumeUpdateFields } from "../resume-types";
import { getUser } from "./getUserClient";

export const createResume = async (
  title: string,
  data: ResumeData | null,
  image: string
) => {
  const user = await getUser();

  if (!user) throw new Error("User not logged in");
  const supabase = createClient();

  const { error } = await supabase
    .from("resumes")
    .insert([
      {
        user_id: user.id,
        title: title,
        data: data ?? null,
        image: image,
      },
    ])
    .single();

  if (error) throw new Error(error.message);
};

export const updateResume = async (
  resumeId: string,
  updates: ResumeUpdateFields
) => {
  const user = await getUser();
  if (!user) throw new Error("User not logged in");

  const supabase = createClient();

  const { error } = await supabase
    .from("resumes")
    .update({
      ...updates,
    })
    .eq("id", resumeId)
    .eq("user_id", user.id);

  if (error) throw new Error(error.message);
};

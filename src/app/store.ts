import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

const defaultResumeData: ResumeData = {
  name: "",
  title: "",
  contact: {
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  },
  summary: "",
  skills: [],
  experience: [],
  education: [],
  projects: [],
  awards: [],
  languages: [],
};

export const openSignUpDialogAtom = atom(false);
export const resumeAtom = atom<ResumeData>(defaultResumeData);

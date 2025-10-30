import { sampleData } from "@/lib/constants";
import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const openSignUpDialogAtom = atom(false);
export const openCustomEditorAtom = atom(false);
export const resumeAtom = atomWithStorage<ResumeData>(
  "resume-data",
  sampleData
);
export const resumeShowCaseIdxAtom = atom<number>(0);
export const selectedFontAtom = atom<string | null>(null);
export const resumeColorAtom = atom<string>("bg-gray-100");

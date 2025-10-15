import { resumeAtom } from "@/app/store";
import { ResumeContact, ResumeData } from "@/lib/resume-types";
import { useSetAtom } from "jotai";

export const useUpdateResume = (
  field: keyof ResumeData,
  nestedKey?: keyof ResumeContact
) => {
  const setResumeData = useSetAtom(resumeAtom);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;

    setResumeData((prev) => {
      if (nestedKey) {
        const nested = prev[field] ?? {};
        return {
          ...prev,
          [field]: {
            ...nested,
            [nestedKey]: value,
          },
        };
      }
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return { handleChange };
};

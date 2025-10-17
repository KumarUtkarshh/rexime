"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeData } from "@/lib/resume-types";
import { BsTextParagraph } from "react-icons/bs";
import TiptapEditor from "../editor/TiptapEditor";
import { FormHeading } from "./FormHeading";

export default function FormTextArea({ field }: { field: keyof ResumeData }) {
  const { handleChange } = useUpdateResume(field);

  return (
    <div className="summary">
      <FormHeading heading="Summary" icon={<BsTextParagraph />} />
      <TiptapEditor />
    </div>
  );
}

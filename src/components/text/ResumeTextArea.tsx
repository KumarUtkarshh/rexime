"use client";

import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeData } from "@/lib/resume-types";
import { BsTextParagraph } from "react-icons/bs";
import TiptapEditor from "../editor/TiptapEditor";
import { ResumeHeading } from "../resume/ResumeHeading";

export default function FormTextArea({ field }: { field: keyof ResumeData }) {
  const { handleChange, resumeData } = useUpdateResume(field);

  return (
    <div className="summary">
      <ResumeHeading heading="Summary" icon={<BsTextParagraph />} />
      <TiptapEditor
        content={resumeData.summary}
        onContentChange={(content: string) => handleChange(content)}
      />
    </div>
  );
}

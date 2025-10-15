"use client";

import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { useUpdateResume } from "@/hooks/useUpdateResume";
import { ResumeContact, ResumeData } from "@/lib/resume-types";

interface ResumeFieldProps {
  label: string;
  placeholder?: string;
  disabled?: boolean;
  type?: string;
  field: keyof ResumeData;
  nestedKey?: keyof ResumeContact;
}

export function ResumeField({
  label,
  placeholder,
  disabled,
  type = "text",
  field,
  nestedKey,
}: ResumeFieldProps) {
  const { handleChange } = useUpdateResume(field, nestedKey);

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <FieldControl
        onChange={handleChange}
        placeholder={placeholder}
        disabled={disabled}
        type={type}
      />
      <FieldError />
    </Field>
  );
}

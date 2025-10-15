"use client";

import { resumeAtom } from "@/app/store";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldControl,
  FieldError,
  FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { ResumeData } from "@/lib/resume-types";
import { useAtom } from "jotai";
import React from "react";
import { BsTextParagraph } from "react-icons/bs";
import { CgAwards } from "react-icons/cg";
import { GoPerson } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { z } from "zod";
import { Textarea } from "../ui/textarea";
import { FormHeading } from "./FormHeading";
import { FormPlaceHolderSection } from "./FormPlaceHolderSection";
const schema = z.object({
  name: z.string().min(1, { message: "Please enter a name." }),
  age: z.coerce
    .number({ message: "Please enter a number." })
    .positive({ message: "Number must be positive." }),
});

export type Errors = Record<string, string | string[]>;

export async function submitForm(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

  const formData = new FormData(event.currentTarget);
  const result = schema.safeParse(Object.fromEntries(formData as any));

  if (!result.success) {
    const { fieldErrors } = z.flattenError(result.error);
    return { errors: fieldErrors as Errors };
  }

  return {
    errors: {} as Errors,
  };
}

export function ResumeForm() {
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState<Errors>({});
  const handleClearErrors = (next: Errors) => setErrors(next);
  const [resumeData, setResumeData] = useAtom(resumeAtom);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formEl = event.currentTarget;
    setLoading(true);
    const response = await submitForm(event);
    await new Promise((r) => setTimeout(r, 800));
    setErrors(response.errors);
    setLoading(false);
    if (Object.keys(response.errors).length === 0) {
      const formData = new FormData(formEl);
      alert(
        `Name: ${String(formData.get("name") || "")}\nAge: ${String(
          formData.get("age") || ""
        )}`
      );
    }
  };

  // 🔹 Update top-level string fields (like name, title, summary)
  const updateField = <K extends keyof ResumeData>(
    field: K,
    value: ResumeData[K]
  ) => {
    setResumeData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  // const updateNestedField = <
  //   K extends keyof ResumeData,
  //   NK extends keyof NonNullable<ResumeData[K]>
  // >(
  //   field: K,
  //   nestedKey: NK,
  //   value: any
  // ) => {
  //   setResumeData((prev) => ({
  //     ...prev,
  //     [field]: {
  //       ...(prev[field] || {}),
  //       [nestedKey]: value,
  //     },
  //   }));
  // };

  const addSectionItem = <K extends keyof ResumeData>(
    field: K,
    newItem: any
  ) => {
    if (!Array.isArray(resumeData[field])) return;
    setResumeData((prev) => ({
      ...prev,
      [field]: [...(prev[field] as any[]), newItem],
    }));
  };

  return (
    <Form errors={errors} onClearErrors={handleClearErrors} onSubmit={onSubmit}>
      <div className="basics">
        <FormHeading heading="Basics" icon={<GoPerson />} />
        <Field name="name">
          <FieldLabel>Full Name</FieldLabel>
          <FieldControl placeholder="Enter name" disabled={loading} />
          <FieldError />
        </Field>
        <Field name="headline">
          <FieldLabel>Headline</FieldLabel>
          <FieldControl placeholder="awesome headline" disabled={loading} />
          <FieldError />
        </Field>
        <div className="flex gap-2">
          <Field name="email">
            <FieldLabel>Email</FieldLabel>
            <FieldControl placeholder="email@gmail.com" disabled={loading} />
            <FieldError />
          </Field>
          <Field name="website">
            <FieldLabel>Website</FieldLabel>
            <FieldControl placeholder="xyz.com" disabled={loading} />
            <FieldError />
          </Field>
        </div>
        <div className="flex gap-2">
          <Field name="phone">
            <FieldLabel>Phone</FieldLabel>
            <FieldControl placeholder="+1 101010101" disabled={loading} />
            <FieldError />
          </Field>
          <Field name="location">
            <FieldLabel>Location</FieldLabel>
            <FieldControl placeholder="mars" disabled={loading} />
            <FieldError />
          </Field>
        </div>
      </div>
      <hr className="mt-5" />
      <div className="summary">
        <FormHeading heading="Summary" icon={<BsTextParagraph />} />
        <Textarea className="h-32" placeholder="Write about yourself" />
      </div>
      <hr className="mt-5" />
      <FormPlaceHolderSection heading="Profile" icon={<BsTextParagraph />} />
      <FormPlaceHolderSection
        heading="ExtraCurricular"
        icon={<MdWorkOutline />}
      />
      <FormPlaceHolderSection
        heading="Education"
        icon={<MdAssuredWorkload />}
      />
      <FormPlaceHolderSection heading="Skills" icon={<SiHyperskill />} />
      <FormPlaceHolderSection heading="Awards" icon={<CgAwards />} />
      <FormPlaceHolderSection
        heading="Certications"
        icon={<PiCertificateLight />}
      />
      <FormPlaceHolderSection heading="Projects" icon={<GrProjects />} />
      <Button type="submit" disabled={loading}>
        Submit
      </Button>
    </Form>
  );
}

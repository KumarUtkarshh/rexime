"use client";
import { resumeAtom } from "@/app/store";
import { useAtomValue } from "jotai";
import React from "react";
import { CgAwards } from "react-icons/cg";
import { GrProjects } from "react-icons/gr";
import { MdAssuredWorkload, MdWorkOutline } from "react-icons/md";
import { PiCertificateLight } from "react-icons/pi";
import { SiHyperskill } from "react-icons/si";
import { FormPlaceHolderSection } from "./FormPlaceHolderSection";

export function ResumeSections() {
  const resumeData = useAtomValue(resumeAtom);

  const iconMap: Record<string, React.ReactElement> = {
    experience: <MdWorkOutline />,
    education: <MdAssuredWorkload />,
    skills: <SiHyperskill />,
    projects: <GrProjects />,
    awards: <CgAwards />,
    certifications: <PiCertificateLight />,
    extracurricular: <MdWorkOutline />,
  };

  return (
    <div>
      {resumeData.sections &&
        resumeData.sections.map((section, key) => (
          <FormPlaceHolderSection
            key={key}
            heading={section.title}
            entries={section.items}
            icon={iconMap[section.id]}
          />
        ))}
    </div>
  );
}

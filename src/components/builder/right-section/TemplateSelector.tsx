"use client";

import { useResumeStore } from "@/lib/store";
import {
  DUMMY_AMSTERDAM_DATA,
  DUMMY_BERLIN_DATA,
  DUMMY_CREATIVE_PROFESSIONAL_DATA,
  DUMMY_MODERN_CORPORATE_DATA,
  DUMMY_STANDARD_DATA,
  DUMMY_STUDENT_ENTRY_DATA,
  DUMMY_TECH_ORIENTED_DATA,
  DUMMY_TIMELINE_DATA,
} from "@/lib/constants";
import { ResumeData } from "@/lib/resume-types";
import { ResumeTemplate } from "./ResumeTemplate";
import { useState } from "react";
import Resume from "../Resume/Resume";
import { useAtom } from "jotai"; 
import { resumeShowCaseIdxAtom } from "@/lib/store"; 

const images = [
  { 
    imagePath: "/resume-simple.png", 
    defaultResume: DUMMY_STANDARD_DATA,
    name: "Classic Standard", 
    id: "standard", 
  },
  { 
    imagePath: "/resume-berlin.jpg", 
    defaultResume: DUMMY_BERLIN_DATA,
    name: "Berlin (Minimalist)", 
    id: "berlin", 
  },
  { 
    imagePath: "/resume-timeline.png", 
    defaultResume: DUMMY_TIMELINE_DATA,
    name: "Timeline (Functional)", 
    id: "timeline", 
  },
  { 
    imagePath: "/resume-amsterdam.jpg", 
    defaultResume: DUMMY_AMSTERDAM_DATA,
    name: "Amsterdam (Sales/BizOps)", 
    id: "amsterdam", 
  },
  { 
    imagePath: "/resume-creative-pro.png", 
    defaultResume: DUMMY_CREATIVE_PROFESSIONAL_DATA,
    name: "Creative Professional", 
    id: "creative-professional", 
  },
  { 
    imagePath: "/resume-corporate.png", 
    defaultResume: DUMMY_MODERN_CORPORATE_DATA,
    name: "Modern Corporate", 
    id: "modern-corporate", 
  },
  { 
    imagePath: "/resume-student.png", 
    defaultResume: DUMMY_STUDENT_ENTRY_DATA,
    name: "Student/Entry Level", 
    id: "student-entry", 
  },
  { 
    imagePath: "/resume-tech.png", 
    defaultResume: DUMMY_TECH_ORIENTED_DATA,
    name: "Tech Oriented (Developer)", 
    id: "tech-oriented", 
  },
];

export default function TemplateSelector() {
  const [selectedId, setSelectedId] = useState<string | null>(images[0].id); 
  const [index, setIdx] = useAtom(resumeShowCaseIdxAtom); 
  const setResumeData = useResumeStore((state) => state.setResumeData);

  const handleSelectTemplate = (templateData: ResumeData, index: number) => {
    setResumeData(templateData);
    setIdx(index); 
    setSelectedId(templateData.id || "standard"); 
  };

  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">Choose a Starting Template</h2>
      <p className="text-gray-600">
        Select a template below to load pre-filled data and a structure that suits your needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((template, idx) => ( 
          <ResumeTemplate
            key={template.id}
            name={template.name}
            data={template.defaultResume}
            isSelected={selectedId === template.id}
            onSelect={() => handleSelectTemplate(template.defaultResume, idx)} 
            TemplateComponent={Resume} 
          />
        ))}
      </div>
    </div>
  );
}

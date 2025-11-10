"use client";

import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { RefObject, FC } from "react";
import TiptapHTML from "../editor/TiptapHTML";

// --- HELPER COMPONENTS ---

/**
 * Renders the section title with a vertical accent line.
 */
const StudentSectionTitle: FC<{ title: string; colorClass: string }> = ({ title, colorClass }) => (
  <div className="flex items-center mt-6 mb-3">
    {/* Colored vertical line */}
    <div className={`h-6 w-1 mr-3 ${colorClass}`}></div>
    {/* Title is prominent, bold, and uppercase */}
    <h2 className="text-xl font-bold uppercase text-gray-800 tracking-wide">
      {title}
    </h2>
  </div>
);

/**
 * Renders an entry item (Experience, Education, Projects).
 * Emphasizes Education (by checking for GPA/Subtitle presence).
 */
const StudentEntry: FC<{ item: ResumeEntry }> = ({ item }) => {
    const isAcademic = item.gpa || (item.subtitle && item.location);

    return (
        <div className="mb-4 ml-4">
            <div className="flex justify-between items-start flex-wrap">
                <div className="grow pr-4">
                    {/* Title (Job Role / Degree Name) */}
                    {item.title && (
                        <h3 className={`text-base leading-tight ${isAcademic ? 'font-extrabold' : 'font-bold'} text-gray-900`}>
                            {item.title}
                        </h3>
                    )}
                    {/* Subtitle (University Name / Company Name) */}
                    {item.subtitle && (
                        <p className={`text-sm ${isAcademic ? 'font-bold' : 'font-medium'} text-gray-700 mt-0.5`}>
                            {item.subtitle}
                        </p>
                    )}
                </div>
                {/* Dates and Location */}
                <div className="text-sm text-gray-600 font-medium shrink-0 text-right">
                    {item.meta && <p className='whitespace-nowrap'>{item.meta}</p>}
                    {item.location && <p className='italic whitespace-nowrap'>{item.location}</p>}
                </div>
            </div>

            {/* GPA/Details for Education */}
            {item.gpa && (
                <p className="text-sm italic text-gray-600 mt-0.5">
                    GPA: {item.gpa}
                </p>
            )}

            {/* Editor Content (Description/Bullets) */}
            {item.editorHTML && <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />}
        </div>
    );
};

// -----------------------------------------------------------------
// 4. MAIN RESUME COMPONENT: ResumeStudentEntry
// -----------------------------------------------------------------

export const ResumeStudentEntry = ({
  data,
  font,
  ref,
}: {
  data: ResumeData;
  font: string | null;
  ref: RefObject<HTMLDivElement | null>;
}) => {
  const resumeColor = useAtomValue(resumeColorAtom);
  const { name, title, summary, sections } = data;

  // Filter out the sections that we don't render standardly (like 'summary' and 'skills')
  const mainSections = sections?.filter((s) => s.id !== "skills");
  
  // Combine contact info for a simple list
  const contactItems = [
    data.phone, 
    data.email, 
    data.location, 
    data.linkedin, 
    data.github, 
    data.website
  ].filter(Boolean); 

  return (
    <div
      ref={ref}
      // Fixed width for A4 size and using Serif font for an academic feel
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[14px] p-10 print:p-8 ${
        font ? font : "font-serif"
      } print:shadow-none print:text-[12px]`}
    >
      
      {/* --- HEADER (Name, Title, Contact) --- */}
      <header className="text-center mb-6 pb-2 border-b border-gray-400">
        <h1 className={`text-4xl font-extrabold tracking-tight uppercase ${resumeColor}`}>
          {name}
        </h1>
        {title && (
          <h2 className="text-xl font-medium text-gray-700 mt-1">
            {title}
          </h2>
        )}

        {/* Subtle Contact List */}
        <div className="flex justify-center flex-wrap gap-x-3 text-sm text-gray-700 mt-2">
          {contactItems.map((item, index) => (
            <span key={index} className="whitespace-nowrap">
              {item}
              {/* Separator */}
              {index < contactItems.length - 1 && <span className="ml-3 text-gray-500">|</span>}
            </span>
          ))}
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main>
        
        {/* --- SUMMARY/PROFILE (Always first) --- */}
        {summary && (
          <section className="mb-6">
            <StudentSectionTitle title="Profile" colorClass={resumeColor} />
            <TiptapHTML className="text-sm ml-4" html={summary} />
          </section>
        )}

        {/* --- DYNAMIC SECTIONS (Experience, Education, Projects) --- */}
        {mainSections?.map((section) => (
          <section key={section.id} className="mb-6">
            <StudentSectionTitle title={section.title} colorClass={resumeColor} />
            {section.items.map((item, index) => (
              <StudentEntry key={index} item={item} />
            ))}
          </section>
        ))}

        {/* Note: Skills can be rendered as a single section if they exist */}
      </main>
    </div>
  );
};

export default ResumeStudentEntry;

"use client";

import { resumeColorAtom } from "@/app/store";
import { ResumeData, ResumeEntry, ResumeSection } from "@/lib/resume-types";
import { useAtomValue } from "jotai";
import { RefObject, FC } from "react";
import TiptapHTML from "../editor/TiptapHTML";

// --- HELPER COMPONENTS ---

/**
 * Renders the main section title with a tech-oriented, bold aesthetic.
 */
const TechSectionTitle: FC<{ title: string; colorClass: string }> = ({ title, colorClass }) => (
  <div className="mt-6 mb-3">
    {/* Title is prominent and uses the accent color */}
    <h2 className={`text-xl font-extrabold uppercase tracking-wide ${colorClass}`}>
      {title}
    </h2>
  </div>
);

/**
 * Renders an entry item for Experience, Education, or Projects (Main Content).
 */
const TechMainEntry: FC<{ item: ResumeEntry }> = ({ item }) => (
  <div className="mb-5">
    <div className="flex justify-between items-baseline flex-wrap">
      <div className="flex flex-col">
        {item.title && (
          <h3 className="text-lg font-bold text-gray-900 leading-tight">
            {item.title}
          </h3>
        )}
        {item.subtitle && (
          <span className="text-sm font-medium italic text-gray-600">
            {item.subtitle}
          </span>
        )}
      </div>
      {/* Dates/Meta and Location on the right, bolded */}
      <div className="text-sm text-gray-700 font-semibold text-right">
        {item.meta && <p>{item.meta}</p>}
        {item.location && <p className="font-normal italic">{item.location}</p>}
      </div>
    </div>
    
    {/* Editor Content (Description/Bullets) */}
    {item.editorHTML && <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />}
  </div>
);

/**
 * Renders skills as grouped, subtle 'badges' for a clean tech look.
 */
const SkillBadgeEntry: FC<{ section: ResumeSection; colorClass: string }> = ({ section, colorClass }) => (
  <div className="mt-3">
    {section.items.map((item, index) => (
      <div key={index} className="mb-4">
        {/* Title acts as the skill category (e.g., 'Languages', 'Frameworks') */}
        {item.title && (
          <h4 className={`text-sm font-bold uppercase mb-2 border-b ${colorClass} border-opacity-50 print:border-gray-300`}>
            {item.title}
          </h4>
        )}
        
        <div className="flex flex-wrap gap-2 text-sm">
          {item.fields?.map((field, fIndex) => (
            <span 
              key={fIndex} 
              // Tailwind classes for a subtle, rounded badge
              className={`px-3 py-1 rounded-full text-xs font-semibold ${colorClass} bg-opacity-10 text-gray-900 print:bg-gray-100 print:text-gray-800`}
            >
              {field.label}
              {/* Optional: Show level if available */}
              {field.value && <span className="text-gray-600 font-normal ml-1">({field.value})</span>}
            </span>
          ))}
        </div>

        {/* Fallback for general skills text */}
        {item.editorHTML && (
          <TiptapHTML className="text-sm mt-1" html={item.editorHTML} />
        )}
      </div>
    ))}
  </div>
);


// -----------------------------------------------------------------
// 4. MAIN RESUME COMPONENT: ResumeTechOriented
// -----------------------------------------------------------------

export const ResumeTechOriented = ({
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

  // Separate skills section for sidebar placement
  const skillsSection = sections?.find((s) => s.id === "skills");
  // Filter out skills and summary, which are rendered manually
  const mainSections = sections?.filter((s) => s.id !== "skills");
  
  // Define layout ratios (30% sidebar, 70% main)
  const sidebarClasses = 'w-[30%] pr-4 print:w-full print:order-2';
  const contentClasses = 'w-[70%] pl-4 print:w-full print:order-1';

  return (
    <div
      ref={ref}
      // Fixed width for A4 size and default font
      className={`w-[794px] mx-auto bg-white shadow-lg text-gray-900 text-[13px] p-8 print:p-6 ${
        font ? font : "font-sans"
      } print:shadow-none print:text-[11px]`}
    >
      
      {/* --- HEADER (Name & Title) --- */}
      <header className="text-left mb-6 pb-2 border-b-2 border-gray-300">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 uppercase">
          {name}
        </h1>
        {title && (
          <h2 className="text-xl font-medium text-gray-600 mt-1">
            {title}
          </h2>
        )}
      </header>

      {/* --- MAIN FLEX CONTAINER --- */}
      {/* IMPORTANT: print:flex-col stacks the columns for printing */}
      <div className="flex print:flex-col">

        {/* --- RIGHT MAIN CONTENT (Summary, Experience, Education) --- */}
        <main className={contentClasses}>
          
          {/* Summary/Profile Section */}
          {summary && (
            <section className="mb-6">
              <TechSectionTitle title="Profile" colorClass={resumeColor} />
              <TiptapHTML className="text-sm" html={summary} />
            </section>
          )}

          {/* Dynamic Main Sections (Experience, Education, Projects) */}
          {mainSections?.map((section) => (
            <section key={section.id} className="mb-6">
              <TechSectionTitle title={section.title} colorClass={resumeColor} />
              {section.items.map((item, index) => (
                <TechMainEntry key={index} item={item} />
              ))}
            </section>
          ))}
        </main>
        
        {/* --- LEFT SIDEBAR (Skills, Contact) --- */}
        <aside className={`${sidebarClasses} border-l border-gray-200 print:border-none print:pt-4`}>
          
          {/* Contact Details */}
          <div className="mb-6">
            <TechSectionTitle title="Contact" colorClass={resumeColor} />
            <div className="text-sm space-y-2">
                {data.phone && <p>{data.phone}</p>}
                {data.email && <p><a href={`mailto:${data.email}`}>{data.email}</a></p>}
                {data.location && <p>{data.location}</p>}
                {data.linkedin && <p><a href={data.linkedin} target="_blank">LinkedIn</a></p>}
                {data.github && <p><a href={data.github} target="_blank">GitHub</a></p>}
                {data.website && <p><a href={data.website} target="_blank">Website</a></p>}
            </div>
          </div>

          {/* Skills Section (Using Badge Style) */}
          {skillsSection && (
            <div className="mt-8">
              <TechSectionTitle title={skillsSection.title} colorClass={resumeColor} />
              <SkillBadgeEntry section={skillsSection} colorClass={resumeColor} />
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default ResumeTechOriented;

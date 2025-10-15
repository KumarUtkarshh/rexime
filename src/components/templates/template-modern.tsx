"use client";

import type { ResumeData } from "@/lib/resume-types";
import {
  EducationItem,
  ExperienceItem,
  Paper,
  ResumeHeader,
  Section,
  SkillsCloud,
} from "../sections";

export default function TemplateModern({ data }: { data: ResumeData }) {
  return (
    <Paper className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="md:col-span-2 flex flex-col gap-6">
        <ResumeHeader data={data} />
        {data.summary && (
          <Section title="Summary">
            <p className="text-sm leading-relaxed text-pretty text-muted-foreground">
              {data.summary}
            </p>
          </Section>
        )}
        <Section title="Experience">
          <div className="flex flex-col gap-4">
            {data.experience.map((e, i) => (
              <ExperienceItem key={i} item={e} />
            ))}
          </div>
        </Section>
        {data.projects?.length ? (
          <Section title="Projects">
            <div className="flex flex-col gap-4">
              {data.projects.map((p, i) => (
                <div key={i} className="border border-border rounded-md p-3">
                  {/* using border tokens for subtle card look */}
                  <p className="font-medium">{p.name}</p>
                  {p.description && (
                    <p className="text-sm text-muted-foreground">
                      {p.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </Section>
        ) : null}
      </div>

      <aside className="flex flex-col gap-6">
        {data.skills?.length ? (
          <Section title="Skills">
            <SkillsCloud skills={data.skills} />
          </Section>
        ) : null}
        <Section title="Education">
          <div className="flex flex-col gap-4">
            {data.education.map((ed, i) => (
              <EducationItem key={i} item={ed} />
            ))}
          </div>
        </Section>
        {data.languages?.length ? (
          <Section title="Languages">
            <p className="text-sm">{data.languages.join(" • ")}</p>
          </Section>
        ) : null}
        {data.awards?.length ? (
          <Section title="Awards">
            <ul className="space-y-2">
              {data.awards.map((a, i) => (
                <li key={i}>
                  <p className="text-sm font-medium">{a.title}</p>
                  {a.by && (
                    <p className="text-xs text-muted-foreground">
                      {a.by} {a.date ? `• ${a.date}` : ""}
                    </p>
                  )}
                  {a.summary && (
                    <p className="text-sm text-muted-foreground">{a.summary}</p>
                  )}
                </li>
              ))}
            </ul>
          </Section>
        ) : null}
      </aside>
    </Paper>
  );
}

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

export default function TemplateUnique({ data }: { data: ResumeData }) {
  return (
    <Paper className="flex flex-col gap-6">
      <div className="flex gap-6">
        <div
          className="hidden md:block w-1 rounded bg-primary"
          aria-hidden="true"
        />
        <div className="flex-1 flex flex-col gap-6">
          <ResumeHeader data={data} />
          {data.summary && (
            <Section title="Summary">
              <p className="text-sm leading-relaxed text-muted-foreground">
                {data.summary}
              </p>
            </Section>
          )}
          <Section title="Experience">
            <div className="relative pl-3">
              <div
                className="absolute left-0 top-0 bottom-0 w-px bg-border"
                aria-hidden="true"
              />
              <div className="flex flex-col gap-6">
                {data.experience.map((e, i) => (
                  <div key={i} className="relative">
                    <div
                      className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    <ExperienceItem item={e} />
                  </div>
                ))}
              </div>
            </div>
          </Section>
          {data.projects?.length ? (
            <Section title="Projects">
              <div className="flex flex-col gap-4">
                {data.projects.map((p, i) => (
                  <div
                    key={i}
                    className="p-3 rounded-md bg-muted border border-border"
                  >
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </div>
        </div>
      </div>
    </Paper>
  );
}

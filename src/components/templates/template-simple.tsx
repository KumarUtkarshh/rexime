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

export default function TemplateSimple({ data }: { data: ResumeData }) {
  return (
    <Paper className="flex flex-col gap-6">
      <ResumeHeader data={data} />
      {data.summary && (
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {data.summary}
          </p>
        </Section>
      )}
      <Section title="Experience">
        <div className="flex flex-col gap-5">
          {data.experience.map((e, i) => (
            <ExperienceItem key={i} item={e} />
          ))}
        </div>
      </Section>
      {data.projects?.length ? (
        <Section title="Projects">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.projects.map((p, i) => (
              <div key={i} className="rounded-md border border-border p-3">
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
    </Paper>
  );
}

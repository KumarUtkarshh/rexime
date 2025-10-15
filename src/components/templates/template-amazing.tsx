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

export default function TemplateAmazing({
  data = undefined,
}: {
  data?: ResumeData;
}) {
  return (
    <Paper className="flex flex-col gap-6">
      <ResumeHeader data={data} />
      {data?.summary && (
        <Section title="Summary">
          <p className="text-sm leading-relaxed text-muted-foreground">
            {data.summary}
          </p>
        </Section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          {data?.experience && (
            <Section title="Experience">
              <div className="flex flex-col gap-5">
                {data?.experience.map((e, i) => (
                  <div key={i} className="rounded-md border border-border p-4">
                    {/* subtle card wrap to highlight achievements */}
                    <ExperienceItem item={e} />
                  </div>
                ))}
              </div>
            </Section>
          )}
          {data?.projects?.length ? (
            <Section title="Selected Projects">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data?.projects.map((p, i) => (
                  <div
                    key={i}
                    className="rounded-md bg-muted border border-border p-3"
                  >
                    <p className="font-medium">{p.name}</p>
                    {p.description && (
                      <p className="text-sm text-muted-foreground">
                        {p.description}
                      </p>
                    )}
                    {p.bullets?.length ? (
                      <ul className="mt-2 list-disc pl-5 space-y-1 marker:text-muted-foreground">
                        {p.bullets.map((b, bi) => (
                          <li key={bi} className="text-sm leading-relaxed">
                            {b}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                ))}
              </div>
            </Section>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          {data?.skills?.length ? (
            <Section title="Core Skills">
              <SkillsCloud skills={data?.skills} />
            </Section>
          ) : null}
          <Section title="Education">
            <div className="flex flex-col gap-4">
              {data?.education.map((ed, i) => (
                <EducationItem key={i} item={ed} />
              ))}
            </div>
          </Section>
          {data?.awards?.length ? (
            <Section title="Awards">
              <ul className="space-y-2">
                {data?.awards.map((a, i) => (
                  <li key={i}>
                    <p className="text-sm font-medium">{a.title}</p>
                    {(a.by || a.date) && (
                      <p className="text-xs text-muted-foreground">
                        {[a.by, a.date].filter(Boolean).join(" • ")}
                      </p>
                    )}
                    {a.summary && (
                      <p className="text-sm text-muted-foreground">
                        {a.summary}
                      </p>
                    )}
                  </li>
                ))}
              </ul>
            </Section>
          ) : null}
        </div>
      </div>
    </Paper>
  );
}

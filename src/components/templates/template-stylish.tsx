"use client";

import type { ResumeData } from "@/lib/resume-types";
import {
  EducationItem,
  ExperienceItem,
  Paper,
  ResumeHeader,
  SkillsCloud,
} from "../sections";

export default function TemplateStylish({ data }: { data: ResumeData }) {
  return (
    <Paper className="flex flex-col gap-6">
      <div className="rounded-md bg-primary text-primary-foreground p-5">
        <ResumeHeader data={data} className="text-primary-foreground" />
      </div>

      {data.summary && (
        <div className="rounded-md border border-border p-4">
          <h2 className="text-sm font-semibold tracking-wide text-primary">
            Summary
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {data.summary}
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="rounded-md border border-border p-4">
            <h2 className="text-sm font-semibold tracking-wide text-primary">
              Experience
            </h2>
            <div className="mt-2 flex flex-col gap-5">
              {data.experience.map((e, i) => (
                <ExperienceItem key={i} item={e} />
              ))}
            </div>
          </div>

          {data.projects?.length ? (
            <div className="rounded-md border border-border p-4">
              <h2 className="text-sm font-semibold tracking-wide text-primary">
                Projects
              </h2>
              <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.projects.map((p, i) => (
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
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          {data.skills?.length ? (
            <div className="rounded-md border border-border p-4">
              <h2 className="text-sm font-semibold tracking-wide text-primary">
                Skills
              </h2>
              <div className="mt-2">
                <SkillsCloud skills={data.skills} />
              </div>
            </div>
          ) : null}

          <div className="rounded-md border border-border p-4">
            <h2 className="text-sm font-semibold tracking-wide text-primary">
              Education
            </h2>
            <div className="mt-2 flex flex-col gap-4">
              {data.education.map((ed, i) => (
                <EducationItem key={i} item={ed} />
              ))}
            </div>
          </div>

          {data.languages?.length ? (
            <div className="rounded-md border border-border p-4">
              <h2 className="text-sm font-semibold tracking-wide text-primary">
                Languages
              </h2>
              <p className="mt-2 text-sm">{data.languages.join(" • ")}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Paper>
  );
}

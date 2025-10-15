"use client";

import type React from "react";

import type {
  ResumeData,
  ResumeEducation,
  ResumeExperience,
  ResumeProject,
} from "@/lib/resume-types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function ResumeHeader({
  data,
  className,
}: {
  data?: ResumeData;
  className?: string;
}) {
  if (data == undefined) return;

  return (
    <header
      className={cn("flex flex-col gap-1", className)}
      aria-label="Resume header"
    >
      <h1 className="text-3xl font-semibold leading-tight text-balance">
        {data.name}
      </h1>
      <p className="text-sm text-muted-foreground">{data.title}</p>
      <nav
        className="mt-1 text-xs text-muted-foreground flex flex-wrap gap-3"
        aria-label="Contact"
      >
        {data.contact?.email && (
          <ContactItem
            label="Email"
            value={data.contact.email}
            href={`mailto:${data.contact.email}`}
          />
        )}
        {data.contact?.phone && (
          <ContactItem label="Phone" value={data.contact.phone} />
        )}
        {data.contact?.location && (
          <ContactItem label="Location" value={data.contact.location} />
        )}
        {data.contact?.website && (
          <ContactItem
            label="Website"
            value={data.contact.website}
            href={safeUrl(data.contact.website)}
          />
        )}
        {data.contact?.linkedin && (
          <ContactItem
            label="LinkedIn"
            value={data.contact.linkedin}
            href={safeUrl(data.contact.linkedin)}
          />
        )}
        {data.contact?.github && (
          <ContactItem
            label="GitHub"
            value={data.contact.github}
            href={safeUrl(data.contact.github)}
          />
        )}
      </nav>
    </header>
  );
}

function safeUrl(u: string) {
  try {
    const hasProto = /^https?:\/\//i.test(u);
    return hasProto ? u : `https://${u}`;
  } catch {
    return "#";
  }
}

function ContactItem({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = href ? (
    <Link
      href={href}
      className="underline decoration-muted-foreground/40 underline-offset-2 hover:text-foreground"
    >
      {value}
    </Link>
  ) : (
    <span>{value}</span>
  );
  return (
    <span aria-label={label} className="flex items-center gap-1">
      <span className="sr-only">{label}:</span>
      {content}
    </span>
  );
}

export function Section({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn("flex flex-col gap-2", className)}
      aria-label={title}
    >
      <h2 className="text-sm font-semibold tracking-wide text-primary">
        {title}
      </h2>
      <div className="border-t border-border" />
      <div className="mt-1">{children}</div>
    </section>
  );
}

export function BulletList({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul
      className={cn(
        "list-disc pl-5 space-y-1 marker:text-muted-foreground",
        className
      )}
    >
      {items.map((b, i) => (
        <li key={i} className="text-sm leading-relaxed">
          {b}
        </li>
      ))}
    </ul>
  );
}

export function ExperienceItem({ item }: { item: ResumeExperience }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex flex-wrap items-baseline justify-between gap-x-2">
        <p className="font-medium">
          {item.role}{" "}
          <span className="text-muted-foreground">— {item.company}</span>
        </p>
        <p className="text-xs text-muted-foreground">
          {item.startDate} – {item.current ? "Present" : item.endDate}
        </p>
      </div>
      {item.location && (
        <p className="text-xs text-muted-foreground">{item.location}</p>
      )}
      <BulletList items={item.bullets} />
    </div>
  );
}

export function ProjectItem({ item }: { item: ResumeProject }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-medium">
          {item.link ? (
            <Link
              href={safeUrl(item.link)}
              className="underline decoration-muted-foreground/40 underline-offset-2 hover:text-foreground"
            >
              {item.name}
            </Link>
          ) : (
            item.name
          )}
        </p>
        {item.tech?.length ? (
          <div className="flex flex-wrap gap-1">
            {item.tech.map((t, i) => (
              <span
                key={i}
                className="text-[10px] px-1.5 py-0.5 rounded border border-border text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
      {item.description && (
        <p className="text-sm text-muted-foreground leading-relaxed">
          {item.description}
        </p>
      )}
      {item.bullets && <BulletList items={item.bullets} />}
    </div>
  );
}

export function EducationItem({ item }: { item: ResumeEducation }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-baseline justify-between gap-2">
        <p className="font-medium">{item.school}</p>
        <p className="text-xs text-muted-foreground">
          {item.startDate} – {item.endDate}
        </p>
      </div>
      <p className="text-sm text-muted-foreground">{item.degree}</p>
      {item.location && (
        <p className="text-xs text-muted-foreground">{item.location}</p>
      )}
    </div>
  );
}

export function SkillsCloud({
  skills,
}: {
  skills: { name: string; level?: string }[];
}) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((s, i) => (
        <span
          key={i}
          className="text-xs px-2 py-1 rounded-md bg-muted text-foreground border border-border"
        >
          {s.name}
          {s.level ? ` · ${s.level}` : ""}
        </span>
      ))}
    </div>
  );
}

export function Paper({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // print-friendly container
  return (
    <div
      className={cn(
        "bg-card text-foreground border border-border rounded-md shadow-sm p-6 md:p-8",
        "print:shadow-none print:border-0 print:p-0",
        className
      )}
      role="document"
      aria-label="Resume"
    >
      {children}
    </div>
  );
}

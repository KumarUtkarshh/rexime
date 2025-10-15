import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

const defaultResumeData: ResumeData = {
  name: "",
  title: "",
  contact: {
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  },
  summary: "",
  skills: [],
  experience: [],
  education: [],
  projects: [],
  awards: [],
  languages: [],
};

const sampleData: ResumeData = {
  name: "Alexandra Chen",
  title: "Senior Software Engineer",
  contact: {
    email: "alexandra.chen@example.com",
    phone: "+1 (555) 010-2048",
    location: "San Francisco, CA",
    website: "alexandra.dev",
    linkedin: "linkedin.com/in/alexandra-chen",
    github: "github.com/alexchen",
  },
  summary:
    "Senior engineer with 8+ years building high-performance web platforms. I lead cross-functional teams to ship impact, improve reliability, and reduce costs. Passionate about developer experience and systems that scale.",
  skills: [
    { name: "TypeScript" },
    { name: "React" },
    { name: "Next.js" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "AWS" },
    { name: "Distributed Systems" },
    { name: "CI/CD" },
  ],
  experience: [
    {
      company: "Meta",
      role: "Staff Software Engineer",
      location: "Menlo Park, CA",
      startDate: "2022",
      current: true,
      bullets: [
        "Led migration of monolith services to a modular architecture, improving deployment speed by 35%.",
        "Mentored 6 engineers; established performance review rubrics that improved promo clarity.",
        "Optimized GraphQL layer reducing P95 latency from 420ms to 180ms.",
      ],
    },
    {
      company: "Amazon",
      role: "Senior Software Engineer",
      location: "Seattle, WA",
      startDate: "2019",
      endDate: "2022",
      bullets: [
        "Delivered event-driven pipeline that processed 1B+ daily events with exactly-once semantics.",
        "Cut infra costs by 22% via right-sizing, zonal spread, and autoscaling policies.",
        "Shipped internal UI kit adopted by 14 teams, reducing design drift.",
      ],
    },
    {
      company: "Startup XYZ",
      role: "Software Engineer",
      startDate: "2016",
      endDate: "2019",
      bullets: [
        "Built customer analytics platform; increased activation by 18% through insights-driven features.",
        "Introduced testing strategy and CI, reducing regressions by 40%.",
      ],
    },
  ],
  projects: [
    {
      name: "Realtime Collaboration Suite",
      link: "https://alexandra.dev/realtime",
      description:
        "Low-latency presence, CRDT-based text editing, and media sync.",
      bullets: [
        "WebSockets + CRDTs",
        "E2E encrypted rooms",
        "Collapsed updates for efficiency",
      ],
      tech: ["TypeScript", "WebRTC", "CRDT"],
    },
    {
      name: "Open Source UI Library",
      link: "https://github.com/alexchen/ui",
      description: "Composable components with accessibility-first patterns.",
      tech: ["React", "Tailwind"],
    },
  ],
  education: [
    {
      school: "University of California, Berkeley",
      degree: "B.S. Computer Science",
      startDate: "2012",
      endDate: "2016",
      location: "Berkeley, CA",
    },
  ],
  awards: [
    {
      title: "Company Top 1% Award",
      by: "Meta",
      date: "2024",
      summary: "Impact across multiple org initiatives.",
    },
  ],
  languages: ["English", "Mandarin"],
};

export const openSignUpDialogAtom = atom(false);
export const resumeAtom = atom<ResumeData>(sampleData);

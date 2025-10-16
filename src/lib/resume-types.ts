// export type ResumeExperience = {
//   title: string;
//   company: string;
//   location?: string;
//   duration?: string;
//   points?: string[];
// };

// export type ResumeProject = {
//   title: string;
//   stack?: string;
//   duration?: string;
//   points?: string[];
// };

// export type ResumeData = {
//   name: string;
//   phone?: string;
//   email?: string;
//   linkedin?: string;
//   summary?: string;
//   education?: {
//     institute: string;
//     degree: string;
//     location?: string;
//     duration?: string;
//   };
//   experience?: ResumeExperience[];
//   projects?: ResumeProject[];
//   achievements?: string[];
//   skills?: {
//     languages?: string[];
//     frameworks?: string[];
//     databases?: string[];
//     cloud?: string[];
//     tools?: string[];
//   };
// };

export type ResumeField = {
  label: string; // e.g. "Company", "Duration", "Role"
  value?: string; // The value like "Google", "2021–2023"
};

export type ResumeEntry = {
  title?: string; // Optional main heading, e.g., "Software Engineer"
  subtitle?: string; // Optional subheading, e.g., "Google"
  meta?: string; // e.g., "Jan 2021 – Dec 2023 | Mountain View"
  points?: string[]; // Bullet points
  fields?: ResumeField[]; // Arbitrary labeled fields for flexibility
};

export type ResumeSection = {
  id: string; //identifying
  title: string; // e.g. "Experience", "Projects", "Education"
  items: ResumeEntry[]; // list of entries
  displayOrder?: number; // optional ordering
};

export type ResumeSkills = Record<string, string[] | undefined>; // e.g. { languages: ['Java', 'Python'], tools: ['Git', 'Docker'] }

export type ResumeData = {
  name: string;
  title?: string;
  summary?: string;
  phone?: string;
  email?: string;
  linkedin?: string;
  github?: string;
  website?: string;
  location?: string;
  sections?: ResumeSection[];
  skills?: ResumeSkills;
};

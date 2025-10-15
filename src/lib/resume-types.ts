export type ResumeContact = {
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  linkedin?: string;
  github?: string;
};

export type ResumeExperience = {
  company: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  bullets: string[];
};

export type ResumeEducation = {
  school: string;
  degree: string;
  startDate: string;
  endDate: string;
  location?: string;
};

export type ResumeProject = {
  name: string;
  link?: string;
  description?: string;
  bullets?: string[];
  tech?: string[];
};

export type ResumeAward = {
  title: string;
  by?: string;
  date?: string;
  summary?: string;
};

export type ResumeData = {
  name: string;
  title: string;
  contact?: ResumeContact;
  summary?: string;
  skills?: { name: string; level?: string }[];
  experience: ResumeExperience[];
  education: ResumeEducation[];
  projects?: ResumeProject[];
  awards?: ResumeAward[];
  languages?: string[];
};

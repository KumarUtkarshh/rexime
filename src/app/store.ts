import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

const sampleData: ResumeData = {
  name: "John Doe",
  phone: "+91-8989898989",
  email: "Johndoe@gmail.com",
  linkedin: "https://www.linkedin.com/in/johndoe",

  skills: {
    languages: ["Java", "Python", "C++", "JavaScript", "SQL"],
    frameworks: ["Spring Boot", "Node.js", "React.js", "Flask"],
    databases: ["PostgreSQL", "DynamoDB", "MongoDB"],
    cloud: ["AWS (Lambda, S3, EC2, API Gateway)"],
    tools: ["Git", "Docker", "Kubernetes", "Jenkins"],
  },

  sections: [
    // ---------------- Education ----------------
    {
      id: "education",
      title: "Education",
      displayOrder: 1,
      items: [
        {
          title: "Bachelor of Technology in Computer Science",
          subtitle: "Indian Institute of Technology (IIT) Bombay",
          meta: "Aug 2018 – May 2022 | Mumbai, India",
          points: [
            "Graduated with distinction, majoring in Computer Science.",
            "Led a student team in building a cloud-hosted IoT data analysis platform.",
          ],
        },
      ],
    },

    // ---------------- Experience ----------------
    {
      id: "experience",
      title: "Experience",
      displayOrder: 2,
      items: [
        {
          title: "Software Development Engineer - I",
          subtitle: "Amazon India",
          meta: "July 2022 – Present | Bangalore, India",
          points: [
            "Developed a microservices-based order tracking system, improving latency by 30%.",
            "Implemented DynamoDB and Redis caching to reduce database queries by 40%.",
          ],
        },
        {
          title: "Software Engineer Intern",
          subtitle: "Amazon India",
          meta: "Jan 2022 – June 2022 | Hyderabad, India",
          points: [
            "Built an automated anomaly detection tool using Python and AWS, reducing manual checks by 60%.",
            "Developed an internal debugging dashboard for the supply chain team, reducing incident resolution time.",
          ],
        },
      ],
    },

    // ---------------- Projects ----------------
    {
      id: "projects",
      title: "Projects",
      displayOrder: 3,
      items: [
        {
          title: "Scalable URL Shortener",
          fields: [
            {
              label: "Tech Stack",
              value: "Spring Boot, AWS Lambda, DynamoDB, React",
            },
            { label: "Duration", value: "Oct 2021 – Jan 2022" },
          ],
          points: [
            "Built a distributed URL shortening service handling 5M+ requests/day.",
            "Implemented consistent hashing for even load balancing.",
          ],
        },
        {
          title: "AI-Powered Resume Parser",
          fields: [
            {
              label: "Tech Stack",
              value: "Python, NLP, FastAPI, PostgreSQL",
            },
            { label: "Duration", value: "July 2021 – Sep 2021" },
          ],
          points: [
            "Developed a machine-learning-powered resume parser achieving 92% accuracy.",
            "Used spaCy and Named Entity Recognition (NER) for key detail extraction.",
          ],
        },
      ],
    },

    // ---------------- Achievements ----------------
    {
      id: "achievements",
      title: "Achievements",
      displayOrder: 4,
      items: [
        {
          points: [
            "Secured Rank 200 in Google Kick Start coding competition among 10,000+ participants.",
            "Won 1st place in Amazon SDE Hackathon 2021 for building a real-time fraud detection system.",
            "Published 3 research papers on distributed computing and ML in IEEE conferences.",
          ],
        },
      ],
    },
  ],
};

export const sampleData2: ResumeData = {
  name: "Firstname Lastname",
  phone: "+1 (123) 456-7890",
  location: "San Francisco, CA",
  email: "contact@faangpath.com",
  linkedin: "linkedin.com/company/faangpath",
  website: "www.faangpath.com",
  summary:
    "Software Engineer with 2+ years of experience in XXX, seeking full-time XXX roles.",
  sections: [
    {
      id: "education",
      title: "Education",
      items: [
        {
          title: "Master of Computer Science, Stanford University",
          meta: "Expected 2020",
          points: ["Relevant Coursework: A, B, C, and D."],
        },
        {
          title: "Bachelor of Computer Science, Stanford University",
          meta: "2014 - 2017",
        },
      ],
    },
    {
      id: "skills",
      title: "Skills",
      items: [
        {
          title: "Technical Skills",
          points: ["A, B, C, D"],
        },
        {
          title: "Soft Skills",
          points: ["A, B, C, D"],
        },
        {
          title: "XYZ",
          points: ["A, B, C, D"],
        },
      ],
    },
    {
      id: "experience",
      title: "Experience",
      items: [
        {
          title: "Role Name",
          subtitle: "Company Name",
          meta: "Jan 2017 – Jan 2019 | San Francisco, CA",
          points: [
            "Achieved X% growth for XYZ using A, B, and C skills.",
            "Led XYZ which led to X% of improvement in ABC.",
            "Developed XYZ that did A, B, and C using X, Y, and Z.",
          ],
        },
        {
          title: "Role Name",
          subtitle: "Company Name",
          meta: "Jan 2017 – Jan 2019 | San Francisco, CA",
          points: [
            "Achieved X% growth for XYZ using A, B, and C skills.",
            "Led XYZ which led to X% of improvement in ABC.",
            "Developed XYZ that did A, B, and C using X, Y, and Z.",
          ],
        },
      ],
    },
    {
      id: "projects",
      title: "Projects",
      items: [
        {
          title: "Hiring Search Tool",
          points: [
            "Built a tool to search for Hiring Managers and Recruiters using ReactJS, NodeJS, Firebase, and boolean queries.",
            "Over 25000 people have used it with 5000+ queries saved and shared, delivering better results than LinkedIn! (Try it here)",
          ],
        },
        {
          title: "Short Project Title",
          points: [
            "Built a project that does something and had quantified success using A, B, and C.",
            "This project’s description spans two lines and also won an award.",
          ],
        },
      ],
    },
    {
      id: "extra",
      title: "Extra-Curricular Activities",
      items: [
        {
          points: [
            "Actively write blog posts and social media posts (TikTok, Instagram) viewed by 20K+ job seekers weekly.",
            "Help people with best practices to land their dream jobs.",
            "Sample bullet point.",
          ],
        },
      ],
    },
    {
      id: "leadership",
      title: "Leadership",
      items: [
        {
          points: [
            "Admin for the FAANGPath Discord community (6000+ job seekers).",
            "Facilitated online events, career conversations, and managed volunteer moderators.",
          ],
        },
      ],
    },
  ],
};

export const openSignUpDialogAtom = atom(false);
export const resumeAtom = atom<ResumeData>(sampleData);

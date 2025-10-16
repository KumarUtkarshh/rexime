import type { ResumeData } from "@/lib/resume-types";
import { atom } from "jotai";

export const sampleData: ResumeData = {
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

export const openSignUpDialogAtom = atom(false);
export const resumeAtom = atom<ResumeData>(sampleData);

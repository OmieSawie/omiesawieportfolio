import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
] as const;

interface ExperienceItem {
  title: string;
  location: string;
  description: string;
  icon: React.ReactNode; // Adjust if you're using a specific icon type
  date: string;
}
export const experiencesData: ExperienceItem[] = [
  {
    title: "Summer Robotics Intern, eYantra, IIT Bombay",
    location: "IIT Bombay, Mumbai, India",
    description:
      "After finishing 6th in eYantra Robotics Competition (2021-22), a national level Robotics Competition hosted by IIT Bombay, I recieved an internship offer from eYantra to develop their autonomous robot",
    icon: React.createElement(LuGraduationCap),
    date: "May 2022",
  },
  {
    title: "Full-Stack Developer intern",
    location: "DATOMS, Banglore, India",
    description:
      "I worked as a full-stack developer for 2 months in DATOMS Banglore office. My task was to make a completely autonomous, easy to customize and generic data display framework for my clients. The final framework developed was hyper performant and successfully shipped to the clients.",
    icon: React.createElement(CgWorkAlt),
    date: "May - July 2024",
  },
];

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;

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
    title: "Booking Management Website",
    description:
      "Developed a booking management website for the Community Center of IIT BBS.",
    tags: ["React", "ExpressJs", "MongoDB"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Discord Bot",
    description:
      "Made a Discord Bot for my personal server to experiment with the DiscordJS Api",
    tags: ["ExpressJs", "DiscordJS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Whatsapp Clone",
    description:
      "A Whatsapp Clone with all major functionalities like chatrooms, groups, sending messages, images, videos and documents and unread notification.",
    tags: ["React", "ExpressJs", "MongoDB", "Tailwind", "Redux"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "Blog cum Discussion Forum",
    description:
      "A forum space made using NextJs for posting blogs and comments.",
    tags: ["React", "Apollo GraphQL", "MongoDB", "Prisma", "PubSub"],
    imageUrl: wordanalyticsImg,
  },
  {
    title: "SLAM and Photogrammetry",
    description:
      "A SLAM and Photogrammetry Program written from scratch using the OpenCV C++ Library along with OpenCV-Cuda.",
    tags: ["C++", "OpenCV", "Cuda", "CMake", "Point Clouds"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "ExpressJs",
  "Next.js",
  "GraphQL",
  "Apollo",
  "Node.js",
  "Git",
  "Tailwind",
  "Material UI",
  "ANTDesign",
  "Prisma",
  "MongoDB",
  "Redux",
  "MySQL",
  "MariaDB",
  "PostgreSQL",
  "Computer Vision",
  "OpenCV C++",
  "CMake",
  "Nvidia Cuda",
  "Python",
  "Robotics",
  "Microcontroller Programming",
  "Raspberry Pi",
  "Linux",
  "Arch Linux",
] as const;

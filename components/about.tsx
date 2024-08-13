"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>

      <p className="mb-3">
        I am currently in my final year of Civil Engineering at{" "}
        <span className="font-medium">IIT Bhubaneswar</span>. My journey into
        programming began in the early days of my college experience, where I
        quickly realized the profound impact that technology could have.
        Starting with robotics, I soon expanded my skills to encompass{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What I find most rewarding</span> about
        programming is the process of bringing a project to life, and the
        satisfaction that comes from solving complex challenges. My primary
        technical stack includes{" "}
        <span className="font-medium">
          Node.js, React, ExpressJS, Next.js and GraphQL
        </span>
        , with solid expertise in both NoSQL databases like MongoDB and SQL
        databases such as MySQL and PostgreSQL. I am also proficient in
        TypeScript, and I continuously seek to broaden my knowledge and stay
        abreast of new advancements in technology.
      </p>
      <p>
        <span className="italic">Beyond coding</span>, I enjoy activities that
        allow me to unwind and recharge. These include playing video games,
        watching films, cycling, and embarking on long bike rides. In the
        digital world, I am known as{" "}
        <span className="font-medium">Omie Sawie</span>.
      </p>
    </motion.section>
  );
}

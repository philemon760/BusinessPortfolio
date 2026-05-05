import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import {
  FaCode,
  FaPaintBrush,
  FaChartBar,
  FaBullhorn,
  FaReact,
} from "react-icons/fa";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
 
  {
    name: "Services",
    hash: "#services",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated in Computer Science",
    location: "Karachi, Pakistan",
    description:
      "Completed my degree in Computer Science and began my journey into full-stack web development.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "MERN Stack Developer",
    location: "Freelance - Remote",
    description:
      "Worked on various freelance projects building modern websites and full-stack applications using React, Node.js, MongoDB, and Express.js.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Founder at [Your Brand Name]",
    location: "Remote",
    description:
      "Currently offering full-stack development services, specializing in React, Next.js, Tailwind CSS, and building scalable business solutions for global clients.",
    icon: React.createElement(FaReact),
    date: "2023 - Present",
  },
] as const;

export const servicesData = [
  {
    title: "Full-Stack Development",
    description:
      "We build robust, scalable web applications from frontend to backend, delivering seamless user experiences and efficient server-side logic.",
    skills: ["React", "Next.js", "Node.js", "MongoDB", "Prisma", "TypeScript"],
    icon: React.createElement(FaCode),
  },
  {
    title: "Frontend Development",
    description:
      "We create responsive, interactive user interfaces with modern frameworks, ensuring pixel-perfect designs and smooth performance.",
    skills: ["React", "TypeScript", "Tailwind", "Framer Motion", "Redux"],
    icon: React.createElement(FaPaintBrush),
  },
  {
    title: "Web App Analytics",
    description:
      "We develop tools for analyzing web content, providing insights like word counts, character limits, and social media compatibility.",
    skills: ["React", "Next.js", "PostgreSQL", "Tailwind", "GraphQL"],
    icon: React.createElement(FaChartBar),
  },
  {
    title: "Digital Marketing",
    description:
      "We provide comprehensive digital marketing solutions, including SEO, social media strategies, and content marketing to boost your online presence.",
    skills: ["SEO", "Social Media", "Google Ads", "Analytics"],
    icon: React.createElement(FaBullhorn),
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
  "Express",
  "MongoDB",
  "Prisma",
  "Tailwind",
  "Git",
  "Framer Motion",
  "Redux",
] as const;

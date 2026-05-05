import React from "react";
import {
  FaHeartbeat,
  FaVideo,
  FaFlask,
  FaShieldAlt,
  FaHospital,
  FaUserMd,
} from "react-icons/fa";
import { MdHealthAndSafety } from "react-icons/md";

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
    name: "Expertise",
    hash: "#skills",
  },
  {
    name: "Journey",
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
    title: "MediCare Plus Founded",
    location: "Austin, Texas, USA",
    description:
      "Established MediCare Plus with a mission to make high-quality healthcare accessible to all Americans. Opened our first flagship clinic in Austin with 15 board-certified physicians.",
    icon: React.createElement(FaHospital),
    date: "2018",
  },
  {
    title: "Expanded Telehealth Services",
    location: "Nationwide – Remote Care, USA",
    description:
      "Launched our HIPAA-compliant digital health platform enabling patients across all 50 states to consult licensed doctors from home. Reached over 10,000 virtual consultations in year one.",
    icon: React.createElement(FaVideo),
    date: "2020",
  },
  {
    title: "Opened New Medical Centers",
    location: "Dallas, TX & Atlanta, GA",
    description:
      "Expanded to two state-of-the-art medical centers equipped with advanced diagnostic labs, radiology suites, and specialist care units serving the Southeast and South-Central US.",
    icon: React.createElement(FaUserMd),
    date: "2022",
  },
  {
    title: "Serving 50,000+ Patients",
    location: "USA – Nationwide",
    description:
      "Crossed the landmark milestone of 50,000 registered patients. Introduced AI-powered health records, preventive care programs, and 24/7 emergency response services.",
    icon: React.createElement(MdHealthAndSafety),
    date: "2024",
  },
] as const;

export const servicesData = [
  {
    title: "Primary Care",
    description:
      "Comprehensive general medical care for patients of all ages. Our board-certified physicians provide personalized health evaluations, chronic disease management, and routine wellness checkups.",
    skills: ["General Medicine", "Family Health", "Chronic Care", "Vaccinations"],
    icon: React.createElement(FaHeartbeat),
  },
  {
    title: "Telehealth Services",
    description:
      "Consult with our licensed US doctors from the comfort of your home. Our HIPAA-secure video platform delivers prompt, professional medical advice — anytime, anywhere across all 50 states.",
    skills: ["Video Consult", "E-Prescriptions", "Follow-ups", "24/7 Support"],
    icon: React.createElement(FaVideo),
  },
  {
    title: "Diagnostics & Lab Testing",
    description:
      "Cutting-edge diagnostic services including blood panels, imaging, ECG, and pathology. Receive accurate, CLIA-certified results with rapid turnaround, reviewed by licensed specialists.",
    skills: ["Blood Tests", "MRI / X-Ray", "ECG", "Pathology"],
    icon: React.createElement(FaFlask),
  },
  {
    title: "Preventive Health Checkups",
    description:
      "Proactive health screening packages designed to detect risks early. Our preventive care plans cover cardiovascular, diabetes, cancer markers, and comprehensive full-body assessments.",
    skills: ["Full Body Scan", "Cardiac Screen", "Diabetes Panel", "Cancer Markers"],
    icon: React.createElement(FaShieldAlt),
  },
] as const;

export const skillsData = [
  "Patient Care",
  "Emergency Services",
  "Digital Health Records",
  "Telemedicine",
  "Clinical Diagnostics",
  "Surgical Care",
  "Pediatrics",
  "Cardiology",
  "Radiology",
  "Pharmacy",
  "Mental Health",
  "Vaccination Programs",
  "Rehabilitation",
  "Nutrition & Wellness",
] as const;

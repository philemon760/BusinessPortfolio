"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Cardiologist",
    qualification: "MD, FACC · Harvard Medical School",
    experience: "14 Years Experience",
    emoji: "👩‍⚕️",
    available: true,
    tags: ["Heart Health", "ECG", "Stress Tests"],
  },
  {
    name: "Dr. James Thornton",
    specialty: "General Physician",
    qualification: "MD, MRCP · Johns Hopkins University",
    experience: "10 Years Experience",
    emoji: "👨‍⚕️",
    available: true,
    tags: ["Primary Care", "Diabetes", "Hypertension"],
  },
  {
    name: "Dr. Amelia Brooks",
    specialty: "Pediatrician",
    qualification: "MD, FAAP · Stanford School of Medicine",
    experience: "9 Years Experience",
    emoji: "👩‍⚕️",
    available: false,
    tags: ["Child Health", "Vaccinations", "Growth Monitoring"],
  },
  {
    name: "Dr. Robert Hayes",
    specialty: "Radiologist",
    qualification: "MD, FRCR · Mayo Clinic",
    experience: "12 Years Experience",
    emoji: "👨‍⚕️",
    available: true,
    tags: ["MRI", "Ultrasound", "X-Ray"],
  },
];

export default function Doctors() {
  return (
    <section
      id="doctors"
      className="mb-28 max-w-[60rem] mx-auto scroll-mt-28 sm:mb-40"
    >
      <div className="text-center mb-10">
        <SectionHeading>Meet Our Doctors</SectionHeading>
        <motion.div
          className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
        />
        <p className="text-gray-600 dark:text-white/60 text-sm max-w-[38rem] mx-auto">
          Our team of 120+ board-certified US physicians and specialists are
          dedicated to delivering the highest standard of American medical care.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 px-4">
        {doctors.map((doc, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-white/5 border border-[#48bfe3]/20 rounded-2xl p-5 shadow-sm hover:shadow-lg hover:border-[#0096c7]/40 transition-all text-center group cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Avatar Circle */}
            <div className="relative mx-auto w-20 h-20 rounded-full bg-gradient-to-br from-[#caf0f8] to-[#90e0ef] flex items-center justify-center text-4xl mb-4 group-hover:scale-105 transition-transform shadow-md">
              {doc.emoji}
              {/* Availability dot */}
              <span
                className={`absolute bottom-1 right-1 w-4 h-4 rounded-full border-2 border-white ${
                  doc.available ? "bg-green-400" : "bg-gray-400"
                }`}
              />
            </div>

            <h3 className="font-bold text-gray-900 dark:text-white text-sm mb-0.5">
              {doc.name}
            </h3>
            <p className="text-[#0096c7] font-semibold text-xs mb-1">
              {doc.specialty}
            </p>
            <p className="text-gray-400 dark:text-white/40 text-[11px] mb-1">
              {doc.qualification}
            </p>
            <p className="text-gray-500 dark:text-white/50 text-[11px] mb-3">
              🩺 {doc.experience}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap justify-center gap-1 mb-4">
              {doc.tags.map((tag, j) => (
                <span
                  key={j}
                  className="bg-[#caf0f8]/60 dark:bg-[#0096c7]/10 text-[#0077b6] dark:text-[#48bfe3] text-[10px] px-2 py-0.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Book Button */}
            <a
              href="#contact"
              className={`block w-full text-xs font-semibold py-2 rounded-xl transition ${
                doc.available
                  ? "bg-[#0096c7] text-white hover:bg-[#0077b6] shadow-sm shadow-[#0096c7]/20"
                  : "bg-gray-100 dark:bg-white/10 text-gray-400 cursor-not-allowed"
              }`}
            >
              {doc.available ? "Book Appointment" : "Unavailable"}
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

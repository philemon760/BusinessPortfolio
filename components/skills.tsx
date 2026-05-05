"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const iconMap: Record<string, string> = {
  "Patient Care": "🩺",
  "Emergency Services": "🚑",
  "Digital Health Records": "💾",
  "Telemedicine": "💻",
  "Clinical Diagnostics": "🔬",
  "Surgical Care": "⚕️",
  "Pediatrics": "👶",
  "Cardiology": "❤️",
  "Radiology": "🩻",
  "Pharmacy": "💊",
  "Mental Health": "🧠",
  "Vaccination Programs": "💉",
  "Rehabilitation": "🏃",
  "Nutrition & Wellness": "🥗",
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Expertise");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[55rem] mx-auto scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Our Expertise</SectionHeading>
      <motion.div
        className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />

      <p className="text-gray-600 dark:text-white/60 text-sm mb-8 max-w-[36rem] mx-auto">
        Our clinical capabilities span across a wide range of specialties — backed by certified professionals and modern medical infrastructure.
      </p>

      <ul className="flex flex-wrap justify-center gap-3 text-base text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="bg-white dark:bg-white/10 border border-[#48bfe3]/20 dark:border-[#48bfe3]/10 rounded-xl px-5 py-3 dark:text-white/80 flex items-center gap-2 shadow-sm hover:shadow-md hover:border-[#0096c7]/40 transition-all cursor-default"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <span className="text-lg">{iconMap[skill] ?? "🏥"}</span>
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

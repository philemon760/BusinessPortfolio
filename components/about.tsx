"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { FaHeartbeat, FaShieldAlt, FaUserMd, FaLeaf } from "react-icons/fa";

const values = [
  {
    icon: <FaHeartbeat className="text-[#0096c7] text-2xl" />,
    title: "Patient-First Care",
    desc: "Every decision we make starts and ends with patient wellbeing. We deliver empathetic, personalized care that respects your dignity.",
  },
  {
    icon: <FaShieldAlt className="text-[#0096c7] text-2xl" />,
    title: "Trust & Safety",
    desc: "Our certified professionals follow the highest clinical standards, ensuring every diagnosis, treatment, and procedure is safe and reliable.",
  },
  {
    icon: <FaUserMd className="text-[#0096c7] text-2xl" />,
    title: "Expert Physicians",
    desc: "Our team of 120+ board-certified doctors, specialists, and surgeons bring decades of combined experience across all medical disciplines.",
  },
  {
    icon: <FaLeaf className="text-[#0096c7] text-2xl" />,
    title: "Holistic Wellness",
    desc: "We believe healthcare goes beyond treatment. Our preventive and wellness programs empower patients to lead healthier, longer lives.",
  },
];

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      id="about"
      className="mb-28 max-w-[52rem] mx-auto text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <SectionHeading>About Us</SectionHeading>

      <motion.div
        className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />

      <div className="text-gray-700 dark:text-white/75 text-[1rem] leading-7 px-4 mb-10">
        <p className="mb-5">
          <span className="font-semibold text-[#0096c7]">MediCare Plus</span>{" "}
          was founded in 2018 with a single mission:{" "}
          <span className="font-semibold">
            make high-quality healthcare accessible to every American
          </span>
          . What began as one clinic in Austin, TX has grown into a trusted
          network of medical centers serving 50,000+ patients across the United
          States.
        </p>
        <p>
          We combine compassionate care with cutting-edge medical technology —
          offering everything from in-person consultations and advanced
          diagnostics to telehealth available in all 50 states. Our{" "}
          <span className="font-semibold">
            Joint Commission–accredited facilities and board-certified physicians
          </span>{" "}
          ensure that every patient receives the safest, most effective care
          possible. We don&apos;t just treat illness — we partner with you on
          your journey to lasting health.
        </p>
      </div>

      {/* Value Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left px-4">
        {values.map((v, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-white/5 border border-[#48bfe3]/20 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-[#0096c7]/30 transition-all"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-2">
              {v.icon}
              <h4 className="font-semibold text-gray-900 dark:text-white">{v.title}</h4>
            </div>
            <p className="text-sm text-gray-600 dark:text-white/60 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Trust Badges */}
      <motion.div
        className="mt-8 flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        {["🏅 Joint Commission Accredited", "✅ AMA Member Physicians", "🌟 Top Healthcare Brand 2024", "🔒 HIPAA Compliant"].map(
          (badge, i) => (
            <span
              key={i}
              className="bg-[#0096c7]/10 border border-[#0096c7]/20 text-[#0077b6] dark:text-[#48bfe3] text-xs font-medium px-4 py-2 rounded-full"
            >
              {badge}
            </span>
          )
        )}
      </motion.div>
    </motion.section>
  );
}

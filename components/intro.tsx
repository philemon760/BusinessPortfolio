"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsCalendarCheckFill } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[54rem] mx-auto text-center sm:mb-0 scroll-mt-[100rem]"
    >
      {/* Hero Badge */}
      <motion.div
        className="inline-flex items-center gap-2 bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#00b4d8] text-sm font-medium px-4 py-2 rounded-full mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="w-2 h-2 bg-[#00b4d8] rounded-full animate-pulse" />
        Trusted American Healthcare · Est. 2018
      </motion.div>

      {/* Main Headline */}
      <motion.h1
        className="mb-5 px-4 text-3xl font-bold !leading-[1.3] sm:text-5xl text-gray-900 dark:text-white"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Your Health Is Our{" "}
        <span className="text-[#0096c7]">Greatest Priority</span>
      </motion.h1>

      {/* Subheading */}
      <motion.p
        className="mb-8 px-4 text-lg text-gray-600 dark:text-white/70 leading-relaxed max-w-[40rem] mx-auto"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        MediCare Plus delivers compassionate, board-certified medical care across
        the United States — from primary consultations and telehealth to advanced
        diagnostics and preventive wellness. Because every patient deserves the
        best.
      </motion.p>

      {/* Trust Stats */}
      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-10 text-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {[
          { value: "50,000+", label: "Patients Served" },
          { value: "120+", label: "Licensed Physicians" },
          { value: "3", label: "Medical Centers" },
          { value: "24/7", label: "Emergency Care" },
        ].map((stat, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white/60 dark:bg-white/5 border border-[#48bfe3]/20 rounded-2xl px-5 py-3 shadow-sm"
          >
            <span className="text-[#0096c7] font-bold text-xl">{stat.value}</span>
            <span className="text-gray-500 dark:text-white/50">{stat.label}</span>
          </div>
        ))}
      </motion.div>

      {/* CTA Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.6 }}
      >
        <Link
          href="#contact"
          className="group bg-[#0096c7] text-white px-8 py-3.5 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-[#0077b6] active:scale-105 transition shadow-lg shadow-[#0096c7]/25"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          <BsCalendarCheckFill className="text-base" />
          Book Appointment
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <Link
          href="tel:+18005551234"
          className="group bg-white dark:bg-white/10 text-[#0096c7] dark:text-white border border-[#0096c7]/30 dark:border-white/20 px-8 py-3.5 flex items-center gap-2 rounded-full focus:scale-[1.05] hover:scale-[1.05] active:scale-100 transition cursor-pointer shadow-sm"
        >
          <FaPhoneAlt className="text-sm" />
          Emergency: 1-800-555-1234
        </Link>
      </motion.div>
    </section>
  );
}

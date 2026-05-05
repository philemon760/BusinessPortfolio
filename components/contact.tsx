"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 mx-auto sm:mb-28 w-[min(100%,46rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Book an Appointment</SectionHeading>

      <motion.div
        className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />

      <p className="text-gray-600 dark:text-white/70 mb-8 max-w-[38rem] mx-auto leading-relaxed">
        Fill out the form below and our team will confirm your appointment within
        2 hours. For emergencies, call us at{" "}
        <a
          className="underline text-[#0096c7] font-medium"
          href="tel:+18005551234"
        >
          1-800-555-1234
        </a>
        .
      </p>

      {/* Quick Info Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-sm">
        {[
          { icon: <FaPhoneAlt />, label: "1-800-555-1234" },
          { icon: <FaEnvelope />, label: "care@medicareplus.com" },
          { icon: <FaMapMarkerAlt />, label: "Austin, TX, USA" },
          { icon: <FaClock />, label: "Mon–Sat, 8am–8pm CT" },
        ].map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-1.5 bg-white dark:bg-white/5 border border-[#48bfe3]/20 rounded-xl p-3 shadow-sm"
          >
            <span className="text-[#0096c7] text-base">{item.icon}</span>
            <span className="text-gray-600 dark:text-white/60 text-xs leading-tight">
              {item.label}
            </span>
          </div>
        ))}
      </div>

      <form
        className="mt-6 flex flex-col gap-3 dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Appointment request sent! We'll confirm shortly.");
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            className="h-14 px-4 rounded-xl border border-gray-200 dark:border-[#48bfe3]/20 bg-white dark:bg-white/80 transition-all dark:outline-none focus:ring-2 focus:ring-[#0096c7]/30 focus:border-[#0096c7] placeholder:text-gray-400"
            name="patientName"
            type="text"
            required
            maxLength={200}
            placeholder="Full Name"
          />
          <input
            className="h-14 px-4 rounded-xl border border-gray-200 dark:border-[#48bfe3]/20 bg-white dark:bg-white/80 transition-all dark:outline-none focus:ring-2 focus:ring-[#0096c7]/30 focus:border-[#0096c7] placeholder:text-gray-400"
            name="patientPhone"
            type="tel"
            required
            maxLength={20}
            placeholder="Phone Number (US)"
          />
        </div>
        <input
          className="h-14 px-4 rounded-xl border border-gray-200 dark:border-[#48bfe3]/20 bg-white dark:bg-white/80 transition-all dark:outline-none focus:ring-2 focus:ring-[#0096c7]/30 focus:border-[#0096c7] placeholder:text-gray-400"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Email Address"
        />
        <select
          className="h-14 px-4 rounded-xl border border-gray-200 dark:border-[#48bfe3]/20 bg-white dark:bg-white/80 transition-all dark:outline-none focus:ring-2 focus:ring-[#0096c7]/30 focus:border-[#0096c7] text-gray-500"
          name="service"
          defaultValue=""
        >
          <option value="" disabled>
            Select a Service
          </option>
          <option value="primary-care">Primary Care</option>
          <option value="telehealth">Telehealth Consultation</option>
          <option value="diagnostics">Diagnostics & Lab Testing</option>
          <option value="preventive">Preventive Health Checkup</option>
          <option value="emergency">Emergency Services</option>
        </select>
        <textarea
          className="h-40 rounded-xl border border-gray-200 dark:border-[#48bfe3]/20 p-4 bg-white dark:bg-white/80 transition-all dark:outline-none focus:ring-2 focus:ring-[#0096c7]/30 focus:border-[#0096c7] resize-none placeholder:text-gray-400"
          name="message"
          placeholder="Describe your symptoms or reason for visit..."
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

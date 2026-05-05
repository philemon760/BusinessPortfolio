"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const testimonials = [
  {
    name: "Jennifer Walsh",
    role: "Patient · Austin, TX",
    avatar: "👩‍💼",
    rating: 5,
    quote:
      "MediCare Plus completely changed my experience with healthcare. The doctors are incredibly thorough and caring. Booking an appointment online took less than 2 minutes, and the telehealth consultation was seamless.",
  },
  {
    name: "Dr. Michael Carter",
    role: "Referred Patient · Dallas, TX",
    avatar: "👨‍⚕️",
    rating: 5,
    quote:
      "As a physician myself, I was impressed by the diagnostic accuracy and the quality of their lab reports. The digital health records system is truly world-class. I now refer my own family here.",
  },
  {
    name: "Patricia Nguyen",
    role: "Preventive Checkup · Atlanta, GA",
    avatar: "👩‍🦱",
    rating: 5,
    quote:
      "Their Preventive Health Checkup package caught an early warning sign that other clinics had missed. The team was so gentle and professional. I genuinely feel they saved my life.",
  },
  {
    name: "David Thompson",
    role: "Emergency Patient · Austin, TX",
    avatar: "👨‍💼",
    rating: 5,
    quote:
      "I rushed to MediCare Plus at midnight with chest pain. The emergency team responded within minutes. Fast, professional, and compassionate — I couldn't have asked for better care in the US.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-sm mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i}>★</span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const { ref } = useSectionInView("Testimonials" as any, 0.2);

  return (
    <section
      id="testimonials"
      ref={ref}
      className="mb-28 max-w-[60rem] mx-auto scroll-mt-28 sm:mb-40"
    >
      <div className="text-center mb-10">
        <SectionHeading>What Our Patients Say</SectionHeading>
        <motion.div
          className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          viewport={{ once: false }}
        />
        <p className="text-gray-600 dark:text-white/60 text-sm max-w-[36rem] mx-auto">
          Real stories from real patients across Texas and Georgia. The trust of
          50,000+ American families is our greatest achievement.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 px-4">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-white dark:bg-white/5 border border-[#48bfe3]/20 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-[#0096c7]/30 transition-all text-left relative"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            {/* Quote mark */}
            <span className="absolute top-4 right-5 text-4xl text-[#0096c7]/10 font-serif select-none">
              &ldquo;
            </span>

            <StarRating count={t.rating} />

            <p className="text-gray-700 dark:text-white/70 text-sm leading-relaxed mb-5 italic">
              &ldquo;{t.quote}&rdquo;
            </p>

            <div className="flex items-center gap-3 border-t border-gray-100 dark:border-white/10 pt-4">
              <span className="text-3xl">{t.avatar}</span>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white text-sm">
                  {t.name}
                </p>
                <p className="text-gray-500 dark:text-white/40 text-xs">
                  {t.role}
                </p>
              </div>
              <span className="ml-auto bg-[#0096c7]/10 text-[#0096c7] text-[10px] font-medium px-2 py-1 rounded-full">
                ✓ Verified
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

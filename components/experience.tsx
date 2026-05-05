"use client";

import React from "react";
import SectionHeading from "./section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Journey");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mx-auto mb-28 sm:mb-40">
      <SectionHeading>Our Journey</SectionHeading>
      <motion.div
        className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />

      <p className="text-center text-gray-600 dark:text-white/60 text-sm mb-10 max-w-[36rem] mx-auto">
        From a single clinic to a network of trusted medical centers — here&apos;s how MediCare Plus grew to serve tens of thousands of patients.
      </p>

      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background:
                  theme === "light" ? "#f0f8ff" : "rgba(0, 150, 199, 0.08)",
                boxShadow: "none",
                border: "1px solid rgba(0, 150, 199, 0.15)",
                textAlign: "left",
                padding: "1.3rem 2rem",
                borderRadius: "0.75rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #90caf9"
                    : "0.4rem solid rgba(0, 180, 216, 0.4)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background:
                  theme === "light" ? "#0096c7" : "rgba(0, 150, 199, 0.6)",
                color: "white",
                fontSize: "1.4rem",
                boxShadow: "0 0 0 4px rgba(0,150,199,0.2)",
              }}
            >
              <h3 className="font-bold text-[#0077b6] dark:text-[#48bfe3] capitalize">
                {item.title}
              </h3>
              <p className="font-normal !mt-0 text-gray-500 dark:text-white/50 text-sm">
                📍 {item.location}
              </p>
              <p className="!mt-2 !font-normal text-gray-700 dark:text-white/75 text-sm leading-relaxed">
                {item.description}
              </p>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}

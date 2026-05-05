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
      id="about"
      className="mb-28 max-w-[45rem] mx-auto text-center  leading-8 sm:mb-40 scroll-mt-28"
    
    >
      <SectionHeading >
        About Us
      </SectionHeading>

      <motion.div
        className="relative bottom-4 mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />

      <div className="text-[#184e77] dark:text-[#a6dcef] text-[1rem] leading-7 px-4">
        <p className="mb-5">
          We are a passionate team of <span className="font-semibold">full-stack developers</span> committed to helping businesses grow through modern technology. Specializing in{" "}
          <span className="font-semibold">MongoDB, Express.js, React.js, and Node.js</span>, we craft dynamic websites, scalable backend systems, and business-driven solutions.
        </p>

        <p>
          Our focus is simple — deliver clean code, user-centered experiences, and results that empower brands to move forward. Whether you’re starting from scratch or scaling up, we bring the expertise and creativity to transform ideas into digital success.
        </p>
      </div>
    </motion.section>
  );
}

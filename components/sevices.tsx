"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { servicesData } from "@/lib/data";
import Service from "./service";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Services() {
  const { ref } = useSectionInView("Services", 0.5);

  return (
    <section
      ref={ref}
      id="services"
      className="scroll-mt-28 mb-28 w-[80%] mx-auto"
    >
      <SectionHeading>Our services</SectionHeading>
      <motion.div
        className="relative  bottom-4  mx-auto h-1 bg-[#caf0f8] w-24"
        initial={{ scaleX: 0, originX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        viewport={{ once: false }}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-w-fit mx-auto gap-6 justify-items-center">
        {servicesData.map((service, index) => (
          <Service key={index} index={index + 1} {...service} />
        ))}
      </div>
    </section>
  );
}

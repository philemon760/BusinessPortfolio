"use client";

import { useRef } from "react";
import { servicesData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

type ServiceProps = (typeof servicesData)[number] & { index: number };

export default function Service({
  title,
  description,
  skills,
  icon,
  index,
}: ServiceProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="w-full max-w-sm"
    >
      <div className="w-full bg-[#184e77] shadow-[0px_0px_15px_rgba(0,0,0,0.09)] p-9 space-y-3 relative overflow-hidden rounded-lg h-[26rem] sm:h-[24rem] md:h-[28rem] lg:h-[30rem] grid grid-rows-[5rem_3rem_1fr_auto]">
        <div className="w-24 h-24 bg-[#caf0f8] rounded-full absolute -right-5 -top-7 flex items-center justify-center">
          <p className="text-[#184e77] text-2xl">
            {index.toString().padStart(2, "0")}
          </p>
        </div>
        <div className="text-[#00b4d8] text-5xl w-12">{icon}</div>
        <h3 className="font-bold text-xl text-[#caf0f8] dark:text-[#caf0f8]">
          {title}
        </h3>
        <p className="text-sm text-[#caf0f8] dark:text-[#caf0f8] leading-6">
          {description}
        </p>
        <ul className="flex flex-wrap gap-2 pt-0">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-[#00b4d8] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

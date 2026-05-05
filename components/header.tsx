"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#48bfe3]/40 bg-[#0a3d5c]/90 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[56rem] sm:rounded-full dark:border-[#48bfe3]/30 dark:bg-[#06263a]/90 flex items-center justify-between px-5 sm:px-7 -translate-x-1/2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Brand Logo */}
        <motion.div
          className="flex items-center gap-2 shrink-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-[#00b4d8] text-lg">⚕️</span>
          <span className="text-white font-bold text-sm tracking-tight">
            MediCare<span className="text-[#00b4d8]">Plus</span>
          </span>
        </motion.div>

        {/* Navigation Links */}
        <ul className="flex items-center gap-1 text-[0.82rem] font-medium text-white">
          {links.map((link) => (
            <motion.li
              className="flex items-center justify-center relative"
              key={link.hash}
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                className={clsx(
                  "flex items-center justify-center px-3 py-2 rounded-full hover:text-[#9bcce7] transition dark:text-white/70 dark:hover:text-[#48bfe3]",
                  {
                    "text-[#48bfe3] dark:text-[#48bfe3]":
                      activeSection === link.name,
                  }
                )}
                href={link.hash}
                onClick={() => {
                  setActiveSection(link.name);
                  setTimeOfLastClick(Date.now());
                }}
              >
                {link.name}
                {link.name === activeSection && (
                  <motion.span
                    className="bg-[#48bfe3]/20 rounded-full absolute inset-0 -z-10 dark:bg-[#48bfe3]/30"
                    layoutId="activeSection"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Emergency CTA */}
        <motion.a
          href="tel:+922111911911"
          className="hidden sm:flex items-center gap-1.5 bg-red-600/80 hover:bg-red-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition shrink-0"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          🚑 Emergency
        </motion.a>
      </motion.nav>
    </header>
  );
}

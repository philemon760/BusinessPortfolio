"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";
import clsx from "clsx";
import { useActiveSectionContext } from "@/context/active-section-context";
import Image from "next/image";
import logo from "@/public/myimage.png";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <header className="z-[999] relative">
      <motion.nav
        className="fixed top-0 left-1/2 h-[4.5rem] w-full rounded-none border border-[#48bfe3]/40 bg-[#184e77]/80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[50rem] sm:rounded-full dark:border-[#48bfe3]/30 dark:bg-[#184e77]/75 flex items-center justify-around px-4 sm:px-6 -translate-x-1/2"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo on the left */}
        <motion.div
          className="flex items-center"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src={logo}
            alt="Logo"
            width={40}
            height={40}
            quality={95}
            priority={true}
            className="h-10 w-10 rounded-full object-cover border-[0.2rem] border-[#48bfe3]/40 dark:border-[#48bfe3]/30 sm:h-8 sm:w-8"
          />
        </motion.div>

        {/* Navigation Links on the right */}
        <ul className="flex items-center gap-5 text-[0.9rem] font-medium text-white sm:gap-5">
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
                  "flex items-center justify-center px-3 py-3 hover:text-[#9bcce7] transition dark:text-white/70 dark:hover:text-[#48bfe3]",
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
      </motion.nav>
    </header>
  );
}

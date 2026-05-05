"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Image from "next/image";
import myLogo from "@/public/myimage.png";

export default function Footer() {
  return (
    <motion.footer
      className="py-10 px-4 text-center border border-[#48bfe3]/40 bg-[#184e77]/80 shadow-lg shadow-black/[0.05] backdrop-blur-[0.5rem] dark:border-[#48bfe3]/30 dark:bg-[#184e77]/75 relative "
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-6">
        <div className="flex flex-col items-start">
          <motion.div
            className="text-2xl font-bold mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Image
              src={myLogo}
              alt="Profile picture"
              width={192}
              height={192}
              quality={95}
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-[#48bfe3]/40 shadow-xl dark:border-[#48bfe3]/30"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-start">
          <motion.h3
            className="text-lg font-semibold text-white ml-5 mb-4 dark:text-white/70"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Links
          </motion.h3>
          <ul className="space-y-2">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <a
                  href={link.hash}
                  className="text-white hover:text-[#0077b6] transition dark:text-white/70 dark:hover:text-[#48bfe3]"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start">
          <motion.h3
            className="text-lg font-semibold text-white mb-4 dark:text-white/70"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact Us
          </motion.h3>
          <motion.p
            className="text-white mb-2 dark:text-white/70"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            1234 Street Name, City, Country
          </motion.p>
          <motion.p
            className="text-white mb-2 dark:text-white/70"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Email:{" "}
            <a
              href="mailto:contact@example.com"
              className="hover:text-[#0077b6] transition dark:hover:text-[#48bfe3]"
            >
              contact@example.com
            </a>
          </motion.p>
          <motion.p
            className="text-white dark:text-white/70"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Phone: +1 (123) 456-7890
          </motion.p>
        </div>
      </div>

      <motion.div
        className="border-t border-[#48bfe3]/40 pt-6 dark:border-[#48bfe3]/30"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <small className="block text-xs text-white mb-2 dark:text-white/70">
          © 2025 Muhammad Areeb. All rights reserved.
        </small>
        <p className="text-xs text-white dark:text-white/70">
          <span className="font-semibold">About this website:</span> Built with
          React.js, Next.js, TypeScript, Tailwind CSS, and Framer Motion.
        </p>
      </motion.div>
    </motion.footer>
  );
}

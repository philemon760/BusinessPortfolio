"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaAmbulance,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="py-12 px-6 text-center border border-[#48bfe3]/40 bg-[#0a3d5c]/90 shadow-lg shadow-black/[0.1] backdrop-blur-[0.5rem] dark:border-[#48bfe3]/30 dark:bg-[#06263a]/90 relative"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto mb-8 text-left">
        {/* Brand Column */}
        <div className="flex flex-col">
          <motion.div
            className="mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#00b4d8] text-2xl">⚕️</span>
              <span className="text-white font-bold text-xl tracking-tight">
                MediCare<span className="text-[#00b4d8]">Plus</span>
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Trusted American healthcare for every family. Quality care,
              compassionate service — always.
            </p>
          </motion.div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-2 mt-2">
            {["Joint Commission Accredited", "HIPAA Compliant"].map(
              (badge, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-[#00b4d8]/10 border border-[#00b4d8]/30 text-[#48bfe3] px-2 py-1 rounded-full"
                >
                  ✓ {badge}
                </span>
              )
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col">
          <motion.h3
            className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Quick Links
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
                  className="text-white/70 hover:text-[#00b4d8] transition text-sm"
                >
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col">
          <motion.h3
            className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Contact Us
          </motion.h3>
          <ul className="space-y-3 text-sm text-white/70">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-[#00b4d8] mt-0.5 shrink-0" />
              <span>
                4521 Medical Pkwy, Suite 200
                <br />
                Austin, TX 78756, USA
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#00b4d8] shrink-0" />
              <a
                href="tel:+18005551234"
                className="hover:text-[#00b4d8] transition"
              >
                1-800-555-1234
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#00b4d8] shrink-0" />
              <a
                href="mailto:care@medicareplus.com"
                className="hover:text-[#00b4d8] transition"
              >
                care@medicareplus.com
              </a>
            </li>
          </ul>
        </div>

        {/* Hours & Emergency */}
        <div className="flex flex-col">
          <motion.h3
            className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-4"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Working Hours
          </motion.h3>
          <ul className="space-y-2 text-sm text-white/70 mb-4">
            <li className="flex items-center gap-2">
              <FaClock className="text-[#00b4d8]" />
              <span>Mon – Fri: 8:00 AM – 8:00 PM CT</span>
            </li>
            <li className="flex items-center gap-2">
              <FaClock className="text-[#00b4d8]" />
              <span>Saturday: 9:00 AM – 5:00 PM CT</span>
            </li>
            <li className="text-white/40 text-xs pl-5">
              Sunday: Emergency Only
            </li>
          </ul>

          {/* Emergency Box */}
          <div className="bg-red-600/20 border border-red-500/30 rounded-xl p-3 flex items-center gap-2">
            <FaAmbulance className="text-red-400 text-lg shrink-0" />
            <div>
              <p className="text-red-300 text-xs font-semibold uppercase tracking-wide">
                24/7 Emergency
              </p>
              <a
                href="tel:+18005559911"
                className="text-white font-bold text-sm hover:text-red-300 transition"
              >
                1-800-555-9911
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Row */}
      <motion.div
        className="border-t border-[#48bfe3]/20 pt-6 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-white/40 mb-2 font-medium uppercase tracking-widest">
          Our Locations
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-white/50">
          {[
            "🏥 Austin, TX (HQ)",
            "🏥 Dallas, TX",
            "🏥 Atlanta, GA",
            "💻 Telehealth — All 50 States",
          ].map((loc, i) => (
            <span key={i}>{loc}</span>
          ))}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p className="text-xs text-white/40 mb-1">
          © 2025 MediCare Plus, LLC. All rights reserved. · Joint Commission
          Accredited · HIPAA Compliant
        </p>
        <p className="text-xs text-white/30">
          This website is for informational purposes only. Always consult a
          licensed physician for medical advice.
        </p>
      </motion.div>
    </motion.footer>
  );
}

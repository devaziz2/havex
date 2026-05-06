"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.png"
        alt="hero background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Header */}
      <Header variant="overlay" />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-400 leading-tight max-w-4xl"
        >
          AFFORDABLE, INNOVATIVE TELEPHONY SOLUTIONS
        </motion.h1>

        {/* Sub Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-white/90 text-sm md:text-lg font-medium tracking-wide"
        >
          VoIP | PBX | Web | DevOps | Mobile
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-8"
        >
          <Link href="#contact">
            <button
              className="px-6 py-3 rounded-full cursor-pointer text-white text-sm md:text-base font-semibold
             bg-gradient-to-b from-[#2563EB] to-[#1E293B]
             shadow-[ -7px_8px_9.2px_0px_rgba(0,0,0,0.25) ]
             transition-all duration-300 hover:scale-105 hover:brightness-110"
            >
              Consult With Us
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

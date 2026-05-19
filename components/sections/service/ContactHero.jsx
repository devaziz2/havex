"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Header from "@/components/common/Header";

export default function ContactHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/contact.webp"
        alt="contact hero background"
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
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-cyan-400 leading-tight max-w-4xl"
        >
          CONTACT US
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl"
        >
          We&apos;d love to hear from you. Get in touch with the HAVEX team.
        </motion.p>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20"
        >
          <path
            d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z"
            fill="#f3f4f6"
          />
        </svg>
      </div>
    </section>
  );
}

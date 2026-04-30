"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Hero() {
  const [open, setOpen] = useState(false);
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
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-20"
      >
        <div className="flex items-center justify-between px-6 py-5 rounded-full backdrop-blur-md bg-white/40 border border-white/60 shadow-lg">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="HAVEX logo"
            width={120}
            height={40}
            priority
            className="object-contain"
          />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm text-black font-medium">
            <Link href="#about" className="hover:text-gray-800 transition">
              About us
            </Link>
            <Link href="#services" className="hover:text-gray-800 transition">
              Services
            </Link>
            <Link href="#contact" className="hover:text-gray-800 transition">
              Contact us
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-black"
          >
            <Menu size={28} />
          </button>
        </div>
      </motion.header>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setOpen(false)}
            />

            {/* Drawer Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-40 shadow-xl p-6"
            >
              {/* Close Icon */}
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* Links */}
              <nav className="mt-10 flex flex-col gap-6 text-lg font-medium text-black">
                <Link href="#about" onClick={() => setOpen(false)}>
                  About us
                </Link>
                <Link href="#services" onClick={() => setOpen(false)}>
                  Services
                </Link>
                <Link href="#contact" onClick={() => setOpen(false)}>
                  Contact us
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>

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

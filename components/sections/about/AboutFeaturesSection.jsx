"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const accordionItems = [
  {
    title: "Global Flexibility",
    desc: "Work from home, remotely, or anywhere in the world with uninterrupted service.",
    defaultOpen: true,
  },
  {
    title: "Scaleable Solutions",
    desc: "Easily scale your communication infrastructure up or down to match your business growth.",
    defaultOpen: false,
  },
  {
    title: "Call Center",
    desc: "Full-featured call center capabilities including auto-dial, agent management, and real-time reporting.",
    defaultOpen: false,
  },
];

const alwaysOnCards = [
  {
    title: "CALL CENTER",
    desc: "Keep Your Business Running During Outages.",
  },
  {
    title: "LONG-TERM BACKUP",
    desc: "Safeguard Your Communication Data.",
  },
  {
    title: "DATA ARCHIVING",
    desc: "Store Call Records Securely For Future Access.",
  },
  {
    title: "CUSTOM INTEGRATIONS",
    desc: "Sync With Your CRM, ERP, Or Other Tools.",
  },
];

function AccordionItem({ title, desc, isOpen, onToggle }) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-sm md:text-base">
          {title}
        </span>
        {!isOpen && (
          <span className="text-gray-500 text-xl font-light leading-none">
            +
          </span>
        )}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-gray-600 leading-relaxed bg-white">
              {desc}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function AboutFeaturesSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-10 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Card 1 — Work Anywhere */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10"
        >
          {/* Top: Text + Image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
                Work Anywhere, Scale Effortlessly
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                At Havex, we offer a range of telephony services tailored to
                meet the unique needs of your business.
              </p>
            </div>
            <div className="relative w-full h-52 md:h-60 rounded-2xl overflow-hidden">
              <Image
                src="/s11.png"
                alt="Work Anywhere"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Accordion */}
          <div className="flex flex-col gap-3">
            {accordionItems.map((item, i) => (
              <AccordionItem
                key={i}
                title={item.title}
                desc={item.desc}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </motion.div>

        {/* Card 2 — Strategic Partnerships */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg px-8 py-10 md:px-12 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Strategic Partnerships, Enhanced Offerings
          </h2>
          <p className="text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide leading-relaxed max-w-2xl mx-auto">
            HAVEX COLLABORATES WITH INDUSTRY-LEADING PARTNERS TO EXPAND OUR
            TELEPHONY FEATURE SET AND DELIVER CUTTING-EDGE INTEGRATIONS,
            ENSURING YOUR BUSINESS STAYS COMPETITIVE AND CONNECTED.
          </p>
        </motion.div>

        {/* Card 3 — Always-On Service */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl shadow-lg p-8 md:p-10"
          style={{
            background:
              "linear-gradient(135deg, #0891b2 0%, #06b6d4 50%, #67e8f9 100%)",
          }}
        >
          <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wide mb-3">
            Always-On, Business-Class Service
          </h2>
          <p className="text-xs md:text-sm text-white/90 uppercase tracking-wide leading-relaxed mb-8 max-w-2xl">
            OUR SOLUTIONS FEATURE ALWAYS-ON TECHNOLOGY FOR DEPENDABLE
            PERFORMANCE, SUPPORTED BY ALL MAJOR OPERATING SYSTEMS (WINDOWS,
            MACOS, IOS, ANDROID). OPTIONAL ADD-ONS INCLUDE:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {alwaysOnCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-5 flex flex-col gap-2"
              >
                <h3 className="text-xs font-bold text-gray-900 uppercase tracking-wide">
                  {card.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

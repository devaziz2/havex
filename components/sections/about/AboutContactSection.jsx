"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const contactItems = [
  {
    title: "Emails",
    lines: ["accounts@havex.co.za", "sales@havex.co.za", "support@havex.co.za"],
  },
  {
    title: "Phone Number",
    lines: ["021 109 3333"],
  },
  {
    title: "Trading Times",
    lines: [
      "sales mon- fri = 08h00am – 17h00pm",
      "support mon – fri = 08h00am 17h00pm",
      "accounts mon – fri = 08h00-16h00pm",
    ],
  },
];

export default function AboutContactSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      className="relative w-full"
      style={{
        background:
          "linear-gradient(160deg, #3badd6 0%, #2089b8 40%, #1a6fa0 100%)",
      }}
    >
      {/* Wave top */}
      <div className="w-full overflow-hidden leading-[0] -mb-1">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full h-24 md:h-32"
        >
          <path
            d="M0,60 C240,100 480,20 720,60 C960,100 1200,30 1440,60 L1440,0 L0,0 Z"
            fill="#ecfeff"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 pb-20 pt-4">
        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold italic text-white leading-tight mb-6"
        >
          GET THE TELEPHONY YOU WANT AT THE PRICE YOU WANT
        </motion.h2>

        {/* Contact Us Label */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-bold italic text-white mb-10"
        >
          C0NTACT US
        </motion.h3>

        {/* Collapse Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px border-t border-white/20">
          {contactItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="pt-5 md:pr-6"
            >
              {/* Header row */}
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-3 mb-3 group"
              >
                <div className="flex items-center gap-3">
                  {/* Cyan dot */}
                  <span className="w-3 h-3 rounded-full bg-cyan-300 flex-shrink-0" />
                  <span className="font-bold text-white text-sm md:text-base">
                    {item.title}
                  </span>
                </div>
                <span className="text-white/70 text-lg leading-none transition-transform duration-300 group-hover:text-white">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {/* Collapsible content */}
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="flex flex-col gap-2 pb-4">
                      {item.lines.map((line, j) => (
                        <p
                          key={j}
                          className="text-sm text-white/90 leading-relaxed"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Divider */}
              <div className="border-t border-white/20" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

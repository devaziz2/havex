"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

function VicidailSolution() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 ">
        {/* ================= WHY HAVEX VICIDIAL ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          {/* Heading tab */}
          <div className="inline-block bg-white rounded-t-2xl px-8 py-3 shadow-sm">
            <h3 className="text-lg font-bold text-black tracking-wide">
              WHY HAVEX VICIDIAL SOLUTIONS?
            </h3>
          </div>

          {/* Content box */}
          <div className="bg-[#cfe8f3] border border-cyan-300 rounded-b-2xl rounded-tr-2xl p-8 shadow-md">
            <ul className="flex flex-col gap-5 mb-6">
              {[
                {
                  icon: "/services/s15.svg",
                  text: "AFFORDABILITY: COST-EFFECTIVE CALL CENTER POWER WITHOUT COMPROMISE.",
                },
                {
                  icon: "/services/s16.svg",
                  text: "EXPERIENCE: NEARLY TWO DECADES OF VICIDIAL EXPERTISE ROOTED IN SOUTH AFRICA.",
                },
                {
                  icon: "/services/s17.svg",
                  text: "FLEXIBILITY: ONSITE OR CLOUD OPTIONS, DEPLOYABLE GLOBALLY.",
                },
                {
                  icon: "/services/s18.svg",
                  text: "INNOVATION: CUSTOM FEATURES AND INTEGRATIONS TO FIT YOUR WORKFLOW.",
                },
              ].map((point, i) => (
                <li key={i} className="flex items-center gap-4">
                  <Image
                    src={point.icon}
                    alt={point.text}
                    width={40}
                    height={40}
                    className="shrink-0"
                  />
                  <span className="text-sm font-bold italic text-gray-800 tracking-wide">
                    {point.text}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              From small teams in Durban to global operations, Havex Vicidial
              Solutions deliver the reliability, scalability, and local support
              South African businesses need to succeed. Contact us today to
              build your ideal call center solution!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default VicidailSolution;

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "/about/4.svg",
    title: "PARTNERED WITH SOUTH AFRICA'S VICIDIAL EXPERTS",
    desc: "WE'VE PARTNERED WITH THE VICIDIAL EXPERTS IN SOUTH AFRICA, WHO HAVE BEEN BUILDING LARGE-SCALE VICIDIAL SOLUTIONS SINCE THE DAWN OF THE AFRICAN ASTERISK REVOLUTION NEARLY 20 YEARS AGO. THROUGH THIS COLLABORATION, HAVEX DELIVERS UNMATCHED EXPERTISE, PROVIDING RELIABLE, HIGH-PERFORMANCE CALL CENTER SYSTEMS TAILORED TO HELP YOUR BUSINESS THRIVE.",
  },
  {
    icon: "/about/5.svg",
    title: "TAILORED, SCALABLE, AND GLOBAL",
    desc: "HAVEX GOES BEYOND STANDARD DEPLOYMENTS. WE CUSTOMIZE VICIDIAL WITH NEW FEATURES AND INTEGRATE IT WITH THIRD-PARTY APPLICATIONS TO ENHANCE YOUR OPERATIONAL EFFICIENCY. WHETHER YOU NEED ONSITE HOSTING, CLOUD-BASED DEPLOYMENT, OR A SOLUTION THAT WORKS ANYWHERE IN THE WORLD, HAVEX SCALES WITH YOU—WHEREVER YOUR BUSINESS TAKES YOU.",
  },
  {
    icon: "/about/6.svg",
    title: "EXPERT SUPPORT FOR EVERY SETUP",
    desc: "HAVEX OFFERS CONSULTATION AND SERVICE LEVEL AGREEMENTS (SLAS) FOR CLIENTS MANAGING THEIR OWN VICIDIAL INSTANCES. REACH OUT TO DISCUSS YOUR REQUIREMENTS AND GET DEPENDABLE ADVICE FROM SOUTH AFRICA'S VICIDIAL SPECIALISTS.",
  },
];

export default function AboutWhyHavexSection() {
  return (
    <section className="py-16 px-4 bg-cyan-50">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-2xl md:text-3xl font-bold text-gray-900 uppercase tracking-widest"
        >
          WHY HAVEX ?
        </motion.h2>

        {/* Intro Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="border border-cyan-300 rounded-2xl bg-cyan-50 px-6 py-5"
        >
          <p className="text-center text-xs md:text-sm font-semibold text-gray-700 uppercase tracking-wide leading-relaxed">
            WITH HAVEX, YOU&apos;RE NOT JUST GETTING A TELEPHONY
            SYSTEM—YOU&apos;RE PARTNERING WITH A SOUTH AFRICAN PROVIDER
            DEDICATED TO DELIVERING SCALABLE, COST-EFFECTIVE, AND INNOVATIVE
            SOLUTIONS. WHETHER YOU NEED A LOCAL 021 NUMBER OR A NATIONWIDE 0800
            LINE, WE&apos;VE GOT YOU COVERED WITH SUPPORT IN YOUR TIME ZONE
            (SAST)
          </p>
        </motion.div>

        {/* Feature Cards */}
        {cards.map((card, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-cyan-100 px-8 py-8 flex flex-col items-center text-center gap-5"
          >
            {/* Icon */}
            <div className="relative w-16 h-16">
              <Image
                src={card.icon}
                alt={card.title}
                fill
                className="object-contain"
              />
            </div>

            {/* Title */}
            <h3 className="text-sm md:text-base font-bold text-gray-900 uppercase tracking-wide">
              {card.title}
            </h3>

            {/* Divider */}
            <div className="w-12 h-px bg-gray-300" />

            {/* Description */}
            <p className="text-xs md:text-sm text-gray-600 uppercase tracking-wide leading-relaxed">
              {card.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

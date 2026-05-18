"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "/about/1.svg",
    title: "Innovation & Excellence",
    desc: "We build cutting-edge solutions using the latest technologies, ensuring your business stays ahead in an ever-evolving digital landscape.",
  },
  {
    icon: "/about/2.svg",
    title: "Client-Centric Approach",
    desc: "Every solution we craft is tailored to the unique needs of our clients, from small startups to large enterprises across South Africa and beyond.",
  },
  {
    icon: "/about/3.svg",
    title: "Trusted Partnership",
    desc: "As a Level 1 BBBEE company, we are committed to building lasting relationships rooted in transparency, reliability, and measurable results.",
  },
];

export default function AboutIntroSection() {
  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto flex flex-col gap-10">
        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-4">
              HAVEX: Powering Businesses With Innovative Technology Solutions
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              At HAVEX, we leverage powerful platforms and modern engineering to
              build multi-faceted digital solutions — from VoIP and call centre
              infrastructure to web, mobile, and DevOps services. We are a{" "}
              <span className="font-bold">Level 1 BBBEE company</span>,
              dedicated to delivering affordable, reliable, and innovative
              technology tailored to the unique needs of South African
              businesses, from small startups to large enterprises.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden">
            <Image
              src="/about/a.png"
              alt="HAVEX Mission"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* Three Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center text-center gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 relative">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-gray-900">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

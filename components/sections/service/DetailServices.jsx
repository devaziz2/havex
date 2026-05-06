"use client";

import Image from "next/image";
import { motion } from "framer-motion";

// ================= DATA =================

// Top Services
const services = [
  {
    icon: "/services/s1.svg",
    title: "VoIP Services",
    desc: "Reliable VoIP solutions tailored for seamless communication.",
  },
  {
    icon: "/services/s2.svg",
    title: "PBX",
    desc: "Cloud PBX systems with flexibility and scalability.",
  },
  {
    icon: "/services/s3.svg",
    title: "Web Dev",
    desc: "High-performance web applications with modern tech.",
  },
];

// Features (Rounded Cards)
const features = [
  {
    icon: "/services/s7.svg",
    title: "Voice Menus",
    desc: "Professional auto-attendants to guide callers effortlessly.",
  },
  {
    icon: "/services/s8.svg",
    title: "Conference Rooms",
    desc: "Host team or client calls with ease.",
  },
  {
    icon: "/services/s9.svg",
    title: "Emergency Codes",
    desc: "Quick access to critical services when it matters most.",
  },
  {
    icon: "/services/s10.svg",
    title: "Queues",
    desc: "Manage incoming calls efficiently with smart distribution.",
  },
  {
    icon: "/services/s11.svg",
    title: "Ring Groups",
    desc: "Ensure calls reach the right people, every time.",
  },
  {
    icon: "/services/s12.svg",
    title: "More Features",
    desc: "Custom features to suit your workflow.",
  },
  {
    icon: "/services/s13.svg",
    title: "Voicemail (to Email)",
    desc: "Access voicemails anywhere with email delivery.",
  },
  {
    icon: "/services/s14.svg",
    title: "Time-Based Routing",
    desc: "Direct calls based on business hours or schedules.",
  },
];

// ================= ANIMATION =================

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// ================= COMPONENT =================

export default function DetailServicesSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 ">
        <div className="bg-[#cfe8f3] text-xl font-semibold text-black w-full  border border-cyan-400 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300   flex flex-col justify-center">
          At Havex, we leverage the robust telephony engines of Asteriskand
          FreeSwitch to build multi-tenant PBX platforms that deliver
          innovative, reliable, andaffordable communication solutions.
        </div>

        {/* ================= TOP SERVICE CARDS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center py-16"
        >
          {services.map((service, i) => (
            <motion.div
              key={i}
              variants={item}
              className="max-w-[320px] w-full"
            >
              <div
                className="overflow-hidden border border-cyan-400 shadow-md"
                style={{
                  clipPath:
                    "polygon(0 0, 100% 0, 100% 20%, 100% 73%, 78% 100%, 38% 100%, 0 100%, 0% 20%)",
                  borderRadius: "25px",
                }}
              >
                <div className="bg-[#cfe8f3] p-6 text-center min-h-[220px] flex flex-col justify-center">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={service.icon}
                      alt={service.title}
                      width={50}
                      height={50}
                    />
                  </div>
                  <h3 className="font-semibold mb-2">{service.title}</h3>
                  <p className="text-sm text-gray-700">{service.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ================= FEATURE HEADING ================= */}
        <h3 className="text-center font-semibold mb-10">
          EXTENSIVE OFFICE TELEPHONY FEATURES
        </h3>

        {/* ================= ROUNDED FEATURE CARDS ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        >
          {features.map((feature, i) => (
            <motion.div
              key={i}
              variants={item}
              className="bg-[#cfe8f3] border border-cyan-400 rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 max-w-[260px] w-full min-h-[220px] flex flex-col items-center justify-center"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={50}
                  height={50}
                />
              </div>
              <h4 className="font-bold text-base mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-700 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

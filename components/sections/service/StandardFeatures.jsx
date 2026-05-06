"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Auto Dial & Click-to-Dial Campaigns",
    desc: "Automate or manually control outbound calls with ease.",
  },
  {
    title: "Data Management",
    desc: "Keep customer information organized and accessible.",
  },
  {
    title: "Agent Management",
    desc: "Monitor and optimize your team’s performance.",
  },
  {
    title: "Advanced Reporting",
    desc: "Unlock insights with detailed call analytics.",
  },
  {
    title: "Voice Surveys",
    desc: "Gather caller feedback seamlessly.",
  },
  {
    title: "Real-Time Wallboards",
    desc: "View live metrics instantly.",
  },
  {
    title: "Third-Party Integrations",
    desc: "Sync with CRMs, ERPs, and more.",
  },
  {
    title: "Call Barging & Listening",
    desc: "Supervise and train agents discreetly.",
  },
  {
    title: "Call Recording",
    desc: "Record interactions for training or compliance.",
  },
  {
    title: "Call Scheduling & Callbacks",
    desc: "Stay on top of follow-ups.",
  },
  {
    title: "Call Dispositioning & Recycling",
    desc: "Tag and re-engage leads efficiently.",
  },
  {
    title: "Skip voicemails to save time",
    desc: "Skip voicemails to save time.",
  },
];

export default function StandardFeatures() {
  return (
    <section className="py-20 px-6 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Standard Features</h2>
        <p className="mt-3 text-gray-600 text-sm md:text-base">
          Havex equips your call center with a full suite of tools for maximum
          productivity.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
              ease: "easeOut",
            }}
            className="rounded-full px-6 py-5 shadow-md 
                       bg-gradient-to-r from-sky-100 to-sky-200
                       hover:shadow-lg transition-all duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-900">
              {item.title}
            </h3>
            <p className="text-sm text-gray-700 mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

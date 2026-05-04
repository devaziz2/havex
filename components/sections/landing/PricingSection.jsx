"use client";

import { motion } from "framer-motion";

const plans = [
  {
    category: "Web Dev",
    name: "Basic",
    price: "500",
    features: [
      "Custom Web Development",
      "SEO Optimization",
      "API Development",
      "Front & Back-End Development",
    ],
    highlight: false,
  },
  {
    category: "VoIP",
    name: "Standard",
    price: "20",
    features: [
      "Geographic DID Numbers",
      "Month to Month",
      "Prepaid only",
      "Portable Numbers",
    ],
    highlight: true,
  },
  {
    category: "PBX",
    name: "Premium",
    price: "99",
    features: [
      "Seamless Integration",
      "Unparalleled Flexibility",
      "Reduced Costs",
      "Boost Efficiency",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading — centered pill */}
        <div className="flex justify-center mb-12">
          <div className="px-12 py-3 rounded-full bg-gray-200 text-xl font-bold text-gray-800 shadow-sm">
            Discover Our Packages
          </div>
        </div>

        {/* Outer gradient container */}
        <div
          className="rounded-3xl py-16 px-4 sm:px-10"
          style={{
            background:
              "linear-gradient(135deg, #a8d8ea 0%, #5bb8d4 30%, #2e9cbf 60%, #1a7a9e 100%)",
          }}
        >
          {/* Cards row — stacked on mobile, overlapping on md+ */}
          <div className="flex flex-col items-center gap-6 md:flex-row md:items-end md:justify-center md:gap-0">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                  ease: "easeOut",
                }}
                className={`relative w-full max-w-70 md:max-w-55 ${
                  index > 0 ? "md:-ml-6" : ""
                }`}
                style={{ zIndex: plan.highlight ? 10 : 5 }}
              >
                <div
                  className="bg-[#b8e4f5] rounded-3xl w-full flex flex-col items-center shadow-xl px-6 py-8"
                  style={{
                    minHeight: "340px",
                    transform: plan.highlight ? "translateY(-28px)" : "none",
                    boxShadow: plan.highlight
                      ? "0 20px 50px rgba(0,0,0,0.25)"
                      : "0 8px 24px rgba(0,0,0,0.15)",
                  }}
                >
                  {/* Category */}
                  <span className="text-xs font-semibold tracking-widest uppercase text-gray-500 mb-1">
                    {plan.category}
                  </span>

                  {/* Plan name */}
                  <h3 className="text-2xl font-extrabold text-gray-900 leading-tight">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <p className="text-4xl font-extrabold text-gray-900 mt-1 mb-4">
                    {plan.price}
                    <sup className="text-lg font-bold align-super">$</sup>
                  </p>

                  {/* Divider */}
                  <div className="w-3/4 border-t-2 border-cyan-400 mb-4" />

                  {/* Features */}
                  <ul className="flex flex-col gap-2 text-sm font-medium text-gray-700 w-full flex-1 justify-center">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="text-center leading-snug">
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

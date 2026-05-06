"use client";

import { motion } from "framer-motion";

const plans = [
  {
    name: "Basic",
    price: "49",
    position: "left",
  },
  {
    name: "Standard",
    price: "65",
    position: "center",
  },
  {
    name: "Premium",
    price: "99",
    position: "right",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

export default function PricingSection() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <h2 className="text-center text-xl font-semibold mb-10">
          Discover Our PBX Plans
        </h2>

        {/* Gradient Container */}
        <div className="relative rounded-[30px] bg-gradient-to-b from-[#7fbcd2] to-[#2f8fb0] p-10 flex items-center justify-center min-h-[320px]">
          {/* Cards Wrapper */}
          <div className="relative w-full flex items-center justify-between flex-wrap gap-6">
            {plans.map((plan, index) => {
              let positionClasses = "";

              if (plan.position === "left") {
                positionClasses = "sm:translate-y-[-20px]";
              } else if (plan.position === "center") {
                positionClasses = "sm:translate-y-[40px]";
              } else if (plan.position === "right") {
                positionClasses = "sm:translate-y-[-20px]";
              }

              return (
                <motion.div
                  key={index}
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className={`bg-gradient-to-b from-[#cfe8f3] to-[#6fb6d6] border border-cyan-500 rounded-2xl shadow-lg p-6 w-full sm:w-[200px] text-center ${positionClasses}`}
                >
                  {/* Plan Name */}
                  <h3 className="font-semibold mb-4 text-gray-800">
                    {plan.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-start justify-center gap-1">
                    <span className="text-sm text-cyan-700 mt-1">R</span>
                    <span className="text-3xl font-bold text-black">
                      {plan.price}
                    </span>
                    <span className="text-xs text-gray-700 mt-2">
                      /per user
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

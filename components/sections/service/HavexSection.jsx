"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function HavexSection() {
  return (
    <section className="py-5 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Black Container */}
        <div className=" rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-black mb-4 leading-snug">
                Havex Vicidial Solutions: Your Call Centre, Powered Smarter
              </h2>

              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Vicidial is the world’s leading open-source call center
                platform, with over 14,000 installations spanning more than 100
                countries. At Havex, we transform this powerful tool into the
                most affordable and complete call center solution for businesses
                across South Africa and beyond, tailored to your unique needs.
              </p>
            </motion.div>

            {/* RIGHT IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-[400px] h-[260px] md:h-[300px]">
                <Image
                  src="/services/o.png"
                  alt="Vicidial Solution"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

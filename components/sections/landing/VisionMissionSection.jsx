"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function VisionMissionSection() {
  const data = [
    {
      title: "Our Vision",
      desc: "At HAVEX, our vision is to empower businesses with innovative technology solutions in VoIP, DevOps, web development, and mobile app development, helping them achieve seamless communication, digital growth, and long-term success.",
      img: "/about/vision.png",
      reverse: false,
    },
    {
      title: "Our Mission",
      desc: "Our mission is to provide reliable and innovative solutions in VoIP services, DevOps, web development, and mobile app development. We aim to help businesses improve communication, streamline operations, and build powerful digital products through modern, scalable, and secure systems.",
      img: "/about/mission.png",
      reverse: true,
    },
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className={`bg-[#f3f4f6] rounded-3xl shadow-md px-6 md:px-12 py-8 md:py-10 flex flex-col md:flex-row items-center gap-8 ${
                item.reverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div className="flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-8 border-white shadow-xl">
                  <Image
                    src={item.img}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="max-w-xl text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    icon: "/services/s1.svg",
    title: "VoIP Services",
    desc: "We deliver reliable VoIP services tailored to your business needs. From developing fully customized dialers to providing ongoing support, our solutions ensure seamless communication and scalability.",
  },
  {
    icon: "/services/s2.svg",
    title: "PBX",
    desc: "Transform your business with Havex Cloud PBX. Enjoy seamless integration, reduced costs, and unmatched flexibility with scalable cloud-based systems.",
  },
  {
    icon: "/services/s3.svg",
    title: "Web Dev",
    desc: "We build high-performance, secure, and scalable web applications using modern frameworks and best practices for exceptional user experience.",
  },
  {
    icon: "/services/s4.svg",
    title: "Mobile App Development",
    desc: "From concept to launch, we create intuitive and feature-rich mobile applications for both iOS and Android aligned with your goals.",
  },
  {
    icon: "/services/s5.svg",
    title: "DevOps",
    desc: "Our DevOps expertise covers CI/CD pipelines, automation, monitoring, and cloud deployments ensuring smooth and efficient operations.",
  },
  {
    icon: "/services/s6.svg",
    title: "Call Center",
    desc: "Enhance your customer service with scalable call center solutions designed for performance, efficiency, and customer satisfaction.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-100 relative">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex justify-center mb-14">
          <div className="px-8 py-4 rounded-full bg-white shadow-md text-lg font-semibold">
            Our Services
          </div>
        </div>

        {/* Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: "easeOut" },
                },
              }}
              className="bg-[#cfe8f3] border border-cyan-400 rounded-[30px] p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={50}
                  height={50}
                />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-700 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

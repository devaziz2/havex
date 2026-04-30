"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function ServiceSection2() {
  return (
    <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20">
      {/* TOP SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT IMAGE */}
        <div className="relative w-full h-[380px] md:h-[450px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="/s11.png"
            alt="Support Team"
            fill
            className="object-cover"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Transform Your Business with Havex
          </h2>

          <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed">
            HAVEX is a modern technology company dedicated to delivering
            innovative digital solutions for businesses worldwide. We specialize
            in VoIP services, DevOps solutions, web development, and mobile app
            development.
          </p>

          {/* FEATURES */}
          <div className="mt-6 space-y-4">
            {[
              "Prepaid VoIP (Top up as you need)",
              "Web Development",
              "DevOps",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle className="text-blue-500 w-5 h-5" />
                <span className="text-gray-800 text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-16 relative w-full h-[420px] rounded-2xl overflow-hidden shadow-xl">
        {/* BACKGROUND IMAGE */}
        <Image src="/s12.png" alt="Cloud PBX" fill className="object-cover" />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* CENTER CARD */}
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <div className="bg-white/95 backdrop-blur-md max-w-md p-6 rounded-xl shadow-lg">
            <p className="text-xs text-blue-600 font-semibold">About us</p>

            <h3 className="text-xl font-bold mt-2 text-gray-900">
              Elevate Your Business Communication with Havex Cloud PBX
            </h3>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              A flexible VoIP solution designed to streamline communication and
              scale your business efficiently with modern cloud-based systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

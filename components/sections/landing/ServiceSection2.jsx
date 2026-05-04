"use client";

import Image from "next/image";
import { Check } from "lucide-react";

export default function ServiceSection2() {
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5f6f7] rounded-3xl p-6 md:p-10 shadow-lg">
          {/* TOP SECTION */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-[320px] md:h-[620px] rounded-2xl overflow-hidden">
              <Image
                src="/s11.png"
                alt="Support Team"
                fill
                className="object-cover"
              />
            </div>

            {/* RIGHT CONTENT */}
            <div>
              <h2 className="text-2xl md:text-4xl font-semibold text-gray-900 leading-snug">
                Transform Your Business with Havex
              </h2>

              <p className="mt-4 text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                HAVEX is a modern technology company dedicated to delivering
                innovative digital solutions for businesses worldwide. We
                specialize in VoIP services, DevOps solutions, web development,
                mobile app development, and communication systems that improve
                efficiency and connectivity.
              </p>

              {/* FEATURES */}
              <div className="mt-6 space-y-4">
                {[
                  "Prepaid VoIP (Top up as you need)",
                  "Web Development",
                  "DevOps",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    {/* ICON CIRCLE */}
                    <div className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500 text-white">
                      <Check className="w-4 h-4" />
                    </div>

                    <span className="text-gray-800 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}
          <div className="mt-14 relative w-full rounded-2xl overflow-hidden">
            {/* BACKGROUND IMAGE — stacks on mobile, overlay on md+ */}
            <div className="relative w-full h-48 sm:h-64 md:h-[420px]">
              <Image
                src="/s12.png"
                alt="Cloud PBX"
                fill
                className="object-cover"
              />
              {/* GRADIENT OVERLAY — only visible on md+ */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent hidden md:block"></div>

              {/* FLOATING CARD — absolute on md+, hidden on mobile (shown below) */}
              <div className="hidden md:block absolute left-12 top-1/2 -translate-y-1/2">
                <div className="bg-white rounded-2xl p-7 max-w-sm shadow-2xl">
                  <p className="text-xs text-blue-600 font-semibold">
                    About us
                  </p>
                  <h3 className="text-xl font-bold mt-2 text-gray-900 leading-snug">
                    Elevate Your Business Communication with Havex Cloud PBX
                  </h3>
                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    In a landscape where agility and efficiency are paramount,
                    Havex Cloud PBX offers a revolutionary approach to business
                    telephony. Our cloud-based Private Branch Exchange system
                    provides a seamless, scalable, and secure communication
                    solution tailored to your business needs.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD — shown below image on mobile */}
            <div className="block md:hidden bg-white rounded-b-2xl p-6 shadow-md">
              <p className="text-xs text-blue-600 font-semibold">About us</p>
              <h3 className="text-lg font-bold mt-2 text-gray-900 leading-snug">
                Elevate Your Business Communication with Havex Cloud PBX
              </h3>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                In a landscape where agility and efficiency are paramount, Havex
                Cloud PBX offers a revolutionary approach to business telephony.
                Our cloud-based Private Branch Exchange system provides a
                seamless, scalable, and secure communication solution tailored
                to your business needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

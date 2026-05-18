"use client";

import { Phone, Mail } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full">
      {/* Top Footer */}
      <div
        className="text-white py-6"
        style={{ background: "linear-gradient(to right, #2FA4C8, #0E2A47)" }}
      >
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <h1 className="text-4xl font-bold tracking-wider">
            <Image
              src="/logo.png"
              alt="HAVEX logo"
              width={160}
              height={50}
              priority
              className="object-contain"
            />
          </h1>

          {/* Social Icons */}
          <div className="flex gap-5 items-center">
            {/* Twitter / X */}
            <a href="#" className="cursor-pointer hover:opacity-80">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L2.25 2.25h6.988l4.27 5.648 4.736-5.648zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            {/* Facebook */}
            <a href="#" className="cursor-pointer hover:opacity-80">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="#" className="cursor-pointer hover:opacity-80">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            {/* Instagram */}
            <a href="#" className="cursor-pointer hover:opacity-80">
              <svg width="22" height="22" fill="white" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-100 py-10">
        <div className="max-w-350 mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="hover:text-black cursor-pointer">Services</li>
              <li className="hover:text-black cursor-pointer">Our Vision</li>
              <li className="hover:text-black cursor-pointer">Our Mission</li>
              <li className="hover:text-black cursor-pointer">Prize</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">CONTACT US</h3>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Phone size={16} />
              <span>(021) 109 3333</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
              <Mail size={16} />
              <span>accounts@havex.co.za</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Phone size={16} />
              <span>(123)xxxxxxx</span>
            </div>
          </div>

          {/* Message Box */}
          <div>
            <h3 className="font-semibold mb-4 text-gray-700">For More Info</h3>

            <input
              type="text"
              placeholder="Message"
              className="w-full border-b border-gray-400 bg-transparent outline-none py-2 mb-4"
            />

            <button className="bg-[#0E2A47] text-white px-6 py-2 text-sm hover:opacity-90">
              Send Message
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="bg-gray-100 text-center text-xs text-gray-500 pb-4">
        HAVEX x DATRIX Working Together To Deliver More
      </div>
    </footer>
  );
}

"use client";

import ContactHero from "@/components/sections/service/ContactHero";
import Footer from "@/components/sections/landing/Footer";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      <main className="flex-1 flex items-center justify-center px-6 py-24 bg-gray-100">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-10">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-2 text-center">
            Contact Us
          </h1>
          <p className="text-gray-500 text-center mb-8">
            Have a question? We&apos;d love to hear from you.
          </p>
          <form className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="name"
              >
                Full Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="John Doe"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="john@example.com"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="subject"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label
                className="text-sm font-medium text-gray-700"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Write your message here..."
                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-2 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

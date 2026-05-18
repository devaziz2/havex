"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact us", href: "/contact" },
];

export default function Header({ variant = "default" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (variant !== "overlay") return;
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [variant]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const linkClass = (href) =>
    `transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-200 ${
      isActive(href)
        ? "text-cyan-400 after:w-full after:bg-cyan-400"
        : "text-black hover:text-cyan-500 after:w-0 hover:after:w-full after:bg-cyan-500"
    }`;

  const mobileLinkClass = (href) =>
    `transition-colors duration-200 ${
      isActive(href)
        ? "text-cyan-500 font-semibold"
        : "text-black hover:text-cyan-500"
    }`;

  if (variant === "overlay") {
    // Used inside hero sections (absolute positioned over background image)
    return (
      <>
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className={`${
            scrolled
              ? "fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-5xl z-50"
              : "absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-350 z-20"
          } transition-all duration-300`}
        >
          <div
            className={`flex items-center justify-between px-6 py-5 rounded-full shadow-lg transition-all duration-300 ${
              scrolled
                ? "bg-white/95 backdrop-blur-md border border-white/80"
                : "backdrop-blur-md bg-white/40 border border-white/60"
            }`}
          >
            <Link href="/">
              <Image
                src="/logo.png"
                alt="HAVEX logo"
                width={120}
                height={40}
                priority
                className="object-contain"
              />
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-200 ${
                    isActive(href)
                      ? "text-cyan-500 after:w-full after:bg-cyan-500"
                      : scrolled
                        ? "text-gray-800 hover:text-cyan-500 after:w-0 hover:after:w-full after:bg-cyan-500"
                        : "text-white hover:text-cyan-300 after:w-0 hover:after:w-full after:bg-cyan-300"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setOpen(true)}
              className={`md:hidden ${scrolled ? "text-gray-800" : "text-white"}`}
            >
              <Menu size={28} />
            </button>
          </div>
        </motion.header>

        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black z-30"
                onClick={() => setOpen(false)}
              />
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-40 shadow-xl p-6"
              >
                <div className="flex justify-end">
                  <button onClick={() => setOpen(false)}>
                    <X size={28} />
                  </button>
                </div>
                <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
                  {navLinks.map(({ label, href }) => (
                    <Link
                      key={href}
                      href={href}
                      className={mobileLinkClass(href)}
                      onClick={() => setOpen(false)}
                    >
                      {label}
                    </Link>
                  ))}
                </nav>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Default variant: standalone header (for pages without a hero background)
  return (
    <>
      <header
        className="w-full sticky top-0 z-50 shadow-md"
        style={{ background: "linear-gradient(to right, #2FA4C8, #0E2A47)" }}
      >
        <div className="max-w-350 mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="HAVEX logo"
              width={120}
              height={40}
              priority
              className="object-contain"
            />
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`transition-all duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:rounded-full after:transition-all after:duration-200 ${
                  isActive(href)
                    ? "text-cyan-600 after:w-full after:bg-cyan-600"
                    : "text-white hover:text-cyan-600 after:w-0 hover:after:w-full after:bg-cyan-600"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white"
          >
            <Menu size={28} />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-30"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-[75%] max-w-sm bg-white z-40 shadow-xl p-6"
            >
              <div className="flex justify-end">
                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>
              <nav className="mt-10 flex flex-col gap-6 text-lg font-medium">
                {navLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className={mobileLinkClass(href)}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

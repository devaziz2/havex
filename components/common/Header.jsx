"use client";

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

// Shared mobile drawer used by both variants
function MobileDrawer({ open, onClose, isActive }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-100"
            onClick={onClose}
          />

          {/* Drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 right-0 h-full w-[78%] max-w-xs z-110 flex flex-col shadow-2xl"
            style={{
              background:
                "linear-gradient(160deg, #0E2A47 0%, #1a4a6e 50%, #2FA4C8 100%)",
            }}
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-white/15">
              <span className="text-white font-bold text-2xl tracking-widest">
                HAVEX
              </span>
              <button
                onClick={onClose}
                className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              >
                <X size={24} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex flex-col px-4 py-6 gap-1 flex-1">
              {navLinks.map(({ label, href }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    href={href}
                    onClick={onClose}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive(href)
                        ? "bg-white/15 text-white border border-white/25"
                        : "text-white/75 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Footer branding */}
            <div className="px-6 py-4 border-t border-white/15">
              <p className="text-white/40 text-xs">
                © 2026 Havex. All rights reserved.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

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

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  if (variant === "overlay") {
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
            <Link
              href="/"
              className={`font-bold text-2xl tracking-widest transition-colors ${scrolled ? "text-[#0E2A47]" : "text-white"}`}
            >
              HAVEX
            </Link>

            <nav className="hidden md:flex gap-8 text-sm font-medium">
              {navLinks.map(({ label, href }) => (
                <Link
                  key={href}
                  href={href}
                  className={`transition-all duration-200 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-200 ${
                    isActive(href)
                      ? "font-semibold after:w-full " +
                        (scrolled
                          ? "text-[#0E2A47] after:bg-[#0E2A47]"
                          : "text-white after:bg-white")
                      : scrolled
                        ? "text-gray-700 hover:text-[#2FA4C8] after:w-0 hover:after:w-full after:bg-[#2FA4C8]"
                        : "text-white/85 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                  }`}
                >
                  {label}
                </Link>
              ))}
            </nav>

            <button
              onClick={() => setOpen(true)}
              className={`md:hidden p-1 rounded-md transition-colors ${scrolled ? "text-gray-800 hover:bg-gray-100" : "text-white hover:bg-white/20"}`}
            >
              <Menu size={26} />
            </button>
          </div>
        </motion.header>

        <MobileDrawer
          open={open}
          onClose={() => setOpen(false)}
          isActive={isActive}
        />
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
          <Link
            href="/"
            className="text-white font-bold text-2xl tracking-widest"
          >
            HAVEX
          </Link>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            {navLinks.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`transition-all duration-200 relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:rounded-full after:transition-all after:duration-200 ${
                  isActive(href)
                    ? "text-white font-semibold after:w-full after:bg-white"
                    : "text-white/75 hover:text-white after:w-0 hover:after:w-full after:bg-white"
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white hover:bg-white/20 p-1 rounded-md transition-colors"
          >
            <Menu size={26} />
          </button>
        </div>
      </header>

      <MobileDrawer
        open={open}
        onClose={() => setOpen(false)}
        isActive={isActive}
      />
    </>
  );
}

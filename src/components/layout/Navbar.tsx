"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#historia", label: "Nuestra historia" },
  { href: "#menu", label: "Menú" },
  { href: "#espacio", label: "El espacio" },
  { href: "#ubicaciones", label: "Ubicaciones" },
  { href: "#contacto", label: "Contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
        scrolled || open
          ? "bg-warmwhite/85 backdrop-blur-lg shadow-glass py-4"
          : "bg-transparent py-6 md:py-8"
      )}
    >
      <nav className="mx-auto flex w-full max-w-content items-center justify-between px-gutter">
        <Link
          href="#top"
          className={cn(
            "font-serif text-2xl tracking-wide transition-colors duration-500",
            scrolled || open ? "text-ink" : "text-warmwhite"
          )}
        >
          ALAS
        </Link>

        <ul
          className={cn(
            "hidden items-center gap-10 text-sm font-medium tracking-wide md:flex transition-colors duration-500",
            scrolled ? "text-ink/80" : "text-warmwhite/90"
          )}
        >
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="relative py-1 transition-opacity hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="#menu"
          className={cn(
            "hidden rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 md:inline-flex",
            scrolled
              ? "bg-coffee text-warmwhite hover:bg-coffee-dark"
              : "border border-warmwhite/50 text-warmwhite hover:bg-warmwhite/10"
          )}
        >
          Ver menú
        </Link>

        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "md:hidden transition-colors duration-500",
            scrolled || open ? "text-ink" : "text-warmwhite"
          )}
        >
          {open ? <X size={26} /> : <MenuIcon size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden md:hidden"
          >
            <ul className="flex flex-col gap-1 px-gutter pb-8 pt-4">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-lg font-serif text-ink border-b border-warmgray-light/60"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-6">
                <Link
                  href="#menu"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-coffee px-6 py-3 text-sm font-medium text-warmwhite"
                >
                  Ver menú
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

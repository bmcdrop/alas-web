"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { menuCategories, menuItems } from "@/lib/data";
import { cn } from "@/lib/utils";
import type { MenuCategory } from "@/types";

export default function Menu() {
  const [active, setActive] = useState<MenuCategory>("Café");

  const filtered = useMemo(
    () => menuItems.filter((item) => item.category === active),
    [active]
  );

  return (
    <section id="menu" className="bg-beige-gradient py-section">
      <Container>
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Menú de especialidad"
            title="Cada taza, elegida con intención."
            description="Rotamos nuestra selección según temporada y origen. Esto es lo que servimos hoy."
          />
        </div>

        <div className="mt-12 flex flex-wrap gap-2 border-b border-warmgray-light/70 pb-2 md:mt-16">
          {menuCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-medium tracking-wide transition-colors duration-300",
                active === category
                  ? "bg-coffee text-warmwhite"
                  : "text-warmgray-dark hover:bg-warmgray-light/40"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:mt-14">
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group overflow-hidden rounded-3xl bg-paper shadow-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-xl text-ink">{item.name}</h3>
                    <span className="whitespace-nowrap font-serif text-lg text-wood-dark">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-warmgray-dark">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

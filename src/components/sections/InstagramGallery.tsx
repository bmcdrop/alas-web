"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import { galleryImages } from "@/lib/data";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  tall: "row-span-2 aspect-[3/4]",
  wide: "sm:col-span-2 aspect-[16/10]",
  normal: "aspect-square",
};

export default function InstagramGallery() {
  return (
    <section className="bg-warmwhite py-section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="@alascoffee"
            title="Nuestros últimos momentos."
          />
          <Button
            href="https://www.instagram.com/alascoffeechile/"
            external
            variant="outline-dark"
            icon={<Instagram size={16} />}
          >
            Ver en Instagram
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mt-16 md:gap-5 lg:grid-cols-4">
          {galleryImages.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: (i % 4) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "group relative overflow-hidden rounded-2xl",
                spanClasses[item.span ?? "normal"]
              )}
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 24vw, 45vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-coffee-dark/0 opacity-0 transition-all duration-500 group-hover:bg-coffee-dark/30 group-hover:opacity-100">
                <Instagram className="text-warmwhite" size={22} />
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}

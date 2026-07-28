"use client";

import Image from "next/image";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="bg-warmwhite py-section">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="Voces de la casa"
          title="Más que una taza de café."
          className="mx-auto"
        />

        <div className="mt-14 grid gap-6 md:mt-20 md:grid-cols-3 md:gap-8">
          {testimonials.map((t, i) => (
            <FadeIn
              key={t.id}
              delay={i * 0.12}
              className="flex flex-col rounded-3xl bg-paper p-8 shadow-card"
            >
              <Quote className="text-wood" size={28} strokeWidth={1.5} />
              <p className="mt-6 flex-1 font-serif text-xl leading-relaxed text-ink text-balance">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center gap-3">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">{t.name}</p>
                  <p className="text-xs text-warmgray-dark">{t.role}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

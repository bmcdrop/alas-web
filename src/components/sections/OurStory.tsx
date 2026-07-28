"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Container from "@/components/ui/Container";
import FadeIn from "@/components/ui/FadeIn";
import RevealText from "@/components/ui/RevealText";
import { cn } from "@/lib/utils";

const chapters = [
  {
    id: "c1",
    eyebrow: "El origen",
    title: "Todo comenzó con una pregunta simple",
    body: "¿Qué pasaría si un café pudiera hacer que la gente se quedara un poco más? No para apurar una taza, sino para respirar, para escuchar, para estar. ALAS nació de esa pausa: un espacio pensado para que el tiempo se sienta distinto.",
    image: "photo-1509440159596-0249088772ff",
    alt: "Barista preparando café con dedicación en el mostrador de madera",
  },
  {
    id: "c2",
    eyebrow: "El oficio",
    title: "El café como un acto de cuidado",
    body: "Seleccionamos cada grano con la misma atención que un artesano elige su madera. Tostamos en lotes pequeños, calibramos cada extracción y probamos cada método hasta que la taza cuenta la historia completa del origen.",
    image: "photo-1447933601403-0c6688de566e",
    alt: "Granos de café tostados de origen único",
  },
  {
    id: "c3",
    eyebrow: "La comunidad",
    title: "Un lugar que se construye con quienes lo visitan",
    body: "Las mesas de ALAS han sido testigo de primeras citas, reuniones de trabajo, tardes de estudio y silencios cómodos entre amigos. No diseñamos solo un interior: diseñamos las condiciones para que las conversaciones que importan, sucedan.",
    image: "photo-1517705008128-361805f42e86",
    alt: "Amigos conversando y disfrutando café en un ambiente cálido",
  },
];

function Chapter({
  chapter,
  index,
}: {
  chapter: (typeof chapters)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const reversed = index % 2 === 1;

  return (
    <div
      ref={ref}
      className={cn(
        "grid items-center gap-10 md:gap-16 lg:grid-cols-2 lg:gap-24",
        index !== 0 && "mt-24 md:mt-36"
      )}
    >
      <div className={cn(reversed && "lg:order-2")}>
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl md:aspect-[5/6]">
          <motion.div style={{ y }} className="absolute inset-0 h-[112%] -top-[6%]">
            <Image
              src={`https://images.unsplash.com/${chapter.image}?w=1400&q=85&auto=format&fit=crop`}
              alt={chapter.alt}
              fill
              sizes="(min-width: 1024px) 45vw, 90vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>

      <div className={cn(reversed && "lg:order-1")}>
        <FadeIn>
          <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-wood-dark">
            {chapter.eyebrow}
          </span>
        </FadeIn>
        <RevealText as="h3" className="font-serif text-display-sm text-ink text-balance">
          {chapter.title}
        </RevealText>
        <FadeIn delay={0.15}>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-warmgray-dark">
            {chapter.body}
          </p>
        </FadeIn>
      </div>
    </div>
  );
}

export default function OurStory() {
  return (
    <section id="historia" className="relative bg-warmwhite py-section">
      <Container>
        <div className="mb-20 max-w-2xl md:mb-28">
          <FadeIn>
            <span className="mb-4 inline-block text-xs font-medium uppercase tracking-[0.25em] text-wood-dark">
              Nuestra historia
            </span>
          </FadeIn>
          <RevealText as="h2" className="font-serif text-display-md text-ink text-balance">
            Una idea que se sirve, gota a gota.
          </RevealText>
        </div>

        {chapters.map((chapter, index) => (
          <Chapter key={chapter.id} chapter={chapter} index={index} />
        ))}
      </Container>
    </section>
  );
}

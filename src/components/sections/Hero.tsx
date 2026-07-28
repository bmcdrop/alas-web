"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.35, 0.65]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden"
    >
      <motion.div style={{ y: imageY }} className="absolute inset-0 h-[124%]">
        <Image
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=2200&q=85&auto=format&fit=crop"
          alt="Mesa junto a una gran ventana con luz natural de la mañana en ALAS Coffee"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </motion.div>

      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-gradient-to-t from-coffee-dark/80 via-coffee-dark/20 to-coffee-dark/50"
      />

      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex h-full w-full flex-col items-start justify-end px-gutter pb-24 md:pb-28"
      >
        <div className="mx-auto w-full max-w-content">
          <RevealText
            as="h1"
            className="font-serif text-display-xl font-normal text-warmwhite text-balance"
          >
            Un café hecho con alas.
          </RevealText>

          <FadeIn delay={0.5} className="mt-6 max-w-lg">
            <p className="text-lg leading-relaxed text-warmwhite/85 md:text-xl">
              Más que café.
              <br />
              Un lugar donde cada conversación importa.
            </p>
          </FadeIn>

          <FadeIn delay={0.7} className="mt-10 flex flex-wrap items-center gap-4">
            <Button href="#menu" variant="primary" icon={<ArrowRight size={16} />}>
              Ver menú
            </Button>
            <Button href="#historia" variant="ghost">
              Conocer nuestra historia
            </Button>
          </FadeIn>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-warmwhite/70"
        aria-hidden="true"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  );
}

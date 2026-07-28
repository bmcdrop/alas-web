"use client";

import Image from "next/image";
import { MessageCircle, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import RevealText from "@/components/ui/RevealText";
import FadeIn from "@/components/ui/FadeIn";

export default function FinalCTA() {
  return (
    <section id="contacto" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=2200&q=85&auto=format&fit=crop"
          alt="Café siendo servido con calidez en ALAS Coffee"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-coffee-dark/70" />
      </div>

      <Container className="relative py-section text-center">
        <RevealText
          as="h2"
          className="mx-auto font-serif text-display-lg text-warmwhite text-balance"
        >
          Te esperamos.
        </RevealText>
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-warmwhite/85">
            Ven a conocer ALAS. Trae un libro, a un amigo o solo tus ganas de
            una buena conversación — nosotros ponemos el café.
          </p>
        </FadeIn>
        <FadeIn delay={0.35} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button href="#ubicaciones" variant="invert" icon={<MapPin size={16} />}>
            Visítanos
          </Button>
          <Button
            href="https://wa.me/50000000000"
            external
            variant="ghost"
            icon={<MessageCircle size={16} />}
          >
            Escríbenos por WhatsApp
          </Button>
        </FadeIn>
      </Container>
    </section>
  );
}

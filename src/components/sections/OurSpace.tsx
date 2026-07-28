"use client";

import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";

const photos = [
  {
    id: "s1",
    image: "photo-1600093463592-8e36ae95ef56",
    alt: "Interior cálido de ALAS con luz natural y madera",
    className: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto",
  },
  {
    id: "s2",
    image: "photo-1600271886742-f049cd451bba",
    alt: "Terraza exterior con asientos y plantas",
    className: "aspect-[4/3]",
  },
  {
    id: "s3",
    image: "photo-1559925393-8be0ec4767c8",
    alt: "Plantas y luz cálida junto a la barra",
    className: "aspect-[4/3]",
  },
  {
    id: "s4",
    image: "photo-1445116572660-236099ec97a0",
    alt: "Persona trabajando en su laptop junto a la ventana",
    className: "aspect-[4/3]",
  },
  {
    id: "s5",
    image: "photo-1477763858572-cda7deebccb6",
    alt: "Persona leyendo tranquilamente con un café",
    className: "aspect-[4/3]",
  },
];

export default function OurSpace() {
  return (
    <section id="espacio" className="bg-warmwhite py-section">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              eyebrow="El espacio"
              title="Diseñado para que te quedes."
            />
            <FadeIn delay={0.2}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-warmgray-dark">
                Cada rincón de ALAS fue pensado como una invitación a permanecer:
                luz natural que cambia con el día, madera cálida al tacto, plantas
                que respiran junto a las mesas. Es un lugar para conectar, para
                trabajar, para estudiar o simplemente para disfrutar un gran café
                sin prisa.
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {photos.map((photo, i) => (
              <FadeIn
                key={photo.id}
                delay={i * 0.08}
                className={`relative overflow-hidden rounded-3xl ${photo.className}`}
              >
                <Image
                  src={`https://images.unsplash.com/${photo.image}?w=1200&q=85&auto=format&fit=crop`}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 45vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

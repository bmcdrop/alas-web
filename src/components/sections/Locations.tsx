"use client";

import { MapPin, Clock, Car, ExternalLink } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import FadeIn from "@/components/ui/FadeIn";
import { locations } from "@/lib/data";

function MapPreview({ name }: { name: string }) {
  return (
    <div
      className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-2xl bg-warm-radial"
      role="img"
      aria-label={`Vista previa de mapa para ${name}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#C8A876" strokeWidth="0.75" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-coffee text-warmwhite shadow-soft">
        <MapPin size={20} />
      </div>
    </div>
  );
}

export default function Locations() {
  return (
    <section id="ubicaciones" className="bg-beige-gradient py-section">
      <Container>
        <SectionHeading
          eyebrow="Ubicaciones"
          title="Encuéntranos."
          description="Dos espacios, la misma calma. Ven cuando quieras — siempre hay una mesa con tu nombre."
        />

        <div className="mt-14 grid gap-8 md:mt-20 md:grid-cols-2 md:gap-10">
          {locations.map((loc, i) => (
            <FadeIn
              key={loc.id}
              delay={i * 0.1}
              className="overflow-hidden rounded-3xl bg-paper p-6 shadow-card sm:p-8"
            >
              <MapPreview name={loc.name} />

              <h3 className="mt-7 font-serif text-2xl text-ink">{loc.name}</h3>

              <div className="mt-5 space-y-4 text-sm text-warmgray-dark">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-wood-dark" />
                  <p>{loc.address}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock size={18} className="mt-0.5 shrink-0 text-wood-dark" />
                  <div className="space-y-1">
                    {loc.hours.map((h) => (
                      <p key={h.label} className="flex gap-2">
                        <span className="font-medium text-ink/80">{h.label}:</span>
                        <span>{h.value}</span>
                      </p>
                    ))}
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Car size={18} className="mt-0.5 shrink-0 text-wood-dark" />
                  <p>{loc.parking}</p>
                </div>
              </div>

              <a
                href={loc.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center gap-2 rounded-full border border-ink/15 px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-ink/40"
              >
                Abrir en Google Maps
                <ExternalLink size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}

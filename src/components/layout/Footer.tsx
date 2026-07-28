import Link from "next/link";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="bg-coffee-dark text-warmwhite/90">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="font-serif text-3xl tracking-wide text-warmwhite">
              ALAS
            </span>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-warmwhite/60">
              Un café hecho con alas. Especialidad, comunidad y luz natural
              en cada taza que servimos.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-warmwhite/20 transition-colors hover:bg-warmwhite/10"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/50000000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-warmwhite/20 transition-colors hover:bg-warmwhite/10"
              >
                <MessageCircle size={18} />
              </a>
              <a
                href="mailto:hola@alascoffee.com"
                aria-label="Correo electrónico"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-warmwhite/20 transition-colors hover:bg-warmwhite/10"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-warmwhite/50">
              Horario
            </h3>
            <ul className="mt-5 space-y-2 text-sm text-warmwhite/70">
              <li className="flex justify-between gap-6">
                <span>Lun – Vie</span>
                <span>7:00 am – 8:00 pm</span>
              </li>
              <li className="flex justify-between gap-6">
                <span>Sáb – Dom</span>
                <span>8:00 am – 9:00 pm</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-warmwhite/50">
              Visítanos
            </h3>
            <address className="mt-5 space-y-1 text-sm not-italic leading-relaxed text-warmwhite/70">
              <p>Av. de las Flores 214</p>
              <p>Ciudad, País</p>
              <p className="pt-3">
                <Link href="mailto:hola@alascoffee.com" className="underline-offset-4 hover:underline">
                  hola@alascoffee.com
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-warmwhite/10 pt-8 text-xs text-warmwhite/40 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} ALAS Coffee. Todos los derechos reservados.</p>
          <p>Diseñado con calma, servido con propósito.</p>
        </div>
      </Container>
    </footer>
  );
}

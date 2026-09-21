import Image from "next/image";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/animations/reveal";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const CLIENTS = [
  {
    name: "EasyFitness UAE",
    href: "https://www.easyfitness-uae.com",
    logo: "/clients/easyfitness.png",
    width: 2500,
    height: 550,
    className: "h-6 sm:h-7",
  },
  {
    name: "Cuts Gents Salon",
    href: "https://cutsuae.com",
    logo: "/clients/cutsuae.png",
    width: 1250,
    height: 480,
    className: "h-10 sm:h-12",
  },
  {
    name: "IGC",
    href: "https://igc.online",
    logo: "/clients/igc.webp",
    width: 82,
    height: 84,
    className: "h-9 sm:h-10",
  },
];

export function Clients({ dict }: { dict: Dictionary }) {
  return (
    <section className="py-10 md:py-12">
      <Container>
        <Reveal>
          <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground">
            {dict.clientsSection.title}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
            {CLIENTS.map((client) => (
              <a
                key={client.name}
                href={client.href}
                target="_blank"
                rel="noreferrer"
                aria-label={client.name}
                className="opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={client.width}
                  height={client.height}
                  className={`w-auto ${client.className}`}
                />
              </a>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

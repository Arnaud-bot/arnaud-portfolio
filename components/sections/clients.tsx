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
  {
    name: "Skill Set",
    href: "https://skillsetservice.com",
    logo: "/clients/skillset.png",
    width: 150,
    height: 150,
    className: "h-12 sm:h-14",
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
        </Reveal>
      </Container>

      <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div
          className="clients-track flex w-max items-center gap-16 group-hover:[animation-play-state:paused] rtl:[animation-direction:reverse]"
          style={{
            animation: `clients-marquee ${CLIENTS.length * 6}s linear infinite`,
          }}
        >
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <a
              key={client.name + i}
              href={client.href}
              target="_blank"
              rel="noreferrer"
              aria-hidden={i >= CLIENTS.length}
              tabIndex={i >= CLIENTS.length ? -1 : 0}
              aria-label={client.name}
              className="shrink-0 opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
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
      </div>
    </section>
  );
}

"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getTestimonials } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const TRUNCATE_LENGTH = 220;

function TestimonialCard({
  testimonial,
  readMoreLabel,
  readLessLabel,
}: {
  testimonial: Testimonial;
  readMoreLabel: string;
  readLessLabel: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > TRUNCATE_LENGTH;

  return (
    <figure
      data-card
      className="flex min-h-[276px] w-[320px] shrink-0 snap-start flex-col justify-between rounded-lg border border-border bg-card p-8 sm:w-[360px]"
    >
      <div>
        <blockquote
          className={cn(
            "text-sm leading-[1.7] text-foreground",
            !expanded && "line-clamp-5"
          )}
        >
          &quot;{testimonial.quote}&quot;
        </blockquote>
        {isLong && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="mt-2 text-xs font-semibold text-primary hover:underline"
          >
            {expanded ? readLessLabel : readMoreLabel}
          </button>
        )}
      </div>
      <figcaption className="mt-6 flex shrink-0 items-center gap-3">
        <Avatar>
          <AvatarFallback>
            {testimonial.name
              .replace(/[[\]]/g, "")
              .split(" ")
              .map((w) => w[0])
              .join("")
              .slice(0, 2)
              .toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{testimonial.name}</p>
          <p className="text-xs text-muted-foreground">{testimonial.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ lang, dict }: { lang: Locale; dict: Dictionary }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const testimonials = getTestimonials(lang);

  if (testimonials.length === 0) return null;

  const canSwipe = testimonials.length >= 3;

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-card]");
    const gap = 24;
    const amount = (card?.offsetWidth ?? 320) + gap;
    const isRTL = getComputedStyle(track).direction === "rtl";
    track.scrollBy({
      left: direction * amount * (isRTL ? -1 : 1),
      behavior: "smooth",
    });
  };

  return (
    <Section
      eyebrow={dict.testimonialsSection.eyebrow}
      title={dict.testimonialsSection.title}
    >
      {canSwipe ? (
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.name + i}
                testimonial={t}
                readMoreLabel={dict.testimonialsSection.readMore}
                readLessLabel={dict.testimonialsSection.readLess}
              />
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label={dict.testimonialsSection.previous}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
            >
              <ChevronLeft className="size-4 rtl:-scale-x-100" />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label={dict.testimonialsSection.next}
              className="inline-flex size-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-accent"
            >
              <ChevronRight className="size-4 rtl:-scale-x-100" />
            </button>
          </div>
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-wrap justify-center gap-6",
            testimonials.length === 1 && "mx-auto max-w-[360px]"
          )}
        >
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={t.name + i}
              testimonial={t}
              readMoreLabel={dict.testimonialsSection.readMore}
              readLessLabel={dict.testimonialsSection.readLess}
            />
          ))}
        </div>
      )}
    </Section>
  );
}

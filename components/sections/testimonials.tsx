"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout/section";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getTestimonials } from "@/lib/content/testimonials";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/dictionaries/types";

const TRUNCATE_LENGTH = 220;
const GAP = 24;

function TestimonialCard({
  testimonial,
  readMoreLabel,
  readLessLabel,
  hidden,
}: {
  testimonial: Testimonial;
  readMoreLabel: string;
  readLessLabel: string;
  hidden?: boolean;
}) {
  const [expanded, setExpanded] = useState(false);
  const isLong = testimonial.quote.length > TRUNCATE_LENGTH;

  return (
    <figure
      data-card
      aria-hidden={hidden}
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
            tabIndex={hidden ? -1 : 0}
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
  const canLoop = testimonials.length >= 3;
  const count = testimonials.length;

  const getStep = () => {
    const card = trackRef.current?.querySelector<HTMLElement>("[data-card]");
    return (card?.offsetWidth ?? 320) + GAP;
  };

  const getDirection = () =>
    trackRef.current && getComputedStyle(trackRef.current).direction === "rtl"
      ? -1
      : 1;

  // Start centered on the middle (real) copy so there's room to loop both ways.
  useLayoutEffect(() => {
    const track = trackRef.current;
    if (!track || !canLoop) return;
    track.scrollLeft = getDirection() * getStep() * count;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canLoop, count, lang]);

  // Once the user settles after a swipe, silently snap back into the middle
  // copy's range if they've drifted into a neighboring copy — this is what
  // makes the loop feel infinite instead of hitting a dead end.
  useEffect(() => {
    const track = trackRef.current;
    if (!track || !canLoop) return;

    let timeout: ReturnType<typeof setTimeout>;
    const settle = () => {
      const dir = getDirection();
      const setWidth = getStep() * count;
      const normalized = dir * track.scrollLeft;
      if (normalized < setWidth) {
        track.scrollLeft = dir * (normalized + setWidth);
      } else if (normalized >= setWidth * 2) {
        track.scrollLeft = dir * (normalized - setWidth);
      }
    };
    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(settle, 120);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      clearTimeout(timeout);
    };
  }, [canLoop, count]);

  if (testimonials.length === 0) return null;

  const items = canLoop
    ? [...testimonials, ...testimonials, ...testimonials]
    : testimonials;

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({
      left: direction * getStep() * getDirection(),
      behavior: "smooth",
    });
  };

  return (
    <Section
      eyebrow={dict.testimonialsSection.eyebrow}
      title={dict.testimonialsSection.title}
    >
      {canLoop ? (
        <div className="relative">
          <div
            ref={trackRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {items.map((t, i) => (
              <TestimonialCard
                key={t.name + i}
                testimonial={t}
                readMoreLabel={dict.testimonialsSection.readMore}
                readLessLabel={dict.testimonialsSection.readLess}
                hidden={i < count || i >= count * 2}
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

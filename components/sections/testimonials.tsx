"use client";

import { useState } from "react";
import { Pause, Play } from "lucide-react";
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
      aria-hidden={hidden}
      className="flex min-h-[276px] w-[320px] shrink-0 flex-col justify-between rounded-lg border border-border bg-card p-8 sm:w-[360px]"
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
  const [isPaused, setIsPaused] = useState(false);
  const [isInteracting, setIsInteracting] = useState(false);

  const testimonials = getTestimonials(lang);

  if (testimonials.length === 0) return null;

  const canLoop = testimonials.length >= 3;
  const isRunning = !isPaused && !isInteracting;

  return (
    <Section
      eyebrow={dict.testimonialsSection.eyebrow}
      title={dict.testimonialsSection.title}
    >
      {canLoop ? (
        <>
          <div className="mb-4 flex justify-end">
            <button
              type="button"
              onClick={() => setIsPaused((v) => !v)}
              aria-pressed={isPaused}
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {isPaused ? (
                <Play className="size-3.5" />
              ) : (
                <Pause className="size-3.5" />
              )}
              {isPaused ? dict.testimonialsSection.play : dict.testimonialsSection.pause}
            </button>
          </div>
          <div
            className="-mx-6 overflow-x-hidden overflow-y-visible [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)] md:-mx-12 lg:-mx-20"
            onMouseEnter={() => setIsInteracting(true)}
            onMouseLeave={() => setIsInteracting(false)}
            onFocus={() => setIsInteracting(true)}
            onBlur={() => setIsInteracting(false)}
          >
            <div
              className="testimonials-track flex w-max items-start gap-6 px-6 rtl:[animation-direction:reverse] md:px-12 lg:px-20"
              style={{
                animation: `testimonials-marquee ${testimonials.length * 9}s linear infinite`,
                animationPlayState: isRunning ? "running" : "paused",
              }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <TestimonialCard
                  key={t.name + i}
                  testimonial={t}
                  readMoreLabel={dict.testimonialsSection.readMore}
                  readLessLabel={dict.testimonialsSection.readLess}
                  hidden={i >= testimonials.length}
                />
              ))}
            </div>
          </div>
        </>
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

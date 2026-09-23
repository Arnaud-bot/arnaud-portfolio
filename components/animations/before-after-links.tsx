"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type LinkItem = {
  href: string;
  label: string;
};

export function BeforeAfterLinks({ items }: { items: LinkItem[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="inline-flex items-center gap-1 rounded-full border border-border bg-card p-1">
      {items.map((item, i) => (
        <a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer"
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="relative inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium text-foreground"
        >
          {hovered === i && (
            <motion.span
              layoutId="before-after-pill"
              className="absolute inset-0 rounded-full bg-accent"
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          )}
          <span className="relative flex items-center gap-1.5">
            {item.label}
            <ExternalLink className="size-3.5" />
          </span>
        </a>
      ))}
    </div>
  );
}

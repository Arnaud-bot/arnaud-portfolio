"use client";

import { motion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealOnMountProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function RevealOnMount({
  children,
  delay = 0,
  className,
}: RevealOnMountProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

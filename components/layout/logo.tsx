import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={cn("size-8", className)}
      aria-hidden
    >
      <rect width="40" height="40" rx="10" fill="#F2A93B" />
      <text
        x="20"
        y="27"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontWeight="700"
        fontSize="17"
        letterSpacing="-0.5"
        fill="#081A2F"
      >
        AM
      </text>
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      <span className="text-base font-semibold tracking-tight">
        Arnaud Malanda
      </span>
    </span>
  );
}

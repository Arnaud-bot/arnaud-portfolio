import type { SVGProps } from "react";

const INK = "#E8EDF2";
const AMBER = "#F2A93B";
const DEEP = "#0B1F38";
const HAIR = "#16304D";
const SKIN = "#F0E4D3";

const BLOB =
  "M28,85 C22,45 62,18 105,20 C148,22 178,50 175,90 C172,128 135,150 98,148 C60,146 34,124 28,85 Z";

function Blob() {
  return <path d={BLOB} fill={AMBER} opacity={0.1} />;
}

function Person({
  x,
  headY,
  shirtColor = AMBER,
}: {
  x: number;
  headY: number;
  shirtColor?: string;
}) {
  const bodyTop = headY + 17;
  return (
    <g>
      <path
        d={`M${x - 19},${bodyTop + 44} L${x - 15},${bodyTop} C${x - 15},${bodyTop - 8} ${x - 9},${bodyTop - 13} ${x},${bodyTop - 13} C${x + 9},${bodyTop - 13} ${x + 15},${bodyTop - 8} ${x + 15},${bodyTop} L${x + 19},${bodyTop + 44} Z`}
        fill={shirtColor}
      />
      <circle cx={x} cy={headY} r={14} fill={SKIN} stroke={INK} strokeWidth={2} />
      <path
        d={`M${x - 14},${headY - 4} C${x - 14},${headY - 18} ${x - 7},${headY - 26} ${x},${headY - 26} C${x + 8},${headY - 26} ${x + 15},${headY - 18} ${x + 14},${headY - 6} C${x + 10},${headY - 12} ${x + 5},${headY - 14} ${x},${headY - 14} C${x - 6},${headY - 14} ${x - 11},${headY - 11} ${x - 14},${headY - 4} Z`}
        fill={HAIR}
      />
      <circle cx={x - 5} cy={headY + 1} r={1.6} fill={DEEP} />
      <circle cx={x + 5} cy={headY + 1} r={1.6} fill={DEEP} />
    </g>
  );
}

export function UxAuditIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 170" {...props}>
      <Blob />
      <rect x="100" y="26" width="80" height="58" rx="6" fill={DEEP} stroke={INK} strokeWidth="2" />
      <line x1="100" y1="40" x2="180" y2="40" stroke={INK} strokeWidth="1.5" opacity="0.5" />
      <circle cx="108" cy="33" r="2" fill={INK} opacity="0.6" />
      <circle cx="115" cy="33" r="2" fill={INK} opacity="0.6" />
      <rect x="108" y="60" width="9" height="16" fill={INK} opacity="0.35" />
      <rect x="121" y="52" width="9" height="24" fill={AMBER} />
      <rect x="134" y="64" width="9" height="12" fill={INK} opacity="0.35" />
      <path d="M108 50 L120 46 L131 50 L145 44" fill="none" stroke={INK} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="26" cy="34" r="12" fill={AMBER} />
      <path d="M20 34l4 4 8-8" fill="none" stroke={DEEP} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <Person x={57} headY={68} />
      <path d="M68,98 C80,102 88,106 94,113" stroke={SKIN} strokeWidth="9" fill="none" strokeLinecap="round" />
      <circle cx="99" cy="118" r="15" fill={DEEP} stroke={AMBER} strokeWidth="5" />
      <line x1="109" y1="128" x2="119" y2="138" stroke={AMBER} strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function UiRedesignIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 170" {...props}>
      <Blob />
      <rect x="72" y="28" width="92" height="66" rx="6" fill={DEEP} stroke={INK} strokeWidth="2" />
      <line x1="118" y1="28" x2="118" y2="94" stroke={INK} strokeWidth="1.5" opacity="0.35" strokeDasharray="3 4" />
      <rect x="80" y="38" width="28" height="6" rx="2" fill={INK} opacity="0.3" />
      <rect x="80" y="50" width="20" height="6" rx="2" fill={INK} opacity="0.3" />
      <rect x="80" y="62" width="24" height="6" rx="2" fill={INK} opacity="0.3" />
      <rect x="128" y="40" width="26" height="26" rx="6" fill={AMBER} />
      <rect x="128" y="72" width="26" height="8" rx="4" fill={INK} opacity="0.5" />
      <circle cx="30" cy="30" r="7" fill={AMBER} />
      <circle cx="46" cy="24" r="6" fill={INK} opacity="0.6" />
      <circle cx="58" cy="34" r="5" fill={AMBER} opacity="0.7" />
      <path d="M170 22 l3 7 7 3 -7 3 -3 7 -3-7 -7-3 7-3 Z" fill={AMBER} />
      <Person x={54} headY={80} />
      <path d="M65,110 C82,104 96,96 108,86" stroke={SKIN} strokeWidth="9" fill="none" strokeLinecap="round" />
      <path d="M106,84 L114,80 L110,88 Z" fill={AMBER} />
      <line x1="106" y1="86" x2="116" y2="78" stroke={AMBER} strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

export function WebDevelopmentIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 170" {...props}>
      <path d="M26,90 C20,50 58,20 100,20 C144,20 176,48 174,88 C172,126 138,150 100,148 C62,146 32,128 26,90 Z" fill={AMBER} opacity="0.1" />
      <rect x="20" y="140" width="160" height="6" rx="2" fill={DEEP} stroke={INK} strokeWidth="1.5" />
      <rect x="82" y="42" width="72" height="52" rx="5" fill={DEEP} stroke={INK} strokeWidth="2" />
      <rect x="110" y="94" width="16" height="10" fill={DEEP} stroke={INK} strokeWidth="1.5" />
      <rect x="100" y="104" width="36" height="6" rx="2" fill={DEEP} stroke={INK} strokeWidth="1.5" />
      <path d="M97,58 L88,68 L97,78" fill="none" stroke={AMBER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M139,58 L148,68 L139,78" fill="none" stroke={AMBER} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="122" y1="54" x2="114" y2="82" stroke={INK} strokeWidth="2" strokeLinecap="round" opacity="0.7" />
      <rect x="148" y="16" width="42" height="32" rx="4" fill={DEEP} stroke={INK} strokeWidth="2" />
      <circle cx="169" cy="30" r="5.5" fill={SKIN} />
      <path d="M160,42 C160,37 164,34 169,34 C174,34 178,37 178,42 Z" fill={AMBER} />
      <path d="M28,132 C28,124 33,120 38,120 C43,120 48,124 48,132 Z" fill={AMBER} opacity="0.85" />
      <path d="M33,120 C33,112 36,106 38,102" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M38,120 C40,110 44,105 48,101" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M43,120 C41,111 42,104 40,99" stroke={INK} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.5" />
      <Person x={64} headY={82} />
      <rect x="52" y="128" width="30" height="8" rx="2" fill={DEEP} stroke={INK} strokeWidth="1.5" />
    </svg>
  );
}

export function MobileDevelopmentIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 170" {...props}>
      <Blob />
      <rect x="118" y="32" width="46" height="90" rx="10" fill={DEEP} stroke={INK} strokeWidth="2.5" />
      <rect x="128" y="40" width="26" height="10" rx="2" fill={AMBER} />
      <rect x="128" y="56" width="26" height="5" rx="2" fill={INK} opacity="0.4" />
      <rect x="128" y="66" width="18" height="5" rx="2" fill={INK} opacity="0.4" />
      <circle cx="141" cy="104" r="8" fill={AMBER} />
      <path d="M124 24 C130 20 138 20 144 24" stroke={AMBER} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.7" />
      <path d="M120 18 C129 12 141 12 150 18" stroke={AMBER} strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.4" />
      <rect x="24" y="26" width="18" height="18" rx="5" fill={AMBER} opacity="0.85" />
      <rect x="24" y="50" width="18" height="18" rx="5" fill={INK} opacity="0.3" />
      <Person x={60} headY={78} />
      <path d="M71,96 C90,98 104,88 116,66" stroke={SKIN} strokeWidth="8" fill="none" strokeLinecap="round" />
      <path d="M49,96 C58,102 66,94 71,80" stroke={SKIN} strokeWidth="8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

export function ProductStrategyIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 170" {...props}>
      <Blob />
      <circle cx="138" cy="78" r="34" fill="none" stroke={INK} strokeWidth="2" opacity="0.5" />
      <circle cx="138" cy="78" r="22" fill={DEEP} stroke={INK} strokeWidth="2" />
      <circle cx="138" cy="78" r="8" fill={AMBER} />
      <line x1="45" y1="132" x2="128" y2="86" stroke={AMBER} strokeWidth="3" strokeLinecap="round" />
      <path d="M128,86 L118,84 L126,76 Z" fill={AMBER} />
      <path d="M30 138 L70 118 L100 130 L150 100" fill="none" stroke={INK} strokeWidth="1.5" strokeDasharray="4 5" opacity="0.5" />
      <path d="M70 118 l0 -14 l8 0 l-4 -8 Z" fill={AMBER} />
      <path d="M150 100 l0 -14 l8 0 l-4 -8 Z" fill={INK} opacity="0.6" />
      <Person x={46} headY={108} />
    </svg>
  );
}

export function ConversionOptimizationIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 200 170" {...props}>
      <Blob />
      <path d="M108,32 L172,32 L150,72 L150,100 L130,100 L130,72 Z" fill={DEEP} stroke={INK} strokeWidth="2" strokeLinejoin="round" />
      <rect x="132" y="100" width="16" height="14" fill={AMBER} />
      <circle cx="118" cy="24" r="4" fill={INK} opacity="0.5" />
      <circle cx="134" cy="20" r="4" fill={INK} opacity="0.5" />
      <circle cx="152" cy="22" r="4" fill={INK} opacity="0.5" />
      <circle cx="140" cy="126" r="6" fill={AMBER} />
      <path d="M150 124 l4 4 6-7" fill="none" stroke={AMBER} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.9" />
      <rect x="24" y="118" width="10" height="16" fill={INK} opacity="0.35" />
      <rect x="38" y="108" width="10" height="26" fill={INK} opacity="0.5" />
      <rect x="52" y="96" width="10" height="38" fill={AMBER} />
      <Person x={82} headY={70} />
      <path d="M93,88 C102,92 108,96 112,102" stroke={SKIN} strokeWidth="8" fill="none" strokeLinecap="round" />
      <circle cx="116" cy="106" r="9" fill="none" stroke={AMBER} strokeWidth="2" opacity="0.6" />
      <path d="M112,102 l8,8" stroke={INK} strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export const SERVICE_ILLUSTRATIONS: Record<
  string,
  (props: SVGProps<SVGSVGElement>) => React.JSX.Element
> = {
  "ux-audit": UxAuditIllustration,
  "ui-redesign": UiRedesignIllustration,
  "web-development": WebDevelopmentIllustration,
  "mobile-development": MobileDevelopmentIllustration,
  "product-strategy": ProductStrategyIllustration,
  "conversion-optimization": ConversionOptimizationIllustration,
};

function MissionBadge({ children }: { children: React.ReactNode }) {
  return (
    <>
      <circle cx="60" cy="60" r="52" fill={AMBER} opacity="0.1" />
      {children}
    </>
  );
}

export function AuditMissionIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <MissionBadge>
        <rect x="38" y="34" width="28" height="6" rx="2" fill={INK} opacity="0.3" />
        <rect x="38" y="46" width="20" height="6" rx="2" fill={INK} opacity="0.3" />
        <rect x="38" y="58" width="24" height="6" rx="2" fill={INK} opacity="0.3" />
        <circle cx="68" cy="66" r="18" fill={DEEP} stroke={AMBER} strokeWidth="5" />
        <line x1="80" y1="78" x2="90" y2="88" stroke={AMBER} strokeWidth="6" strokeLinecap="round" />
      </MissionBadge>
    </svg>
  );
}

export function RedesignMissionIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <MissionBadge>
        <rect x="30" y="66" width="30" height="30" rx="5" fill={DEEP} stroke={INK} strokeWidth="2" />
        <rect x="38" y="74" width="14" height="4" rx="2" fill={INK} opacity="0.4" />
        <rect x="38" y="82" width="10" height="4" rx="2" fill={INK} opacity="0.4" />
        <path
          d="M56 70 L78 48 L86 56 L64 78 Z"
          fill={AMBER}
        />
        <rect x="82" y="38" width="9" height="9" rx="2" fill={AMBER} transform="rotate(45 86.5 42.5)" />
        <circle cx="34" cy="34" r="6" fill={AMBER} opacity="0.7" />
      </MissionBadge>
    </svg>
  );
}

export function BuildMissionIllustration(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 120 120" {...props}>
      <MissionBadge>
        <path d="M40 45 L26 60 L40 75" fill="none" stroke={AMBER} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M80 45 L94 60 L80 75" fill="none" stroke={AMBER} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="66" y1="38" x2="54" y2="82" stroke={INK} strokeWidth="4" strokeLinecap="round" opacity="0.75" />
      </MissionBadge>
    </svg>
  );
}

export const MISSION_ILLUSTRATIONS: Array<
  (props: SVGProps<SVGSVGElement>) => React.JSX.Element
> = [AuditMissionIllustration, RedesignMissionIllustration, BuildMissionIllustration];

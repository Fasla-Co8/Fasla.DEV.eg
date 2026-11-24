import { useId } from "react";
import { cn } from "../utils/cn";

/* ------------------------------------------------------------------
   FASLA.DEV official brand lockup — matched to the supplied logo:
   a sharp, italic electric-blue "F" (two parallelogram arms on a
   slanted stem), the "Fasla" wordmark in white with ".DEV" in blue,
   and the "Code • Learn • Build" tagline with blue separators.
   Sharp edges only — no rounded geometry anywhere.
------------------------------------------------------------------- */

/** The official F glyph — precision vector redraw of the supplied logo.
    Exactly like the artwork, the F is SEGMENTED: a long parallelogram
    top arm floats above the second piece (middle arm + slanted stem),
    separated by a clean diagonal cut. The stem ends in a sharp point. */
export function FMark({
  width = 44,
  className,
}: {
  width?: number;
  className?: string;
}) {
  const gid = useId().replace(/[^a-zA-Z0-9]/g, "");
  const gradId = `fasla-f-${gid}`;
  return (
    <svg
      width={width}
      height={width * 0.98}
      viewBox="0 0 250 245"
      role="img"
      aria-label="FASLA.DEV"
      className={cn("shrink-0", className)}
    >
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#2E8CFF" />
          <stop offset="55%" stopColor="#1E7FFF" />
          <stop offset="100%" stopColor="#1677FF" />
        </linearGradient>
      </defs>
      {/* Segment 1 — floating top arm */}
      <path d="M88 8 L244 8 L232 54 L76 54 Z" fill={`url(#${gradId})`} />
      {/* Segment 2 — middle arm + slanted stem with a pointed tip */}
      <path
        d="M70 76 L186 76 L174 118 L94 118 L72 196 L30 234 Z"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
}

/** Backwards-compatible alias used across the site. */
export function LogoMark({
  size = 44,
  className,
}: {
  size?: number;
  className?: string;
  bordered?: boolean;
}) {
  return <FMark width={size} className={className} />;
}

export function Tagline({
  className,
  size = "sm",
}: {
  className?: string;
  size?: "sm" | "lg";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-jakarta font-medium text-white/75",
        size === "lg" ? "text-sm md:text-base" : "text-[10px]",
        className
      )}
    >
      <span>Code</span>
      <span className="text-brand" aria-hidden>
        •
      </span>
      <span>Learn</span>
      <span className="text-brand" aria-hidden>
        •
      </span>
      <span>Build</span>
    </span>
  );
}

export function Logo({
  size = 40,
  tagline = true,
  className,
  markOnly = false,
  wordmarkClass,
}: {
  size?: number;
  tagline?: boolean;
  className?: string;
  markOnly?: boolean;
  wordmarkClass?: string;
}) {
  if (markOnly) return <FMark width={size} className={className} />;

  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <FMark width={size} />
      <span className="flex flex-col justify-center leading-none">
        <span
          className={cn(
            "font-jakarta font-extrabold tracking-[-0.02em] text-white",
            size >= 56 ? "text-3xl md:text-4xl" : size >= 44 ? "text-2xl" : "text-xl",
            wordmarkClass
          )}
        >
          Fasla<span className="text-brand">.DEV</span>
        </span>
        {tagline && (
          <span className="mt-1.5">
            <Tagline size={size >= 56 ? "lg" : "sm"} />
          </span>
        )}
      </span>
    </span>
  );
}

/** Large stacked lockup exactly like the official logo artwork. */
export function LogoStacked({ markWidth = 120 }: { markWidth?: number }) {
  return (
    <span className="inline-flex flex-col items-center text-center">
      <FMark width={markWidth} />
      <span className="mt-4 font-jakarta text-4xl font-extrabold tracking-[-0.02em] text-white md:text-5xl">
        Fasla<span className="text-brand">.DEV</span>
      </span>
      <span className="mt-3">
        <Tagline size="lg" />
      </span>
    </span>
  );
}

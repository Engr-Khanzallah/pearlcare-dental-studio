import { useCallback, useRef, useState } from "react";
import Icon from "./Icon";

interface CompareSliderProps {
  before: React.ReactNode;
  after: React.ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/**
 * A drag-to-compare slider: "after" sits on top and is revealed/hidden with
 * a clip-path as the handle moves. Works with mouse, touch and keyboard
 * (arrow keys), and needs no external dependency.
 */
export default function CompareSlider({
  before,
  after,
  beforeLabel = "Before",
  afterLabel = "After",
  className = "aspect-[4/3]",
}: CompareSliderProps) {
  const [position, setPosition] = useState(50); // percentage, 0–100
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  function onPointerDown(e: React.PointerEvent) {
    dragging.current = true;
    (e.target as Element).setPointerCapture(e.pointerId);
    updateFromClientX(e.clientX);
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    updateFromClientX(e.clientX);
  }

  function onPointerUp() {
    dragging.current = false;
  }

  function onKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowLeft") setPosition((p) => Math.max(0, p - 5));
    if (e.key === "ArrowRight") setPosition((p) => Math.min(100, p + 5));
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden select-none touch-none ${className}`}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
    >
      {/* Bottom layer: "before" */}
      <div className="absolute inset-0">
        {before}
        <span className="absolute top-3 left-3 text-[11px] font-semibold bg-ink/85 text-white px-2.5 py-1 rounded-full backdrop-blur">
          {beforeLabel}
        </span>
      </div>

      {/* Top layer: "after", clipped to the handle position */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {after}
        <span className="absolute top-3 right-3 text-[11px] font-semibold bg-jade text-white px-2.5 py-1 rounded-full">
          {afterLabel}
        </span>
      </div>

      {/* Divider + drag handle */}
      <div
        className="absolute inset-y-0 w-0.5 bg-white/90 shadow-[0_0_0_1px_rgba(11,42,61,0.15)]"
        style={{ left: `${position}%` }}
      >
        <button
          onPointerDown={onPointerDown}
          onKeyDown={onKeyDown}
          role="slider"
          aria-label="Drag to compare before and after"
          aria-valuenow={Math.round(position)}
          aria-valuemin={0}
          aria-valuemax={100}
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-soft border border-line flex items-center justify-center cursor-ew-resize focus-visible:outline-2 focus-visible:outline-jade"
        >
          <Icon name="align" className="w-4 h-4 text-jade rotate-90" />
        </button>
      </div>
    </div>
  );
}

import { useEffect, useRef, useState } from "react";

const TEXT_ONLY_SELECTORS = "p, h1, h2, h3, h4, h5, h6, li, label";

function isTextOnly(target: Element): boolean {
  const el = target.closest(TEXT_ONLY_SELECTORS);
  if (!el) return false;
  // exclude if inside a button or anchor
  if (el.closest("button, a, [role='button']")) return false;
  return true;
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [onText, setOnText] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + "px";
        cursorRef.current.style.top = e.clientY + "px";
      }
    };

    const handleOver = (e: MouseEvent) => {
      setOnText(isTextOnly(e.target as Element));
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleOver);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleOver);
    };
  }, []);

  const size = onText ? 56 : 32;

  return (
    <div
      ref={cursorRef}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: size,
        height: size,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "difference",
        transition: "width 0.2s ease, height 0.2s ease",
      }}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} fill="none">
        {/* default: filled white circle; text hover: larger filled white circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={size / 2 - 2}
          fill="#FFF"
          style={{ transition: "r 0.2s ease" }}
        />
      </svg>
    </div>
  );
}

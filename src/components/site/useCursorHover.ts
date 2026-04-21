import { useEffect } from "react";

export function useCursorHover(cursorRef: React.RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!cursorRef.current) return;
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target && (target.tagName === "A" || target.tagName === "BUTTON" || target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable || target.classList.contains("cursor-hover"))) {
        cursorRef.current?.classList.add("cursor-hovered");
      }
    };
    const handleMouseOut = (e: MouseEvent) => {
      cursorRef.current?.classList.remove("cursor-hovered");
    };
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);
    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorRef]);
}

import { useState, useEffect, type ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export function PageTransition({ children }: Props) {
  const [prevChildren, setPrevChildren] = useState(children);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (children !== prevChildren) {
      setIsTransitioning(true);
      const timer = setTimeout(() => {
        setPrevChildren(children);
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [children, prevChildren]);

  return (
    <div
      className="flex"
      style={{ width: isTransitioning ? "200%" : "100%" }}
    >
      <div className="w-full flex-shrink-0">
        {prevChildren}
      </div>
      {isTransitioning && (
        <div className="w-full flex-shrink-0 transition-transform duration-500 ease-out translate-x-full">
          {children}
        </div>
      )}
    </div>
  );
}
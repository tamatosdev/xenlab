import { useEffect, useState } from "react";

export function Loader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#ff6728]/20 via-background to-[#ff6728]/10">
      <div className="w-80 max-w-[90vw]">
        <div className="text-center mb-4">
          <h2 className="text-2xl font-bold text-foreground">XENLabs.ai</h2>
          <p className="text-sm text-muted-foreground mt-1">Loading...</p>
        </div>
        <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
          <div
            className="h-full transition-all duration-75 ease-linear rounded-full"
            style={{ width: `${progress}%`, backgroundColor: "#ff6728" }}
          />
        </div>
        <p className="text-center text-sm text-muted-foreground mt-2">
          {progress}%
        </p>
      </div>
    </div>
  );
}
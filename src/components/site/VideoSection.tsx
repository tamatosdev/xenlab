import { SectionHeading } from "@/components/site/SectionHeading";

export function VideoSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="See Our AI Avatars in Action"
          subtitle="Watch how we transform founders into scalable content machines"
          align="center"
        />
        <div className="mt-8 aspect-video bg-muted rounded-lg relative overflow-hidden group cursor-pointer border-2 border-dashed border-muted-foreground/30">
          {/* Thumbnail placeholder - replace with actual thumbnail image */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
            <div className="text-center">
              {/* Play button */}
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg
                  className="w-10 h-10 text-white ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <p className="text-white font-medium">Click to play video</p>
              <p className="text-white/70 text-sm mt-1">
                Thumbnail placeholder — add your video later
              </p>
            </div>
          </div>
          {/* Duration badge */}
          <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-2 py-1 rounded">
            0:00
          </div>
        </div>
      </div>
    </section>
  );
}
import { useState } from "react";
import { ImageOff } from "lucide-react";

interface SafeImageProps {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  objectPosition?: string;
}

/**
 * Renders the supplied photo. If no photo has been placed in the
 * assets folder yet (or the file is broken) a clean branded surface
 * is shown instead of a broken image icon.
 */
export default function SafeImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  fetchPriority = "auto",
  objectPosition = "center",
}: SafeImageProps) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(src) && !failed;

  return (
    <div className={`relative overflow-hidden bg-navy-800 ${className}`}>
      {showImage ? (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          // @ts-ignore - fetchpriority is supported by modern browsers
          fetchpriority={fetchPriority}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
          style={{ objectPosition }}
        />
      ) : (
        <div className="img-fallback flex h-full w-full items-center justify-center">
          <span className="flex flex-col items-center gap-2 text-white/45">
            <ImageOff className="h-6 w-6" aria-hidden="true" />
            <span className="text-[0.65rem] font-semibold uppercase tracking-[0.2em]">
              {alt}
            </span>
          </span>
        </div>
      )}
    </div>
  );
}

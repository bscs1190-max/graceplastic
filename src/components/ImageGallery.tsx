import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";

export interface GalleryItem {
  src: string;
  alt: string;
  category: string;
  aspect: string;
}

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ items, index, onClose, onNavigate }: LightboxProps) {
  const active = index !== null ? items[index] : undefined;

  const previous = useCallback(() => {
    if (index === null || items.length === 0) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [index, items.length, onNavigate]);

  const next = useCallback(() => {
    if (index === null || items.length === 0) return;
    onNavigate((index + 1) % items.length);
  }, [index, items.length, onNavigate]);

  useEffect(() => {
    if (index === null) return;
    document.body.classList.add("no-scroll");

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.classList.remove("no-scroll");
    };
  }, [index, onClose, previous, next]);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/95 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-label={active.alt}
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent-500 hover:bg-accent-500 sm:right-6 sm:top-6"
      >
        <X className="h-5 w-5" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          previous();
        }}
        aria-label="Previous image"
        className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-accent-500 hover:bg-accent-500 sm:left-6 sm:h-14 sm:w-14"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation();
          next();
        }}
        aria-label="Next image"
        className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all hover:border-accent-500 hover:bg-accent-500 sm:right-6 sm:h-14 sm:w-14"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <figure
        className="mx-auto flex max-h-[86vh] w-full max-w-5xl flex-col items-center px-4 animate-scaleIn sm:px-16"
        onClick={(event) => event.stopPropagation()}
      >
        <img
          src={active.src}
          alt={active.alt}
          className="max-h-[74vh] w-auto max-w-full rounded-xl object-contain shadow-lift"
        />
        <figcaption className="mt-5 flex items-center gap-4 text-center text-sm text-steel-100/80">
          <span className="rounded-full border border-white/15 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-accent-400">
            {active.category}
          </span>
          <span className="truncate">{active.alt}</span>
          <span className="text-white/40">
            {index !== null ? `${index + 1} / ${items.length}` : ""}
          </span>
        </figcaption>
      </figure>
    </div>
  );
}

interface ImageGalleryProps {
  items: GalleryItem[];
  categories?: string[];
}

export default function ImageGallery({ items, categories }: ImageGalleryProps) {
  const [filter, setFilter] = useState<string>("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const available = categories && categories.length > 1 ? ["All", ...categories] : [];
  const visible = filter === "All" ? items : items.filter((item) => item.category === filter);

  return (
    <div>
      {available.length > 1 && (
        <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-2 sm:mx-0 sm:flex-wrap sm:px-0">
          {available.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setFilter(category)}
              aria-pressed={filter === category}
              className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                filter === category
                  ? "border-navy-800 bg-navy-800 text-white shadow-soft"
                  : "border-slate-200 bg-white text-slate-500 hover:border-navy-800/30 hover:text-navy-800"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {visible.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-mist px-6 py-16 text-center">
          <ZoomIn className="mx-auto h-8 w-8 text-slate-300" aria-hidden="true" />
          <p className="mt-4 font-semibold text-navy-800">No photos in this category yet</p>
          <p className="mt-1 text-sm text-slate-500">
            Add images to the assets folder and they will appear here automatically.
          </p>
        </div>
      ) : (
        <div className="masonry mt-10 columns-1 sm:columns-2 lg:columns-3">
          {visible.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-navy-800 text-left shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-500"
              aria-label={`Open ${item.alt}`}
            >
              <div className={`w-full overflow-hidden ${item.aspect}`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />
              </div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 p-5 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-accent-400">
                  {item.category}
                </span>
                <p className="mt-1 text-sm font-semibold text-white">{item.alt}</p>
              </div>
              <span className="pointer-events-none absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white/90 text-navy-800 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <ZoomIn className="h-4 w-4" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      )}

      <Lightbox
        items={visible}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={(next) => setActiveIndex(next)}
      />
    </div>
  );
}

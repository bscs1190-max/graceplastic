interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && (
        <span
          className={`eyebrow ${centered ? "justify-center" : ""} ${
            light ? "text-accent-400" : "text-accent-600"
          }`}
        >
          <span className={`h-px w-8 ${light ? "bg-accent-400/60" : "bg-accent-500/60"}`} />
          {eyebrow}
        </span>
      )}
      <h2
        className={`mt-4 text-balance text-[1.95rem] font-extrabold leading-[1.12] sm:text-[2.4rem] lg:text-[2.9rem] ${
          light ? "text-white" : "text-navy-800"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            light ? "text-steel-100/80" : "text-slate-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

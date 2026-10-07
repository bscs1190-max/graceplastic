import Breadcrumbs, { type Crumb } from "./Breadcrumbs";
import SafeImage from "./SafeImage";

interface PageHeaderProps {
  title: string;
  eyebrow?: string;
  description?: string;
  crumbs: Crumb[];
  image?: string;
}

export default function PageHeader({
  title,
  eyebrow,
  description,
  crumbs,
  image,
}: PageHeaderProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-950 pb-16 pt-36 sm:pb-20 sm:pt-40 lg:pb-24 lg:pt-44">
      {image && (
        <SafeImage
          src={image}
          alt=""
          loading="eager"
          className="absolute inset-0 -z-20 h-full w-full opacity-70"
        />
      )}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900/75 to-navy-800/45" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-navy-950 to-transparent" />

      <div className="container-x">
        <Breadcrumbs items={crumbs} light />
        <div className="mt-8 max-w-3xl">
          {eyebrow && (
            <span className="eyebrow text-accent-400">
              <span className="h-px w-8 bg-accent-400/60" />
              {eyebrow}
            </span>
          )}
          <h1 className="mt-4 text-balance text-[2.2rem] font-extrabold leading-[1.08] text-white sm:text-[2.9rem] lg:text-[3.5rem]">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-steel-100/75 sm:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>

      <div className="pointer-events-none absolute -right-16 top-16 -z-10 h-64 w-64 rounded-full bg-steel-600/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 -z-10 h-px w-1/2 bg-gradient-to-r from-transparent via-accent-500/40 to-transparent" />
    </section>
  );
}

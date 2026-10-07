import Reveal from "./Reveal";
import { stats } from "../data/site";

export default function StatsSection() {
  return (
    <section
      aria-label="Company strengths"
      className="relative z-20 -mt-px bg-white pb-4 pt-10 sm:pt-12"
    >
      <div className="container-x">
        <div className="grid gap-px overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-200/80 shadow-card sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Reveal
                key={stat.title}
                delay={index * 90}
                className="group relative bg-white p-7 transition-colors duration-300 hover:bg-mist sm:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white transition-all duration-300 group-hover:bg-accent-500">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="text-[0.7rem] font-bold tracking-[0.2em] text-slate-300">
                    {stat.label}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-extrabold text-navy-800">{stat.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">{stat.text}</p>
                <span className="mt-6 block h-px w-10 bg-accent-500 transition-all duration-300 group-hover:w-20" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

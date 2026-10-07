import { ArrowRight, MessageSquareText } from "lucide-react";
import Button from "./Button";
import Reveal from "./Reveal";

interface CTASectionProps {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

export default function CTASection({
  title = "Have a product requirement or business inquiry?",
  text = "Tell us what you need and the team at Hanif Plast will get back to you with the right information.",
  primaryLabel = "Contact Us",
  primaryTo = "/contact",
  secondaryLabel = "View Products",
  secondaryTo = "/products",
}: CTASectionProps) {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900">
      <div className="absolute inset-0 -z-10 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-72 w-72 rounded-full bg-steel-600/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-0 -z-10 h-64 w-64 rounded-full bg-accent-500/20 blur-3xl" />

      <div className="container-x flex flex-col items-start gap-9 py-16 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-24">
        <Reveal className="max-w-2xl">
          <span className="eyebrow text-accent-400">
            <span className="h-px w-8 bg-accent-400/60" />
            Let&apos;s Work Together
          </span>
          <h2 className="mt-4 text-balance text-[1.9rem] font-extrabold leading-[1.12] text-white sm:text-[2.4rem] lg:text-[2.8rem]">
            {title}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-steel-100/75 sm:text-lg">
            {text}
          </p>
        </Reveal>

        <Reveal delay={120} className="flex w-full shrink-0 flex-col gap-4 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
          <Button to={primaryTo} variant="accent" size="lg" className="w-full sm:w-auto">
            {primaryLabel}
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
          <Button
            to={secondaryTo}
            variant="ghostLight"
            size="lg"
            className="w-full sm:w-auto"
          >
            <MessageSquareText className="h-4 w-4" />
            {secondaryLabel}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

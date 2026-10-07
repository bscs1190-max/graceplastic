import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { companyImages } from "../data/images";
import { approach, whyChooseUs } from "../data/site";

const storyParagraphs = [
  "Hanif Plast operates with a straightforward goal: deliver dependable plastic products that businesses can order again and again without worrying about inconsistent quality.",
  "Every inquiry is treated according to its own requirement. We look at how the product will be used, what quantity is needed and what standard the finished item has to meet before production begins.",
  "Communication stays clear throughout the process, so customers always know where their order stands and what to expect next.",
];

export default function About() {
  return (
    <>
      <Seo
        title="About Hanif Plast"
        description="Learn about Hanif Plast - a plastic manufacturing business focused on quality, reliable production and customer satisfaction."
      />
      <PageHeader
        eyebrow="About Us"
        title="A Manufacturing Partner Built on Trust"
        description="Hanif Plast is focused on delivering dependable plastic products through careful manufacturing, quality-focused processes and a commitment to customer satisfaction."
        crumbs={[{ label: "About" }]}
        image={companyImages.factory[0] ?? companyImages.hero}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="Our Story"
              title="Built Around Quality and Reliability"
            />
            <div className="mt-7 space-y-5 text-base leading-relaxed text-slate-500 sm:text-lg">
              {storyParagraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-9 grid gap-4 sm:grid-cols-2">
              {approach.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card"
                >
                  <span className="text-[0.7rem] font-bold tracking-[0.2em] text-accent-500">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-base font-bold text-navy-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={130} className="space-y-5">
            <div className="overflow-hidden rounded-3xl shadow-card">
              <SafeImage
                src={companyImages.about}
                alt="Inside Hanif Plast"
                className="aspect-[4/3] w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <SafeImage
                  src={companyImages.factory[1] ?? companyImages.products[0]}
                  alt="Machinery at work"
                  className="aspect-square w-full"
                />
              </div>
              <div className="overflow-hidden rounded-3xl shadow-soft">
                <SafeImage
                  src={companyImages.products[0] ?? companyImages.about}
                  alt="Plastic product detail"
                  className="aspect-square w-full"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What We Stand For"
              title="The Standards Behind Every Order"
              description="Four working principles that shape how Hanif Plast handles every inquiry, production run and customer relationship."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal
                  key={point.title}
                  delay={index * 90}
                  className="h-full rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-800 text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-base font-extrabold text-navy-800">
                    {point.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{point.text}</p>
                </Reveal>
              );
            })}
          </div>

          <Reveal delay={120} className="mt-14">
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-navy-800 px-8 py-10 text-center shadow-card sm:px-12">
              <h3 className="max-w-2xl text-balance text-2xl font-extrabold text-white sm:text-3xl">
                Looking for a plastic products supplier you can rely on?
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button to="/contact" variant="accent" size="md" className="group">
                  Talk To Us
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button to="/products" variant="ghostLight" size="md">
                  Browse Products
                </Button>
              </div>
            </div>
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              "Quality-focused production",
              "Consistent, repeatable output",
              "Customer-first communication",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-5 py-4 text-sm font-semibold text-navy-800"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-500" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection />
    </>
  );
}

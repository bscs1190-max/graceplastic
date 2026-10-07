import { ArrowRight, CheckCircle2 } from "lucide-react";
import Button from "../components/Button";
import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { companyImages } from "../data/images";
import { approach, capabilities } from "../data/site";

const workStandards = [
  "Material is selected and handled according to the product requirement.",
  "Production stages are monitored so repeat orders stay consistent.",
  "Finished items are reviewed for appearance, finish and basic usability.",
  "Orders are prepared and dispatched in line with the agreed schedule.",
];

export default function Capabilities() {
  const factory = companyImages.factory;

  return (
    <>
      <Seo
        title="Manufacturing Capabilities"
        description="An overview of the manufacturing capabilities at Hanif Plast - quality manufacturing, consistent production, custom solutions and reliable service."
      />
      <PageHeader
        eyebrow="Manufacturing"
        title="Capabilities Built Around Consistency"
        description="Organised production, careful quality checks and flexible handling of requirements - the foundation of every order we take on."
        crumbs={[{ label: "Capabilities" }]}
        image={factory[0] ?? companyImages.hero}
      />

      <section className="py-20 sm:py-24">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              eyebrow="How We Work"
              title="Production That Stays Organised"
              description="Hanif Plast keeps its workflow clear and repeatable, so the products you receive the first time look and perform the same way the next time you order."
            />
            <ul className="mt-8 space-y-4">
              {workStandards.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent-500"
                    aria-hidden="true"
                  />
                  <span className="text-sm leading-relaxed text-slate-500 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-9">
              <Button to="/contact" variant="primary" size="md" className="group">
                Discuss Your Requirement
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={130} className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="col-span-2 overflow-hidden rounded-3xl shadow-card">
              <SafeImage
                src={factory[0] ?? companyImages.hero}
                alt="Hanif Plast production floor"
                className="aspect-[16/10] w-full"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <SafeImage
                src={factory[1] ?? companyImages.about}
                alt="Manufacturing machinery"
                className="aspect-[4/5] w-full"
              />
            </div>
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <SafeImage
                src={factory[2] ?? companyImages.products[0] ?? companyImages.about}
                alt="Work in progress"
                className="aspect-[4/5] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Capabilities"
              title="What Hanif Plast Delivers"
              description="A clear set of capabilities that covers most day-to-day requirements of businesses ordering plastic products."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {capabilities.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift sm:p-10"
                >
                  <span className="absolute -right-6 -top-6 h-28 w-28 rounded-full bg-steel-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-white transition-all duration-300 group-hover:bg-accent-500">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-6 text-xl font-extrabold text-navy-800">
                    {item.title}
                  </h3>
                  <p className="relative mt-3 text-sm leading-relaxed text-slate-500 sm:text-base">
                    {item.text}
                  </p>
                  <span className="relative mt-6 block h-px w-10 bg-accent-500 transition-all duration-300 group-hover:w-28" />
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              eyebrow="Our Approach"
              title="From Requirement to Finished Product"
              description="A straightforward process that keeps every order transparent for the customer."
            />
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {approach.map((item, index) => (
              <Reveal
                key={item.title}
                delay={index * 90}
                className="relative rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft"
              >
                <li className="list-none">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-500 text-sm font-extrabold text-white">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-base font-extrabold text-navy-800">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.text}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="pb-20 sm:pb-24">
        <div className="container-x grid gap-5 sm:grid-cols-3">
          {(factory.length > 0 ? factory : companyImages.gallery).slice(0, 3).map((src, index) => (
            <Reveal key={`${src}-${index}`} delay={index * 90} className="overflow-hidden rounded-3xl">
              <SafeImage
                src={src}
                alt={`Hanif Plast facility ${index + 1}`}
                className="aspect-[4/3] w-full"
                imgClassName="transition-transform duration-700 hover:scale-105"
              />
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection
        title="Ready to plan your next order?"
        text="Send the product details, quantities and timeline you have in mind - Hanif Plast will take it from there."
        primaryLabel="Request Information"
        secondaryLabel="See Gallery"
        secondaryTo="/gallery"
      />
    </>
  );
}

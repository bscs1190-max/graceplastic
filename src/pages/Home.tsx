import { ArrowRight, MoveRight } from "lucide-react";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";
import ProductCard from "../components/ProductCard";
import Seo from "../components/Seo";
import { companyImages } from "../data/images";
import { featuredProducts } from "../data/products";
import { approach, capabilities, whyChooseUs } from "../data/site";

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden bg-navy-950 pb-28 pt-32 lg:pb-36 lg:pt-36">
      <div className="absolute inset-0 -z-20">
        <SafeImage
          src={companyImages.hero}
          alt="Hanif Plast manufacturing"
          loading="eager"
          fetchPriority="high"
          className="h-full w-full"
          imgClassName="scale-105"
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-navy-950 via-navy-950/90 to-navy-900/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-navy-950 via-navy-950/25 to-navy-950/60" />

      <div className="container-x w-full">
        <div className="max-w-3xl">
          <span className="eyebrow animate-fadeUp border border-white/15 bg-white/5 px-4 py-2 text-white/75 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Quality • Innovation • Reliability
          </span>

          <h1
            className="animate-fadeUp text-balance text-[2.35rem] font-extrabold leading-[1.06] text-white sm:text-[3.2rem] lg:text-[4rem] xl:text-[4.4rem]"
            style={{ animationDelay: "120ms" }}
          >
            Reliable Plastic Manufacturing,
            <span className="block text-steel-200">Built for Your Business.</span>
          </h1>

          <p
            className="animate-fadeUp mt-7 max-w-xl text-base leading-relaxed text-steel-100/80 sm:text-lg"
            style={{ animationDelay: "240ms" }}
          >
            Hanif Plast delivers quality plastic products with a focus on reliable
            manufacturing, consistent quality and customer satisfaction.
          </p>

          <div
            className="animate-fadeUp mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
            style={{ animationDelay: "360ms" }}
          >
            <Button to="/products" variant="accent" size="lg" className="group w-full sm:w-auto">
              Explore Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button to="/contact" variant="ghostLight" size="lg" className="w-full sm:w-auto">
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-24 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 text-white/40 lg:flex">
        <span className="text-[0.62rem] font-bold uppercase tracking-[0.3em]">Scroll</span>
        <span className="h-14 w-px animate-pulse bg-gradient-to-b from-accent-500 to-transparent" />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative overflow-hidden rounded-3xl shadow-card">
            <SafeImage
              src={companyImages.about}
              alt="Hanif Plast production"
              className="aspect-[4/3] w-full"
              imgClassName="transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="absolute -bottom-7 -right-3 hidden max-w-[15rem] rounded-2xl border border-slate-200 bg-white p-6 shadow-lift sm:block lg:-right-8">
            <span className="eyebrow text-accent-600">Since day one</span>
            <p className="mt-3 text-sm font-semibold leading-relaxed text-navy-800">
              Material, finish and consistency checked at every stage of production.
            </p>
          </div>
          <div className="absolute -left-4 -top-4 hidden h-24 w-24 rounded-2xl border-2 border-accent-500/60 sm:block" />
        </Reveal>

        <Reveal delay={120}>
          <SectionHeading
            eyebrow="About Hanif Plast"
            title="Built Around Quality and Reliability"
            description="Hanif Plast is focused on delivering dependable plastic products through careful manufacturing, quality-focused processes and a commitment to customer satisfaction."
          />

          <ul className="mt-9 space-y-5">
            {approach.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-navy-800 text-[0.6rem] font-bold text-white">
                  <MoveRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-bold text-navy-800">{item.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-slate-500">
                    {item.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button to="/about" variant="primary" size="md">
              Learn More
            </Button>
            <Button to="/capabilities" variant="outline" size="md">
              Our Capabilities
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FeaturedProducts() {
  return (
    <section className="bg-mist py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Our Products"
              title="Products Built for Everyday and Business Use"
              description="A selection of plastic products manufactured by Hanif Plast, presented with real product photography from our workshop."
            />
          </Reveal>
          <Reveal delay={100} className="shrink-0">
            <Button to="/products" variant="outline" size="md" className="group">
              View All Products
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Reveal>
        </div>

        {featuredProducts.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.slug} delay={(index % 3) * 90} className="h-full">
                <ProductCard product={product} index={index} />
              </Reveal>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <p className="text-lg font-bold text-navy-800">Product photos are on the way</p>
            <p className="mx-auto mt-2 max-w-md text-sm text-slate-500">
              Place the company product images in{" "}
              <code className="rounded bg-mist px-2 py-0.5 text-navy-700">
                src/assets/images
              </code>{" "}
              and the product cards will be generated automatically.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function ManufacturingSection() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-900 py-20 sm:py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-72 w-72 rounded-full bg-steel-600/20 blur-3xl" />
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <Reveal>
            <SectionHeading
              tone="light"
              eyebrow="Manufacturing"
              title="Manufacturing Capabilities You Can Rely On"
              description="From material handling to finished goods, Hanif Plast keeps production organised, repeatable and centred around what your business actually needs."
            />
            <div className="mt-9 flex flex-wrap gap-4">
              <Button to="/capabilities" variant="accent" size="md">
                Explore Capabilities
              </Button>
              <Button to="/gallery" variant="ghostLight" size="md">
                View Gallery
              </Button>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {capabilities.slice(0, 2).map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-accent-500/40 hover:bg-white/[0.07]"
                  >
                    <Icon className="h-6 w-6 text-accent-400" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-steel-100/65">
                      {item.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={140} className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="col-span-2 overflow-hidden rounded-3xl">
              <SafeImage
                src={companyImages.factory[0] ?? companyImages.hero}
                alt="Hanif Plast factory"
                className="aspect-[16/10] w-full"
              />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <SafeImage
                src={companyImages.factory[1] ?? companyImages.products[0]}
                alt="Production machinery"
                className="aspect-square w-full"
              />
            </div>
            <div className="overflow-hidden rounded-3xl">
              <SafeImage
                src={companyImages.factory[2] ?? companyImages.products[1] ?? companyImages.about}
                alt="Finished plastic products"
                className="aspect-square w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section className="py-20 sm:py-24 lg:py-28">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Why Hanif Plast"
            title="Why Businesses Choose Hanif Plast"
            description="The way we work is simple: honest communication, careful production and products that stay consistent order after order."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal
                key={point.title}
                delay={index * 100}
                className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:border-navy-800/10 hover:shadow-lift"
              >
                <span className="absolute right-6 top-6 text-5xl font-extrabold text-slate-100 transition-colors duration-300 group-hover:text-steel-50">
                  0{index + 1}
                </span>
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-800 text-white transition-all duration-300 group-hover:bg-accent-500 group-hover:rotate-3">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-7 text-lg font-extrabold text-navy-800">
                  {point.title}
                </h3>
                <p className="relative mt-3 text-sm leading-relaxed text-slate-500">
                  {point.text}
                </p>
                <span className="relative mt-6 block h-px w-10 bg-accent-500 transition-all duration-300 group-hover:w-24" />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Seo
        title="Hanif Plast | Quality Plastic Manufacturing"
        description="Hanif Plast provides quality plastic products with a focus on reliable manufacturing, consistent quality and customer satisfaction."
      />
      <Hero />
      <StatsSection />
      <AboutSection />
      <FeaturedProducts />
      <ManufacturingSection />
      <WhyChooseUs />
      <CTASection />
    </>
  );
}

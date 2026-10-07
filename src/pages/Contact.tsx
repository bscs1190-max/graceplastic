import { Facebook, Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "../components/ContactForm";
import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import SafeImage from "../components/SafeImage";
import SectionHeading from "../components/SectionHeading";
import Seo from "../components/Seo";
import { company, hasAddress, hasEmail, hasPhone } from "../config/company";
import { companyImages } from "../data/images";

interface InfoCard {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  available: boolean;
  note: string;
}

const contactDetails: InfoCard[] = [
  {
    icon: Phone,
    label: "Phone",
    value: company.phone,
    href: hasPhone ? `tel:${company.phone.replace(/\s/g, "")}` : undefined,
    available: hasPhone,
    note: "To be added",
  },
  {
    icon: Mail,
    label: "Email",
    value: company.email,
    href: hasEmail ? `mailto:${company.email}` : undefined,
    available: hasEmail,
    note: "To be added",
  },
  {
    icon: MapPin,
    label: "Address",
    value: company.address,
    available: hasAddress,
    note: "To be added",
  },
  {
    icon: Facebook,
    label: "Facebook",
    value: "facebook.com/hanif.plast",
    href: company.facebook,
    available: true,
    note: "",
  },
];

export default function Contact() {
  return (
    <>
      <Seo
        title="Contact"
        description="Get in touch with Hanif Plast for product requirements and business inquiries."
      />
      <PageHeader
        eyebrow="Get In Touch"
        title="Have a Product Requirement or Business Inquiry?"
        description="Send us the details of what you need and the Hanif Plast team will respond with the right information."
        crumbs={[{ label: "Contact" }]}
        image={companyImages.about}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={130} className="space-y-6">
            <div className="rounded-3xl border border-slate-200/80 bg-navy-800 p-7 text-white shadow-card sm:p-9">
              <span className="eyebrow text-accent-400">
                <span className="h-px w-8 bg-accent-400/60" />
                Contact Information
              </span>
              <h2 className="mt-4 text-2xl font-extrabold text-white">
                Reach the Hanif Plast team
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-steel-100/70">
                Use whichever channel is easiest for you. Business inquiries are answered as
                quickly as possible.
              </p>

              <ul className="mt-8 space-y-6">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.label} className="flex items-start gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10 ring-1 ring-inset ring-white/15">
                        <Icon className="h-5 w-5 text-accent-400" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/45">
                          {item.label}
                        </span>
                        {item.available ? (
                          item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel="noreferrer noopener"
                              className="mt-1 block break-words text-sm font-semibold text-white transition-colors hover:text-accent-400"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="mt-1 block break-words text-sm font-semibold text-white">
                              {item.value}
                            </span>
                          )
                        ) : (
                          <span className="mt-1 block text-sm italic text-white/35">
                            {item.note}
                          </span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl shadow-card">
              <SafeImage
                src={companyImages.factory[0] ?? companyImages.about}
                alt="Hanif Plast location"
                className="aspect-[16/10] w-full"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-16 sm:py-20">
        <div className="container-x">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="What Happens Next"
              title="Simple, Straightforward Follow-Up"
              description="We keep the follow-up process clear so you always know what to expect after sending an inquiry."
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "You send the requirement",
                text: "Share the product, quantity and any timing details through the form or Facebook page.",
              },
              {
                title: "We review and respond",
                text: "The inquiry is reviewed and you receive a clear response about availability and next steps.",
              },
              {
                title: "We plan the order",
                text: "Once confirmed, the order details are finalised and production planning begins.",
              },
            ].map((step, index) => (
              <Reveal
                key={step.title}
                delay={index * 100}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-soft"
              >
                <span className="text-[0.7rem] font-bold tracking-[0.2em] text-accent-500">
                  0{index + 1}
                </span>
                <h3 className="mt-3 text-lg font-extrabold text-navy-800">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{step.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

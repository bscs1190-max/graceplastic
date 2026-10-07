import { Link } from "react-router-dom";
import { ArrowRight, Facebook, Mail, MapPin, Phone } from "lucide-react";
import { company, hasAddress, hasEmail, hasPhone } from "../config/company";
import { navItems } from "../data/site";
import { products } from "../data/products";

function InfoRow({
  icon: Icon,
  label,
  value,
  href,
  available,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href?: string;
  available: boolean;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white/5 ring-1 ring-inset ring-white/10">
        <Icon className="h-4 w-4 text-accent-400" aria-hidden="true" />
      </span>
      <span className="min-w-0">
        <span className="block text-[0.68rem] font-bold uppercase tracking-[0.2em] text-white/40">
          {label}
        </span>
        {available ? (
          href ? (
            <a
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-1 block break-words text-sm font-medium text-steel-100 transition-colors hover:text-accent-400"
            >
              {value}
            </a>
          ) : (
            <span className="mt-1 block break-words text-sm font-medium text-steel-100">
              {value}
            </span>
          )
        ) : (
          <span className="mt-1 block text-sm italic text-white/30">
            To be added
          </span>
        )}
      </span>
    </li>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const productLinks = products.slice(0, 4);

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-steel-100">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/60 to-transparent" />
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-steel-600/10 blur-3xl" />

      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_0.8fr_1fr_1.2fr] lg:gap-10 lg:py-20">
        <div>
          <div className="flex items-center gap-3">
            <span className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-white shadow-[0_8px_20px_-10px_rgba(5,13,26,0.6)] ring-1 ring-inset ring-white/15">
              <img
                src="/images/image.png"
                alt={`${company.name} logo`}
                className="h-full w-full object-contain p-0.5"
              />
            </span>
            <span className="flex flex-col leading-none">
              <span className="text-xl font-extrabold text-white">{company.name}</span>
              <span className="mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-white/45">
                Plastic Industry
              </span>
            </span>
          </div>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-steel-100/65">
            {company.name} delivers quality plastic products with a focus on reliable
            manufacturing, consistent quality and customer satisfaction.
          </p>
          <a
            href={company.facebook}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-white/80 transition-all duration-300 hover:border-accent-500 hover:bg-accent-500 hover:text-white"
          >
            <Facebook className="h-4 w-4" aria-hidden="true" />
            Facebook
          </a>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/45">
            Navigation
          </h3>
          <ul className="mt-6 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className="group inline-flex items-center gap-2 text-sm text-steel-100/75 transition-colors hover:text-accent-400"
                >
                  <span className="h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-4" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/45">
            Products
          </h3>
          <ul className="mt-6 space-y-3">
            {productLinks.length > 0 ? (
              productLinks.map((product) => (
                <li key={product.slug}>
                  <Link
                    to={`/products/${product.slug}`}
                    className="group inline-flex items-center gap-2 text-sm text-steel-100/75 transition-colors hover:text-accent-400"
                  >
                    <span className="h-px w-0 bg-accent-500 transition-all duration-300 group-hover:w-4" />
                    {product.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="text-sm italic text-steel-100/40">
                Product catalogue coming soon
              </li>
            )}
            <li>
              <Link
                to="/products"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors hover:text-accent-400"
              >
                View all
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/45">
            Get In Touch
          </h3>
          <ul className="mt-6 space-y-5">
            <InfoRow
              icon={Phone}
              label="Phone"
              value={company.phone}
              href={hasPhone ? `tel:${company.phone.replace(/\s/g, "")}` : undefined}
              available={hasPhone}
            />
            <InfoRow
              icon={Mail}
              label="Email"
              value={company.email}
              href={hasEmail ? `mailto:${company.email}` : undefined}
              available={hasEmail}
            />
            <InfoRow
              icon={MapPin}
              label="Address"
              value={company.address}
              available={hasAddress}
            />
            <InfoRow
              icon={Facebook}
              label="Facebook"
              value="hanif.plast"
              href={company.facebook}
              available
            />
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-6 text-[0.78rem] text-white/45 sm:flex-row">
          <p>
            © {year} {company.name}. All rights reserved.
          </p>
          <p className="uppercase tracking-[0.18em]">{company.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, Images, Tag } from "lucide-react";
import Breadcrumbs from "../components/Breadcrumbs";
import Button from "../components/Button";
import NotFound from "./NotFound";
import SafeImage from "../components/SafeImage";
import Seo from "../components/Seo";
import { getProduct, products } from "../data/products";

export default function ProductDetail() {
  const { slug = "" } = useParams();
  const product = getProduct(slug);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [slug]);

  if (!product) return <NotFound />;

  const gallery = product.gallery.length > 0 ? product.gallery : [product.image];
  const current = gallery[activeImage] ?? product.image;
  const related = products.filter((item) => item.slug !== product.slug).slice(0, 3);

  return (
    <>
      <Seo title={product.name} description={product.description} />

      <section className="relative isolate overflow-hidden bg-navy-950 pb-14 pt-36 sm:pt-40">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
        <div className="pointer-events-none absolute -right-16 top-10 -z-10 h-64 w-64 rounded-full bg-steel-600/20 blur-3xl" />
        <div className="container-x">
          <Breadcrumbs
            light
            items={[
              { label: "Products", path: "/products" },
              { label: product.name },
            ]}
          />
          <h1 className="mt-7 max-w-3xl text-balance text-[2rem] font-extrabold leading-[1.1] text-white sm:text-[2.7rem]">
            {product.name}
          </h1>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/40 bg-accent-500/10 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-accent-400">
              <Tag className="h-3.5 w-3.5" aria-hidden="true" />
              {product.category}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-white/60">
              <Images className="h-3.5 w-3.5" aria-hidden="true" />
              {gallery.length} photo{gallery.length > 1 ? "s" : ""}
            </span>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="overflow-hidden rounded-3xl border border-slate-200/80 bg-mist shadow-card">
              <SafeImage
                key={current}
                src={current}
                alt={product.name}
                loading="eager"
                className="aspect-[4/3] w-full animate-fadeIn"
              />
            </div>

            {gallery.length > 1 && (
              <div className="mt-5 grid grid-cols-4 gap-3 sm:grid-cols-5">
                {gallery.map((src, index) => (
                  <button
                    key={`${src}-${index}`}
                    type="button"
                    onClick={() => setActiveImage(index)}
                    aria-label={`View image ${index + 1}`}
                    aria-pressed={activeImage === index}
                    className={`overflow-hidden rounded-xl border-2 transition-all duration-300 ${
                      activeImage === index
                        ? "border-accent-500 shadow-soft"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <SafeImage src={src} alt={`${product.name} view ${index + 1}`} className="aspect-square w-full" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div>
            <span className="eyebrow text-accent-600">Product Information</span>
            <h2 className="mt-4 text-2xl font-extrabold text-navy-800 sm:text-3xl">
              {product.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500 sm:text-lg">
              {product.description}
            </p>

            <dl className="mt-8 divide-y divide-slate-200 rounded-2xl border border-slate-200/80 bg-white">
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Category
                </dt>
                <dd className="text-sm font-bold text-navy-800">{product.category}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Application
                </dt>
                <dd className="text-sm font-bold text-navy-800">Business &amp; Commercial</dd>
              </div>
              <div className="flex items-center justify-between gap-4 px-6 py-4">
                <dt className="text-[0.72rem] font-bold uppercase tracking-[0.16em] text-slate-400">
                  Availability
                </dt>
                <dd className="text-sm font-bold text-navy-800">On request</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button to="/contact" variant="accent" size="lg" className="group">
                Request Information
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button to="/products" variant="outline" size="lg">
                <ArrowLeft className="h-4 w-4" />
                Back to Products
              </Button>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-mist py-16 sm:py-20">
          <div className="container-x">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <span className="eyebrow text-accent-600">You may also like</span>
                <h2 className="mt-3 text-2xl font-extrabold text-navy-800 sm:text-3xl">
                  More Products
                </h2>
              </div>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-navy-800"
              >
                View all
                <ArrowRight className="h-4 w-4 text-accent-500 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link
                  key={item.slug}
                  to={`/products/${item.slug}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <SafeImage
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full"
                      imgClassName="transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-bold uppercase tracking-[0.16em] text-accent-500">
                      {item.category}
                    </p>
                    <p className="mt-1 truncate font-bold text-navy-800">{item.name}</p>
                    <p className="mt-1 text-xs text-slate-400">View details</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}

import { useMemo, useState } from "react";
import { PackageSearch } from "lucide-react";
import CTASection from "../components/CTASection";
import PageHeader from "../components/PageHeader";
import ProductCard from "../components/ProductCard";
import Reveal from "../components/Reveal";
import Seo from "../components/Seo";
import { companyImages } from "../data/images";
import { productCategories, products, type ProductCategory } from "../data/products";

type Filter = "All" | ProductCategory;

export default function Products() {
  const [filter, setFilter] = useState<Filter>("All");

  const activeCategories = useMemo(() => {
    const present = new Set(products.map((product) => product.category));
    return productCategories.filter((category) => present.has(category));
  }, []);

  const filters: Filter[] = ["All", ...activeCategories];
  const visible = filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <>
      <Seo
        title="Products"
        description="Browse the plastic products manufactured by Hanif Plast for household, industrial, commercial and custom requirements."
      />
      <PageHeader
        eyebrow="Product Range"
        title="Plastic Products for Real Business Needs"
        description="Explore the products manufactured by Hanif Plast. Each item is produced with attention to material, finish and consistency."
        crumbs={[{ label: "Products" }]}
        image={companyImages.products[0] ?? companyImages.hero}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">
              Showing {visible.length} of {products.length} products
            </p>

            <div className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:flex-wrap sm:px-0">
              {filters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  aria-pressed={filter === item}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-[0.75rem] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    filter === item
                      ? "border-navy-800 bg-navy-800 text-white shadow-soft"
                      : "border-slate-200 bg-white text-slate-500 hover:border-navy-800/30 hover:text-navy-800"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {visible.length > 0 ? (
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {visible.map((product, index) => (
                <Reveal key={product.slug} delay={(index % 3) * 90} className="h-full">
                  <ProductCard product={product} index={index} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="mt-12 rounded-3xl border border-dashed border-slate-300 bg-mist px-6 py-20 text-center">
              <PackageSearch className="mx-auto h-10 w-10 text-slate-300" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-extrabold text-navy-800">
                No products available yet
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                Add product photos to{" "}
                <code className="rounded bg-white px-2 py-0.5 text-navy-700">
                  src/assets/images
                </code>{" "}
                and they will be listed here automatically.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Need a specific plastic product?"
        text="Share your requirement with Hanif Plast and we will confirm availability, quantities and the next steps."
        primaryLabel="Request Information"
        secondaryLabel="View Gallery"
        secondaryTo="/gallery"
      />
    </>
  );
}

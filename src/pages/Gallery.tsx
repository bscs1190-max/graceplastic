import { useMemo } from "react";
import { ImageOff } from "lucide-react";
import CTASection from "../components/CTASection";
import ImageGallery, { type GalleryItem } from "../components/ImageGallery";
import PageHeader from "../components/PageHeader";
import Seo from "../components/Seo";
import {
  ABOUT_PATTERN,
  allImages,
  companyImages,
  isFactoryImage,
  titleFromFileName,
} from "../data/images";

const ASPECTS = ["aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-[5/4]"];

export default function Gallery() {
  const items: GalleryItem[] = useMemo(
    () =>
      allImages.map((image, index) => ({
        src: image.url,
        alt: titleFromFileName(image.file),
        category: isFactoryImage(image)
          ? "Facility & Machinery"
          : ABOUT_PATTERN.test(image.search)
            ? "Company"
            : "Products",
        aspect: ASPECTS[index % ASPECTS.length],
      })),
    []
  );

  const categories = useMemo(
    () => Array.from(new Set(items.map((item) => item.category))),
    [items]
  );

  return (
    <>
      <Seo
        title="Gallery"
        description="Photos of the products, facility and machinery at Hanif Plast."
      />
      <PageHeader
        eyebrow="Gallery"
        title="Inside Hanif Plast"
        description="A look at our products, working environment and the people behind the production."
        crumbs={[{ label: "Gallery" }]}
        image={companyImages.factory[0] ?? companyImages.hero}
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container-x">
          {items.length > 0 ? (
            <ImageGallery items={items} categories={categories} />
          ) : (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-mist px-6 py-24 text-center">
              <ImageOff className="mx-auto h-10 w-10 text-slate-300" aria-hidden="true" />
              <h2 className="mt-5 text-xl font-extrabold text-navy-800">
                Photos are being prepared
              </h2>
              <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
                Add the company photos to{" "}
                <code className="rounded bg-white px-2 py-0.5 text-navy-700">
                  src/assets/images
                </code>{" "}
                and this gallery will fill itself automatically.
              </p>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want to see more or place an order?"
        text="Get in touch with Hanif Plast for additional product photos, details and business inquiries."
        primaryLabel="Contact Us"
        secondaryLabel="View Products"
        secondaryTo="/products"
      />
    </>
  );
}

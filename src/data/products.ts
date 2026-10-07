import { fallbackProducts } from "./dummyData";
import {
  ABOUT_PATTERN,
  allImages,
  companyImages,
  isFactoryImage,
  isHeroImage,
  slugify,
  titleFromFileName,
} from "./images";

export type ProductCategory =
  | "Household"
  | "Industrial"
  | "Commercial"
  | "Custom";

export interface Product {
  slug: string;
  name: string;
  description: string;
  image: string;
  gallery: string[];
  category: ProductCategory;
  fileName: string;
}

export const productCategories: ProductCategory[] = [
  "Household",
  "Industrial",
  "Commercial",
  "Custom",
];

const CATEGORY_COPY: Record<ProductCategory, string> = {
  Household:
    "Practical plastic products for everyday household use, produced with consistent quality and careful finishing.",
  Industrial:
    "Plastic products suited to industrial and business requirements, made for dependable daily use.",
  Commercial:
    "Reliable plastic products prepared for commercial, retail and general business use.",
  Custom:
    "Custom plastic products developed around specific business requirements and application needs.",
};

const HOUSEHOLD_PATTERN =
  /(bucket|kitchen|home|house|chair|stool|table|dining|jar|pot|flower|toy|baby|basket|gallon|jerrycan|water|storage|container|lids?|plate|cup|mug)/i;
const INDUSTRIAL_PATTERN =
  /(industrial|pallet|drum|barrel|pipe|profile|spare|part|component|panel|sheet|crate|bin|reel|coil|preform|crate)/i;
const COMMERCIAL_PATTERN =
  /(commercial|retail|shop|display|sign|printing|packaging|carton|box|bag|roll|label)/i;

/**
 * EDIT PRODUCT INFORMATION HERE
 * ------------------------------------------------------------------
 * Every product below is generated from a photo found in
 * /src/assets/images/. Add or adjust entries to rename a product,
 * rewrite its description, change its category or hide a photo.
 *
 * Key = file name (exact, including extension)
 *
 * Example:
 *   "product-01-bucket.jpg": {
 *     name: "Plastic Bucket",
 *     description: "Strong everyday bucket moulded with consistent wall thickness.",
 *     category: "Household",
 *   },
 *   "old-photo.jpg": { hidden: true },
 */
export const productOverrides: Record<
  string,
  { name?: string; description?: string; category?: ProductCategory; hidden?: boolean }
> = {};

function detectCategory(search: string): ProductCategory {
  if (HOUSEHOLD_PATTERN.test(search)) return "Household";
  if (INDUSTRIAL_PATTERN.test(search)) return "Industrial";
  if (COMMERCIAL_PATTERN.test(search)) return "Commercial";
  return "Custom";
}

function groupKey(file: string): string {
  const base = file.replace(/\.[^.]+$/, "");
  const match = /^(product|item|pr)[-_ ]?(\d{1,3})/i.exec(base);
  if (match) return `${match[1].toLowerCase()}-${match[2]}`;
  return slugify(base);
}

interface ProductGroup {
  files: string[];
}

const groups = new Map<string, ProductGroup>();
const groupOrder: string[] = [];

const candidates = allImages.filter(
  (image) =>
    !isFactoryImage(image) &&
    !isHeroImage(image) &&
    !ABOUT_PATTERN.test(image.search) &&
    !/(logo|banner|icon|map|signature|thumb)/i.test(image.search)
);

for (const image of candidates) {
  const key = groupKey(image.file);
  if (!groups.has(key)) {
    groups.set(key, { files: [] });
    groupOrder.push(key);
  }
  groups.get(key)!.files.push(image.file);
}

function urlFor(file: string): string {
  return allImages.find((image) => image.file === file)?.url ?? "";
}

const seenSlugs = new Map<string, number>();
const builtProducts: (Product & { hidden: boolean })[] = [];

for (const key of groupOrder) {
  const group = groups.get(key)!;
  const files = [...group.files].sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true })
  );
  const cover =
    files.find(
      (file) => groupKey(file) === key && !/-[a-z]$/i.test(file.replace(/\.[^.]+$/, ""))
    ) ?? files[0];
  const override = productOverrides[cover] ?? {};

  const name = override.name ?? titleFromFileName(cover);
  const baseSlug = slugify(name) || "product";
  const used = seenSlugs.get(baseSlug) ?? 0;
  seenSlugs.set(baseSlug, used + 1);
  const slug = used > 0 ? `${baseSlug}-${used + 1}` : baseSlug;

  builtProducts.push({
    slug,
    name,
    description: override.description ?? "",
    image: urlFor(cover),
    gallery: files.map(urlFor).filter(Boolean),
    category: override.category ?? detectCategory(cover.toLowerCase()),
    fileName: cover,
    hidden: override.hidden ?? false,
  });
}

export const products: Product[] =
  builtProducts.length > 0
    ? builtProducts
        .filter((product) => product.image && !product.hidden)
        .map(({ hidden: _hidden, ...product }) => ({
          ...product,
          description: product.description || CATEGORY_COPY[product.category],
        }))
    : fallbackProducts.map((product) => ({
        ...product,
        gallery: [...(product.gallery ?? [product.image])],
      }));

export const featuredProducts: Product[] = products.slice(0, 6);

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function productsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}

export const galleryImages = companyImages.gallery;

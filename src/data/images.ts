/**
 * IMAGE MAPPING
 * ------------------------------------------------------------------
 * Every photo placed inside /src/assets/images is discovered
 * automatically - no manual import is required.
 *
 * Suggested file naming (only a suggestion, any file works):
 *   hero-factory.jpg        -> used for the homepage hero
 *   factory-01.jpg          -> facility / machinery photos
 *   machinery-01.jpg        -> facility / machinery photos
 *   product-01-bucket.jpg   -> product photos
 *   about-01.jpg            -> about section photos
 *
 * You can also override any mapping manually in companyImages below.
 */

import { fallbackCompanyImages } from "./dummyData";

const modules = import.meta.glob("../assets/images/*.{jpg,jpeg,png,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

export interface ImageAsset {
  /** original file name, e.g. "product-01-bucket.jpg" */
  file: string;
  /** base name without extension, e.g. "product-01-bucket" */
  key: string;
  /** resolved url usable in <img src> */
  url: string;
  /** lower case base name for searching */
  search: string;
}

const FACTORY_PATTERN =
  /(factory|machinery|machine|equipment|plant|workshop|warehouse|production|industry|industrial|facility|shed|unit|injection|mould|mold|extrusion|blow[-_ ]?molding|store|godown)/i;
const HERO_PATTERN = /^hero/i;
export const ABOUT_PATTERN = /^(about|team|office|story|intro)/i;
const NON_PRODUCT_PATTERN =
  /(logo|banner|icon|map|signature|certificate|thumb)/i;

const PREFIX_WORDS =
  /^(hero|about|team|office|story|intro|factory|factories|machinery|machine|equipment|product|products|item|photo|gallery|picture|img|image|pic)$/i;

function toKey(fileName: string): string {
  return fileName.replace(/\.[^.]+$/, "");
}

function titleCase(value: string): string {
  return value
    .split(" ")
    .filter((word) => word.trim().length > 0)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const allImages: ImageAsset[] = Object.entries(modules)
  .map(([path, url]) => {
    const file = path.split("/").pop() ?? path;
    const key = toKey(file);
    return { file, key, url, search: key.toLowerCase() };
  })
  .sort((a, b) => a.file.localeCompare(b.file, undefined, { numeric: true }));

export const hasImages = allImages.length > 0;

export function titleFromFileName(file: string): string {
  const tokens = toKey(file)
    .split(/[-_\s]+/)
    .filter(Boolean);

  const kept: string[] = [];
  const numbers: string[] = [];
  let firstPrefix = "";

  for (const [index, token] of tokens.entries()) {
    if (/^\d+$/.test(token)) {
      numbers.push(token);
      continue;
    }
    if (index === 0 && PREFIX_WORDS.test(token)) {
      firstPrefix = token;
      continue;
    }
    kept.push(token);
  }

  const meaningful = kept.filter((word) => word.length > 1);
  const words =
    meaningful.length > 0
      ? meaningful
      : firstPrefix
        ? [firstPrefix, ...numbers.slice(0, 1)]
        : tokens;

  const value = titleCase(words.join(" "));
  return value || titleCase(tokens.join(" ")) || "Plastic Product";
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function isFactoryImage(asset: ImageAsset): boolean {
  // Photos that clearly belong to the product catalogue are never
  // treated as facility shots, even if the name contains a keyword
  // such as "industrial".
  if (/^(product|item|pr)[-_\s]?\d/.test(asset.search)) return false;
  return FACTORY_PATTERN.test(asset.search);
}

export function isHeroImage(asset: ImageAsset): boolean {
  return HERO_PATTERN.test(asset.search);
}

function pick(pattern: RegExp): ImageAsset | undefined {
  return (
    allImages.find((image) => pattern.test(image.search) && !isFactoryImage(image)) ??
    allImages.find((image) => pattern.test(image.search))
  );
}

function firstFactory(): ImageAsset | undefined {
  return allImages.find((image) => isFactoryImage(image));
}

const factoryImages = allImages.filter((image) => isFactoryImage(image));
const aboutImages = allImages.filter((image) => ABOUT_PATTERN.test(image.search));
const productImages = allImages.filter(
  (image) =>
    !isFactoryImage(image) &&
    !isHeroImage(image) &&
    !NON_PRODUCT_PATTERN.test(image.search)
);

export const companyImages = {
  /** Homepage hero background */
  hero:
    pick(/^hero/)?.url ??
    firstFactory()?.url ??
    productImages[0]?.url ??
    allImages[0]?.url ??
    fallbackCompanyImages.hero,
  /** About page / about section */
  about:
    aboutImages[0]?.url ??
    firstFactory()?.url ??
    productImages[1]?.url ??
    allImages[0]?.url ??
    fallbackCompanyImages.about,
  /** Manufacturing / capabilities sections */
  factory: factoryImages.length > 0 ? factoryImages.map((image) => image.url) : fallbackCompanyImages.gallery.slice(0, 2),
  /** Product photography */
  products: productImages.length > 0 ? productImages.map((image) => image.url) : fallbackCompanyImages.gallery.slice(0, 4),
  /** Every photo, used by the gallery */
  gallery: allImages.length > 0 ? allImages.map((image) => image.url) : fallbackCompanyImages.gallery,
};

/**
 * MANUAL OVERRIDES (optional)
 * ------------------------------------------------------------------
 * Force a specific file into a specific slot, e.g.
 * export const imageOverrides = {
 *   hero: "hero-main.jpg",
 *   about: "about-team.jpg",
 * };
 */
export const imageOverrides: { hero?: string; about?: string } = {};

function resolveOverride(name: "hero" | "about"): string {
  const fileName = imageOverrides[name];
  if (!fileName) return "";
  const match = allImages.find(
    (image) => image.file.toLowerCase() === fileName.toLowerCase()
  );
  return match?.url ?? "";
}

const heroOverride = resolveOverride("hero");
const aboutOverride = resolveOverride("about");

if (heroOverride) companyImages.hero = heroOverride;
if (aboutOverride) companyImages.about = aboutOverride;

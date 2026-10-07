export const fallbackGallery = [
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1602872029705-8e0b6b6f18cf?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1200&q=80",
];

export const fallbackCompanyImages = {
  hero:
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=1600&q=80",
  about:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
  gallery: fallbackGallery,
};

export const fallbackProducts = [
  {
    slug: "plastic-bucket",
    name: "Plastic Bucket",
    description:
      "Durable household bucket for storage, cleaning and daily use in homes, shops and service spaces.",
    image: fallbackGallery[0],
    gallery: [fallbackGallery[0], fallbackGallery[1], fallbackGallery[2]],
    category: "Household",
    fileName: "dummy-bucket.jpg",
  },
  {
    slug: "industrial-crate",
    name: "Industrial Crate",
    description:
      "Heavy-duty storage crate designed for transport, stock management and repeated industrial handling.",
    image: fallbackGallery[3],
    gallery: [fallbackGallery[3], fallbackGallery[4], fallbackGallery[5]],
    category: "Industrial",
    fileName: "dummy-crate.jpg",
  },
  {
    slug: "display-container",
    name: "Display Container",
    description:
      "Practical commercial display container created for merchandising, organized product presentation and retail needs.",
    image: fallbackGallery[6],
    gallery: [fallbackGallery[6], fallbackGallery[5], fallbackGallery[4]],
    category: "Commercial",
    fileName: "dummy-display.jpg",
  },
  {
    slug: "custom-moulded-part",
    name: "Custom Moulded Part",
    description:
      "A sample custom plastic component tailored for specialized business applications and product requirements.",
    image: fallbackGallery[7],
    gallery: [fallbackGallery[7], fallbackGallery[2], fallbackGallery[1]],
    category: "Custom",
    fileName: "dummy-custom.jpg",
  },
] as const;

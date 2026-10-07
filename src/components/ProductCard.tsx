import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import SafeImage from "./SafeImage";
import type { Product } from "../data/products";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-navy-800/15 hover:shadow-lift"
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <SafeImage
          src={product.image}
          alt={product.name}
          className="h-full w-full"
          imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.07]"
        />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-navy-950/75 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-navy-800 shadow-soft">
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-slate-400">
          <span className="h-px w-6 bg-accent-500" />
          {String(index + 1).padStart(2, "0")}
        </div>
        <h3 className="mt-3 text-lg font-extrabold leading-snug text-navy-800 transition-colors duration-300 group-hover:text-steel-600">
          {product.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
          {product.description}
        </p>
        <span className="mt-6 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.16em] text-navy-800">
          View Details
          <ArrowRight className="h-4 w-4 text-accent-500 transition-transform duration-300 group-hover:translate-x-1.5" />
        </span>
      </div>
    </Link>
  );
}

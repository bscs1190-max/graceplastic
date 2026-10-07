import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export interface Crumb {
  label: string;
  path?: string;
}

export default function Breadcrumbs({
  items,
  light = false,
}: {
  items: Crumb[];
  light?: boolean;
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-[0.72rem] font-semibold uppercase tracking-[0.18em]">
        <li className="flex items-center gap-2">
          <Link
            to="/"
            className={`inline-flex items-center gap-1.5 transition-colors ${
              light ? "text-white/60 hover:text-accent-400" : "text-slate-400 hover:text-accent-600"
            }`}
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item, index) => {
          const last = index === items.length - 1;
          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              <ChevronRight
                className={`h-3.5 w-3.5 ${light ? "text-white/30" : "text-slate-300"}`}
                aria-hidden="true"
              />
              {item.path && !last ? (
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    light ? "text-white/60 hover:text-accent-400" : "text-slate-400 hover:text-accent-600"
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={light ? "text-accent-400" : "text-accent-600"}>
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

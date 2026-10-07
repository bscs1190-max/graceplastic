import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "react-router-dom";

type Variant = "primary" | "accent" | "outline" | "light" | "ghostLight";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-navy-800 text-white hover:bg-navy-700 shadow-[0_16px_35px_-18px_rgba(11,31,58,0.9)]",
  accent:
    "bg-accent-500 text-white hover:bg-accent-600 shadow-[0_16px_35px_-18px_rgba(21,141,80,0.9)]",
  outline:
    "border border-navy-800/25 text-navy-800 hover:border-navy-800 hover:bg-navy-800 hover:text-white",
  light: "bg-white text-navy-800 hover:bg-steel-50 shadow-soft",
  ghostLight:
    "border border-white/35 text-white hover:bg-white hover:text-navy-800 hover:border-white",
};

const sizes: Record<Size, string> = {
  sm: "px-5 py-2.5 text-[0.8rem]",
  md: "px-7 py-3.5 text-sm",
  lg: "px-8 py-4 text-[0.95rem]",
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-semibold uppercase tracking-[0.12em] transition-all duration-300 ease-out will-change-transform hover:-translate-y-0.5 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60";

interface ButtonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  to?: string;
  href?: string;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  disabled?: boolean;
  onClick?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  target?: string;
  rel?: string;
  "aria-label"?: string;
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  to,
  href,
  type = "button",
  disabled,
  onClick,
  target,
  rel,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes} aria-label={ariaLabel}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}

export type { ButtonProps, Variant, Size };

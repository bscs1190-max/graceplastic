import {
  BadgeCheck,
  Handshake,
  Layers3,
  PackageCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Target,
  ThumbsUp,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  path: string;
}

export const navItems: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Capabilities", path: "/capabilities" },
  { label: "Gallery", path: "/gallery" },
  { label: "Contact", path: "/contact" },
];

/**
 * TRUST / STATS STRIP
 * ------------------------------------------------------------------
 * Deliberately written without numbers - only replace the copy with
 * verified company figures if they are provided later.
 */
export interface StatItem {
  icon: LucideIcon;
  label: string;
  title: string;
  text: string;
}

export const stats: StatItem[] = [
  {
    icon: ShieldCheck,
    label: "01",
    title: "Quality First",
    text: "Careful manufacturing with quality-focused processes at every stage.",
  },
  {
    icon: Settings2,
    label: "02",
    title: "Reliable Production",
    text: "Consistent output planned around your schedule and requirements.",
  },
  {
    icon: Handshake,
    label: "03",
    title: "Customer Focused",
    text: "Clear communication and service built around long-term business relationships.",
  },
  {
    icon: PackageCheck,
    label: "04",
    title: "Consistent Results",
    text: "Steady standards from raw material handling through to finished goods.",
  },
];

export interface Capability {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const capabilities: Capability[] = [
  {
    icon: BadgeCheck,
    title: "Quality Manufacturing",
    text: "Products are made with close attention to material handling, finish and overall build quality.",
  },
  {
    icon: Layers3,
    title: "Consistent Production",
    text: "Repeatable production standards help keep every batch aligned with your expectations.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    text: "Requirements that differ from standard items can be discussed and prepared around your use case.",
  },
  {
    icon: Handshake,
    title: "Reliable Service",
    text: "Straightforward communication, dependable follow-through and support after the order is placed.",
  },
];

export interface WhyPoint {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const whyChooseUs: WhyPoint[] = [
  {
    icon: Target,
    title: "Quality Focus",
    text: "Every order is handled with attention to material, finish and consistency so the products you receive meet your standards.",
  },
  {
    icon: Settings2,
    title: "Reliable Production",
    text: "Planned production and organised workflows keep your orders moving on schedule, batch after batch.",
  },
  {
    icon: ThumbsUp,
    title: "Customer-Centered Service",
    text: "We listen first, respond clearly and stay available through sampling, ordering and delivery discussions.",
  },
  {
    icon: Sparkles,
    title: "Practical Solutions",
    text: "Straightforward, cost-aware recommendations that solve the actual requirement instead of overcomplicating it.",
  },
];

export interface ApproachItem {
  title: string;
  text: string;
}

export const approach: ApproachItem[] = [
  {
    title: "Understand the requirement",
    text: "We start by understanding the application, quantity and expectations behind each inquiry.",
  },
  {
    title: "Produce with care",
    text: "Materials and production stages are managed carefully to keep the finished product consistent.",
  },
  {
    title: "Check before dispatch",
    text: "Finished goods are reviewed for appearance and quality before being prepared for dispatch.",
  },
  {
    title: "Support the relationship",
    text: "Communication continues after the order so future requirements stay simple to manage.",
  },
];

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description?: string;
}

function setMeta(selector: string, attr: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export default function Seo({ title, description }: SeoProps) {
  const { pathname } = useLocation();
  const fullTitle = title.includes("Hanif Plast") ? title : `${title} | Hanif Plast`;
  const desc =
    description ??
    "Hanif Plast provides quality plastic products with a focus on reliable manufacturing, consistent quality and customer satisfaction.";

  useEffect(() => {
    document.title = fullTitle;
    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
    setMeta('meta[property="og:url"]', "property", "og:url", `https://example.com${pathname}`);
    setMeta('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description", desc);
  }, [fullTitle, desc, pathname]);

  return null;
}

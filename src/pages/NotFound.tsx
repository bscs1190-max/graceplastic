import { ArrowLeft, Home } from "lucide-react";
import Button from "../components/Button";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center overflow-hidden bg-navy-950 pt-32">
      <Seo title="Page Not Found" description="The page you requested could not be found." />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800" />
      <div className="pointer-events-none absolute -left-20 bottom-0 -z-10 h-72 w-72 rounded-full bg-steel-600/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-10 -z-10 h-64 w-64 rounded-full bg-accent-500/15 blur-3xl" />

      <div className="container-x text-center">
        <span className="eyebrow justify-center text-accent-400">
          <span className="h-px w-8 bg-accent-400/60" />
          Error 404
        </span>
        <p className="mt-6 text-[5rem] font-extrabold leading-none text-white/10 sm:text-[8rem]">
          404
        </p>
        <h1 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
          Page not found
        </h1>
        <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-steel-100/70 sm:text-base">
          The page you are looking for may have been moved or does not exist. Head back to
          the homepage to continue browsing Hanif Plast.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <Button to="/" variant="accent" size="lg">
            <Home className="h-4 w-4" />
            Back to Home
          </Button>
          <Button to="/products" variant="ghostLight" size="lg">
            <ArrowLeft className="h-4 w-4" />
            View Products
          </Button>
        </div>
      </div>
    </section>
  );
}

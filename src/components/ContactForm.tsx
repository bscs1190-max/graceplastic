import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2, Send, AlertTriangle } from "lucide-react";
import { company } from "../config/company";

type Status = "idle" | "loading" | "success" | "error";

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const initialValues: FormValues = { name: "", email: "", phone: "", message: "" };

const inputClasses =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 text-sm text-navy-800 placeholder:text-slate-400 transition-all duration-200 focus:border-navy-800 focus:outline-none focus:ring-4 focus:ring-steel-100";

export default function ContactForm() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});
  const [status, setStatus] = useState<Status>("idle");

  const update = (field: keyof FormValues, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = () => {
    const next: Partial<Record<keyof FormValues, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (values.phone.trim().length > 0 && values.phone.trim().length < 6)
      next.phone = "Please enter a valid phone number.";
    if (values.message.trim().length < 10)
      next.message = "Please add a short message (at least 10 characters).";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");

    try {
      if (company.formEndpoint) {
        const response = await fetch(company.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!response.ok) throw new Error("Request failed");
      } else {
        await new Promise((resolve) => setTimeout(resolve, 700));
      }
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-steel-100 bg-white p-10 text-center shadow-card animate-scaleIn">
        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-steel-50 text-steel-600">
          <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-xl font-extrabold text-navy-800">Inquiry received</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-slate-500">
          Thank you for reaching out to {company.name}. Your message has been recorded and
          the team will get back to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 rounded-full border border-navy-800/20 px-6 py-3 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-navy-800 transition-all hover:bg-navy-800 hover:text-white"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-card sm:p-9"
    >
      <div className="flex items-center gap-3">
        <span className="h-px w-8 bg-accent-500" />
        <span className="eyebrow text-accent-600">Inquiry Form</span>
      </div>
      <h3 className="mt-4 text-2xl font-extrabold text-navy-800">Send us a message</h3>
      <p className="mt-2 text-sm text-slate-500">
        Fill in the details below and we will respond as soon as possible.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-navy-800">
            Name <span className="text-accent-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            value={values.name}
            onChange={(event) => update("name", event.target.value)}
            aria-invalid={Boolean(errors.name)}
            className={`${inputClasses} ${errors.name ? "border-accent-500 focus:ring-accent-100" : ""}`}
          />
          {errors.name && <p className="mt-2 text-xs font-medium text-accent-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-navy-800">
            Email <span className="text-accent-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(event) => update("email", event.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={`${inputClasses} ${errors.email ? "border-accent-500 focus:ring-accent-100" : ""}`}
          />
          {errors.email && <p className="mt-2 text-xs font-medium text-accent-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-navy-800">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your contact number"
            value={values.phone}
            onChange={(event) => update("phone", event.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={`${inputClasses} ${errors.phone ? "border-accent-500 focus:ring-accent-100" : ""}`}
          />
          {errors.phone && <p className="mt-2 text-xs font-medium text-accent-600">{errors.phone}</p>}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="mb-2 block text-[0.72rem] font-bold uppercase tracking-[0.16em] text-navy-800">
            Message <span className="text-accent-500">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your product requirement..."
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            className={`${inputClasses} resize-none ${errors.message ? "border-accent-500 focus:ring-accent-100" : ""}`}
          />
          {errors.message && (
            <p className="mt-2 text-xs font-medium text-accent-600">{errors.message}</p>
          )}
        </div>
      </div>

      {status === "error" && (
        <div className="mt-5 flex items-start gap-2 rounded-xl border border-accent-400/40 bg-accent-500/5 px-4 py-3 text-sm text-accent-700">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          Something went wrong while sending your message. Please try again.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-navy-800 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_-20px_rgba(11,31,58,0.95)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-500 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
            Sending
          </>
        ) : (
          <>
            <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            Send Inquiry
          </>
        )}
      </button>
    </form>
  );
}

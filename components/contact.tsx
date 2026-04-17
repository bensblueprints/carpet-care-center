"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone, CheckCircle2, AlertCircle, Send } from "lucide-react";
import { BUSINESS } from "@/lib/utils";
import { SERVICES } from "@/components/services";

type Status = "idle" | "sending" | "success" | "error";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setError(null);
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.error || "Submission failed");
      }
      setStatus("success");
      form.reset();
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong");
    }
  };

  return (
    <section id="contact" className="section bg-cream" aria-label="Contact and free estimate">
      <div className="container mx-auto grid lg:grid-cols-12 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="eyebrow">Book Your Clean</span>
          <h2 className="mt-3 font-display font-light text-4xl md:text-5xl text-ink">
            Get a free, no-pressure <em className="text-brand not-italic">estimate</em>.
          </h2>
          <p className="mt-5 text-ink-muted leading-relaxed">
            Tell us what you need and when works. We'll reach out within one business
            day with a firm quote.
          </p>

          <ul className="mt-8 space-y-5">
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/8 text-brand">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Phone</div>
                <a href={BUSINESS.phoneHref} className="block mt-0.5 text-lg font-semibold text-ink hover:text-brand transition-colors">
                  {BUSINESS.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/8 text-brand">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Location</div>
                <div className="mt-0.5 text-ink">
                  {BUSINESS.address}<br />
                  {BUSINESS.city}, {BUSINESS.state} {BUSINESS.zip}
                </div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/8 text-brand">
                <Clock className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Hours</div>
                <div className="mt-0.5 text-ink">{BUSINESS.hours}</div>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand/8 text-brand">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-ink-muted">Email</div>
                <div className="mt-0.5 text-ink">{BUSINESS.email}</div>
              </div>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <form
            onSubmit={onSubmit}
            className="relative rounded-card bg-white border border-black/5 shadow-warm p-6 md:p-8"
          >
            <div aria-hidden className="absolute -inset-px rounded-card pointer-events-none opacity-0 focus-within:opacity-100 transition-opacity bg-gradient-to-br from-brass/40 via-brand/30 to-transparent [mask:linear-gradient(white,transparent)]" />

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="name">
                  Full Name
                </label>
                <input id="name" name="name" required className="input-field mt-1.5" placeholder="Jane Homeowner" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="phone">
                  Phone
                </label>
                <input id="phone" name="phone" type="tel" required className="input-field mt-1.5" placeholder="(949) 555-0100" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="email">
                  Email
                </label>
                <input id="email" name="email" type="email" required className="input-field mt-1.5" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="service">
                  Service Needed
                </label>
                <select id="service" name="service" required className="input-field mt-1.5" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.title}>{s.title}</option>
                  ))}
                  <option value="Multiple / Not sure">Multiple / Not sure</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="date">
                  Preferred Date
                </label>
                <input id="date" name="date" type="date" className="input-field mt-1.5" />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted" htmlFor="message">
                  Tell us about the job
                </label>
                <textarea id="message" name="message" rows={4} className="input-field mt-1.5 resize-none" placeholder="Room count, stains, pet situations, access notes..." />
              </div>
              <div className="hidden" aria-hidden>
                <label>Do not fill</label>
                <input type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-ink-muted">
                By submitting you agree to be contacted about your estimate. No spam, ever.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "Sending..." : "Request Free Estimate"}
                <Send className="h-4 w-4" />
              </button>
            </div>

            {status === "success" && (
              <div className="mt-5 flex items-start gap-3 rounded-lg bg-success/10 border border-success/30 p-4 text-sm text-success">
                <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Thanks — we got it.</strong> We'll be in touch within one business day.
                </div>
              </div>
            )}
            {status === "error" && (
              <div className="mt-5 flex items-start gap-3 rounded-lg bg-brand/5 border border-brand/30 p-4 text-sm text-brand">
                <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Something went wrong.</strong> {error || "Please try again, or call us at " + BUSINESS.phone + "."}
                </div>
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}

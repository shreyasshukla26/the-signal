
"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/analytics";
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  Loader2,
} from "lucide-react";

const initialForm = {
  name: "",
  email: "",
  topic: "Business Collaboration",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Submission failed");
      }

      setSuccess(true);
      void trackEvent("contact_submit");
      setForm(initialForm);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong."
      );
    } finally {
      setLoading(false);
    }
  }

  const inputStyle =
    "w-full rounded-xl border border-white/10 bg-[#131518] px-4 py-4 text-[#f4f1eb] outline-none transition focus:border-[#ff914d] placeholder:text-zinc-600";

  return (
    <section
      id="contact"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-12"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid gap-16 lg:grid-cols-2"
      >
        {/* LEFT SECTION */}

        <div>
          <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#ff914d]">
            04 / Start a conversation
          </p>

          <h2 className="text-5xl font-semibold tracking-tight md:text-7xl">
            Good things
            <br />
            begin with
            <br />
            <span className="text-[#ff914d]">
              clarity.
            </span>
          </h2>

          <p className="mt-8 max-w-md leading-relaxed text-zinc-400">
            Building something meaningful? Navigating
            complexity? Or simply exploring what comes
            next? Let's start with a conversation.
          </p>

          <a
            href="https://www.linkedin.com/in/soniaspecialist/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full border border-white/20 px-6 py-3 transition hover:border-[#ff914d] hover:text-[#ff914d]"
            onClick={() => {
  void trackEvent("linkedin_click");
}}
          >
            Connect on LinkedIn
            <ArrowUpRight size={18} />
          </a>
        </div>

        {/* RIGHT SECTION */}

        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-3xl border border-white/10 bg-[#101114] p-6 md:p-10"
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm text-zinc-400"
            >
              Your name
            </label>

            <input
              id="contact-name"
              type="text"
              placeholder="Enter your name"
              className={inputStyle}
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              required
              minLength={2}
              maxLength={100}
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm text-zinc-400"
            >
              Email address
            </label>

            <input
              id="contact-email"
              type="email"
              placeholder="you@example.com"
              className={inputStyle}
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              required
              maxLength={255}
            />
          </div>

          <div>
            <label
              htmlFor="contact-topic"
              className="mb-2 block text-sm text-zinc-400"
            >
              What brings you here?
            </label>

            <select
              id="contact-topic"
              className={inputStyle}
              value={form.topic}
              onChange={(e) =>
                setForm({ ...form, topic: e.target.value })
              }
            >
              <option>Business Collaboration</option>
              <option>Marketing Consultation</option>
              <option>Professional Networking</option>
              <option>Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm text-zinc-400"
            >
              Your message
            </label>

            <textarea
              id="contact-message"
              rows={5}
              placeholder="Tell me what you're thinking..."
              className={`${inputStyle} resize-none`}
              value={form.message}
              onChange={(e) =>
                setForm({
                  ...form,
                  message: e.target.value,
                })
              }
              required
              minLength={10}
              maxLength={2000}
            />
          </div>

          <p className="text-xs text-zinc-500">
            Your details will be stored to respond to
            your enquiry.
          </p>

          <button
            type="submit"
            disabled={loading}
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#ff914d] px-6 py-4 font-semibold text-black transition hover:bg-[#ffa66b] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? (
              <>
                <Loader2 size={20} className="animate-spin" />
                Sending...
              </>
            ) : (
              <>
                Send your signal
                <Send size={18} />
              </>
            )}
          </button>

          {success && (
            <div
              role="status"
              className="flex items-center gap-3 rounded-xl border border-green-500/20 bg-green-500/10 p-4 text-sm text-green-400"
            >
              <CheckCircle2 size={20} />
              Your message has been received successfully.
            </div>
          )}

          {error && (
            <div
              role="alert"
              className="rounded-xl border border-red-500/20 bg-red-500/10 p-4 text-sm text-red-400"
            >
              {error}
            </div>
          )}
        </form>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT_ICONS, SOCIALS } from "@/data/site";
import { useLanguage } from "@/i18n/LanguageProvider";
import { CheckIcon, SendIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

type FormValues = { name: string; email: string; website: string; message: string };
type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = { name: "", email: "", website: "", message: "" };

function buildValidator(errorsText: {
  nameRequired: string;
  nameMin: string;
  emailRequired: string;
  emailInvalid: string;
  websiteInvalid: string;
  messageRequired: string;
  messageMin: string;
}) {
  return (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.name.trim()) {
      errors.name = errorsText.nameRequired;
    } else if (values.name.trim().length < 2) {
      errors.name = errorsText.nameMin;
    }

    if (!values.email.trim()) {
      errors.email = errorsText.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) {
      errors.email = errorsText.emailInvalid;
    }

    if (values.website.trim() && !/^https?:\/\/[^\s.]+\.[^\s]{2,}/.test(values.website.trim())) {
      errors.website = errorsText.websiteInvalid;
    }

    if (!values.message.trim()) {
      errors.message = errorsText.messageRequired;
    } else if (values.message.trim().length < 10) {
      errors.message = errorsText.messageMin;
    }
    return errors;
  };
}

const inputBase =
  "w-full rounded-lg border bg-white px-4 py-3 text-sm text-ink outline-none transition-all duration-200 placeholder:text-neutral-400 dark:bg-white/5 dark:placeholder:text-neutral-500";
const inputNormal = "border-ink/20 focus:border-ink focus:ring-2 focus:ring-ink/10 dark:border-white/20 dark:focus:border-white";
const inputError = "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/15";

function FieldError({ message }: { message?: string }) {
  return (
    <AnimatePresence>
      {message && (
        <motion.p
          initial={{ opacity: 0, y: -6, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          exit={{ opacity: 0, y: -6, height: 0 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="overflow-hidden pt-1.5 text-xs font-medium text-red-600"
          role="alert"
        >
          {message}
        </motion.p>
      )}
    </AnimatePresence>
  );
}

export default function Contact() {
  const { t } = useLanguage();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const validate = buildValidator(t.contact.form.errors);

  const setField = (field: keyof FormValues) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const next = { ...values, [field]: e.target.value };
    setValues(next);
    // live re-validation once the field has an error
    if (errors[field]) {
      setErrors(validate(next));
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus("sending");
    // Simulated send — bu yerga o'zingizning backend/email API'ni ulashing
    window.setTimeout(() => {
      setStatus("success");
      setValues(initialValues);
    }, 1200);
  };

  const form = t.contact.form;

  return (
    <section id="contact" className="bg-ink-soft py-20 text-white md:py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-10">
        {/* ---------- Left: heading + contact info ---------- */}
        <div>
          <Reveal>
            <SectionHeading
              dark
              eyebrow={t.contact.eyebrow}
              title={
                <>
                  {t.contact.title.pre} {t.contact.title.emoji} {t.contact.title.mid}{" "}
                  <span className="text-outline-light">{t.contact.title.outline}</span>{" "}
                  {t.contact.title.post}
                </>
              }
              description={t.contact.description}
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="mt-10 flex flex-col gap-4">
              {t.contact.info.map((info) => {
                const Icon = CONTACT_ICONS[info.key];
                return (
                  <a key={info.key} href={info.href} className="group flex items-center gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-white/15 text-white/80 transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
                        {info.label}
                      </span>
                      <span className="mt-0.5 block font-medium text-white/90 transition-colors duration-300 group-hover:text-white">
                        {info.value}
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-10 flex items-center gap-3">
              <span className="h-px w-10 bg-white/25" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/40">
                {t.contact.socialsLabel}
              </span>
            </div>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-11 w-11 items-center justify-center border border-white/15 text-white/70 transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-ink"
                >
                  <social.icon className="h-4.5 w-4.5" />
                </a>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ---------- Right: white form card ---------- */}
        <Reveal delay={0.15}>                <div className="rounded-2xl bg-paper p-6 text-ink shadow-[0_30px_80px_rgba(0,0,0,0.35)] dark:border dark:border-white/10 md:p-9">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex min-h-[420px] flex-col items-center justify-center gap-5 text-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-ink text-paper"
                  >
                    <CheckIcon className="h-7 w-7" />
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-bold">{form.successTitle}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">{form.successText}</p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-2 rounded-full border border-ink px-6 py-2.5 text-sm font-semibold transition-all duration-300 hover:bg-ink hover:text-paper"
                  >
                    {form.sendAnother}
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={onSubmit}
                  noValidate
                  className="flex flex-col gap-5"
                >
                  <h3 className="text-2xl font-bold tracking-tight">{form.title}</h3>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {form.name}
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder={form.namePlaceholder}
                        value={values.name}
                        onChange={setField("name")}
                        aria-invalid={!!errors.name}
                        className={`${inputBase} ${errors.name ? inputError : inputNormal}`}
                      />
                      <FieldError message={errors.name} />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                        {form.email}
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder={form.emailPlaceholder}
                        value={values.email}
                        onChange={setField("email")}
                        aria-invalid={!!errors.email}
                        className={`${inputBase} ${errors.email ? inputError : inputNormal}`}
                      />
                      <FieldError message={errors.email} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-website" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {form.website}{" "}
                      <span className="normal-case tracking-normal text-neutral-400 dark:text-neutral-500">{form.websiteOptional}</span>
                    </label>
                    <input
                      id="contact-website"
                      type="url"
                      placeholder={form.websitePlaceholder}
                      value={values.website}
                      onChange={setField("website")}
                      aria-invalid={!!errors.website}
                      className={`${inputBase} ${errors.website ? inputError : inputNormal}`}
                    />
                    <FieldError message={errors.website} />
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                      {form.message}
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      placeholder={form.messagePlaceholder}
                      value={values.message}
                      onChange={setField("message")}
                      aria-invalid={!!errors.message}
                      className={`${inputBase} resize-none ${errors.message ? inputError : inputNormal}`}
                    />
                    <FieldError message={errors.message} />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={status === "idle" ? { y: -2 } : undefined}
                    whileTap={status === "idle" ? { scale: 0.98 } : undefined}
                    className="mt-1 inline-flex items-center justify-center gap-2.5 rounded-full bg-ink px-8 py-4 text-sm font-bold uppercase tracking-wider text-paper transition-all duration-300 hover:shadow-[0_14px_32px_rgba(10,10,10,0.35)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {status === "sending" ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-paper/30 border-t-paper" aria-hidden="true" />
                        {form.sending}
                      </>
                    ) : (
                      <>
                        <SendIcon className="h-4 w-4" />
                        {form.submit}
                      </>
                    )}
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState, type FormEvent, type ReactNode } from "react";
import { SERVICES } from "../../data/clinicData";
import Button from "../ui/Button";
import Icon from "../ui/Icon";
import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";

interface FormState {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message: string;
}

const EMPTY_FORM: FormState = {
  fullName: "",
  phone: "",
  email: "",
  service: "",
  date: "",
  time: "",
  message: "",
};

type Errors = Partial<Record<keyof FormState, string>>;

export default function AppointmentSection() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function validate(): boolean {
    const next: Errors = {};
    if (!form.fullName.trim()) next.fullName = "Please enter your full name.";
    if (!form.phone.trim()) next.phone = "Please enter a phone number.";
    if (!form.service) next.service = "Please select a service.";
    if (!form.date) next.date = "Please choose a preferred date.";
    if (!form.time) next.time = "Please choose a preferred time.";
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) {
      next.email = "Please enter a valid email address.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");

    // ---------------------------------------------------------------------
    // DEMO ONLY: mock submission using local state + a simulated delay.
    // To connect a real backend:
    //   1. Replace this block with a fetch()/axios call to your booking API,
    //      e.g. POST /api/appointments with `form` as the JSON body.
    //   2. Handle the real response instead of the setTimeout below.
    //   3. Consider adding request-level error handling (see catch below).
    // ---------------------------------------------------------------------
    setTimeout(() => {
      setStatus("success");
      setForm(EMPTY_FORM);
    }, 900);
  }

  if (status === "success") {
    return (
      <section id="appointment" className="mx-auto max-w-3xl px-5 sm:px-8 py-24 sm:py-32 text-center">
        <Reveal className="bg-jade-100 rounded-2xl2 p-12">
          <span className="mx-auto w-14 h-14 rounded-full bg-jade text-white flex items-center justify-center mb-5">
            <Icon name="check" className="w-6 h-6" />
          </span>
          <h2 className="font-display text-2xl sm:text-3xl text-ink mb-3">
            Appointment request received
          </h2>
          <p className="text-ink-500 max-w-md mx-auto leading-relaxed">
            Thank you. Our clinic team will contact you shortly to confirm your
            appointment availability.
          </p>
          <Button className="mt-7" variant="secondary" onClick={() => setStatus("idle")}>
            Request another appointment
          </Button>
        </Reveal>
      </section>
    );
  }

  return (
    <section id="appointment" className="mx-auto max-w-5xl px-5 sm:px-8 py-24 sm:py-32">
      <SectionHeading
        align="center"
        kicker="Book a visit"
        title="Your smile starts here"
        description="Share a few details and our team will confirm your visit. For urgent needs, WhatsApp us directly."
      />

      <Reveal delay={100}>
        <form
          onSubmit={handleSubmit}
          noValidate
          className="mt-12 bg-surface rounded-2xl2 shadow-soft p-6 sm:p-10 grid sm:grid-cols-2 gap-6"
        >
          <Field label="Full Name" error={errors.fullName}>
            <input
              type="text"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Jane Doe"
              className={inputClass(!!errors.fullName)}
              aria-invalid={!!errors.fullName}
            />
          </Field>

          <Field label="Phone Number" error={errors.phone}>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update("phone", e.target.value)}
              placeholder="+1 (555) 000-0000"
              className={inputClass(!!errors.phone)}
              aria-invalid={!!errors.phone}
            />
          </Field>

          <Field label="Email (optional)" error={errors.email}>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update("email", e.target.value)}
              placeholder="jane@example.com"
              className={inputClass(!!errors.email)}
              aria-invalid={!!errors.email}
            />
          </Field>

          <Field label="Service" error={errors.service}>
            <select
              value={form.service}
              onChange={(e) => update("service", e.target.value)}
              className={inputClass(!!errors.service)}
              aria-invalid={!!errors.service}
            >
              <option value="">Select a service</option>
              {SERVICES.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
          </Field>

          <Field label="Preferred Date" error={errors.date}>
            <input
              type="date"
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={inputClass(!!errors.date)}
              aria-invalid={!!errors.date}
            />
          </Field>

          <Field label="Preferred Time" error={errors.time}>
            <input
              type="time"
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className={inputClass(!!errors.time)}
              aria-invalid={!!errors.time}
            />
          </Field>

          <Field label="Message (optional)" full>
            <textarea
              value={form.message}
              onChange={(e) => update("message", e.target.value)}
              rows={4}
              placeholder="Tell us anything that will help your visit go smoothly."
              className={inputClass(false)}
            />
          </Field>

          <div className="sm:col-span-2 flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button type="submit" variant="secondary" disabled={status === "submitting"} className="w-full sm:w-auto">
              {status === "submitting" ? "Sending…" : "Request Appointment"}
            </Button>
            <p className="text-xs text-ink-500 text-center sm:text-left">
              This form uses demo/local state only — no data is sent anywhere yet.
            </p>
          </div>
        </form>
      </Reveal>
    </section>
  );
}

function inputClass(hasError: boolean) {
  return `w-full rounded-xl border bg-cream/60 px-4 py-3 text-sm text-ink placeholder:text-ink-500/50 focus:bg-surface focus:border-jade transition-colors ${
    hasError ? "border-red-400" : "border-line"
  }`;
}

function Field({
  label,
  error,
  full,
  children,
}: {
  label: string;
  error?: string;
  full?: boolean;
  children: ReactNode;
}) {
  return (
    <label className={`flex flex-col gap-2 text-sm font-medium text-ink ${full ? "sm:col-span-2" : ""}`}>
      {label}
      {children}
      {error && <span className="text-xs font-normal text-red-500">{error}</span>}
    </label>
  );
}

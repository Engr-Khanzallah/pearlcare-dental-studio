// ---------------------------------------------------------------------------
// Shared types. Keep content types here so data files and components agree.
// ---------------------------------------------------------------------------

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string; // key into the <ServiceIcon /> icon map
}

export interface Benefit {
  title: string;
  description: string;
  icon: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  service: string;
}

export interface SmileCase {
  treatment: string;
  note: string;
}

export interface ClinicInfo {
  name: string;
  tagline: string;
  phoneDisplay: string;
  whatsappNumber: string; // digits only, international format, no "+"
  email: string;
  addressLine1: string;
  addressLine2: string;
  hours: { days: string; time: string }[];
  mapEmbedUrl: string;
}

export interface Dentist {
  name: string;
  title: string;
  bio: string;
  expertise: string[];
}

// ----------------------------- AI Assistant -------------------------------

export type ChatLanguage = "en" | "ur" | "roman";

export type ChatRole = "user" | "assistant";

export interface ChatMessage {
  id: string;
  role: ChatRole;
  text: string;
  lang?: ChatLanguage;
}

export type BookingStep =
  | "idle"
  | "askName"
  | "askPhone"
  | "askService"
  | "askDate"
  | "askTime"
  | "done";

export interface BookingDraft {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
}

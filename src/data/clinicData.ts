import type {
  Benefit,
  ClinicInfo,
  Dentist,
  FaqItem,
  NavLink,
  Service,
  SmileCase,
  Testimonial,
} from "../types";

// ---------------------------------------------------------------------------
// EDIT THIS FILE to re-brand the demo for a real clinic.
// Every section on the site reads from here — there is no content hardcoded
// deeper in the component tree except illustrative copy inside the AI
// assistant's rule engine (src/components/ai-assistant/chatEngine.ts), which
// also imports CLINIC and SERVICES from this file.
// ---------------------------------------------------------------------------

export const CLINIC: ClinicInfo = {
  name: "PearlCare Dental Studio",
  tagline: "Modern Dentistry. Confident Smiles.",
  phoneDisplay: "+1 (555) 010-2837", // TODO: replace with real clinic phone
  whatsappNumber: "15550102837", // TODO: replace with real WhatsApp number, digits only
  email: "hello@pearlcare-demo.com", // TODO: replace with real email
  addressLine1: "221 Maple Grove Avenue, Suite 4B",
  addressLine2: "Willowbrook, ST 00000", // fictional placeholder address
  hours: [
    { days: "Monday – Saturday", time: "10:00 AM – 8:00 PM" },
    { days: "Sunday", time: "Closed" },
  ],
  // TODO: replace with a real Google Maps embed src for the clinic's address
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1",
};

// Fictional demo team — for portfolio/demo purposes only, not real clinicians.
export const DENTISTS: (Dentist & { id: string })[] = [
  {
    id: "sarah-khan",
    name: "Dr. Sarah Khan",
    title: "Consultant Dentist",
    bio: "Leads treatment planning with a calm, patient-first approach and a focus on clear communication at every step.",
    expertise: ["General dentistry", "Cosmetic dentistry", "Smile design"],
  },
  {
    id: "ahmed-malik",
    name: "Dr. Ahmed Malik",
    title: "Restorative Dentist",
    bio: "Specializes in restoring damaged or worn teeth with durable, natural-looking results.",
    expertise: ["Root canal treatment", "Dental crowns", "Restorative care"],
  },
  {
    id: "ayesha-noor",
    name: "Dr. Ayesha Noor",
    title: "Orthodontist",
    bio: "Designs personalized alignment plans for patients of every age, from first consultation to final reveal.",
    expertise: ["Braces", "Clear aligners", "Bite correction"],
  },
  {
    id: "hamza-ali",
    name: "Dr. Hamza Ali",
    title: "Implant Specialist",
    bio: "Focuses on long-lasting, natural-feeling implant solutions for missing or damaged teeth.",
    expertise: ["Dental implants", "Oral surgery", "Full-mouth restoration"],
  },
];

// Fictional demo profile — for portfolio/demo purposes only.
export const DENTIST_DISCLAIMER =
  "Dr. Sarah Khan and the PearlCare team shown here are fictional profiles created for this demo and do not represent real people.";

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Technology", href: "#technology" },
  { label: "Dentists", href: "#dentists" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const SERVICES: Service[] = [
  {
    id: "general-dentistry",
    name: "General Dentistry",
    description: "Routine checkups and preventive care to keep your smile healthy year-round.",
    icon: "tooth",
  },
  {
    id: "teeth-cleaning",
    name: "Teeth Cleaning",
    description: "Gentle professional cleaning that removes plaque and keeps your gums healthy.",
    icon: "sparkle",
  },
  {
    id: "teeth-whitening",
    name: "Teeth Whitening",
    description: "Safe, effective whitening treatments for a brighter, more confident smile.",
    icon: "sun",
  },
  {
    id: "root-canal",
    name: "Root Canal Treatment",
    description: "Comfortable, precise root canal care to relieve pain and save your natural tooth.",
    icon: "shield",
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    description: "Long-lasting, natural-looking implants to fully restore missing teeth.",
    icon: "anchor",
  },
  {
    id: "braces-orthodontics",
    name: "Braces & Orthodontics",
    description: "Personalized orthodontic plans to gradually straighten and align your smile.",
    icon: "align",
  },
  {
    id: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    description: "Veneers, bonding and smile makeovers designed around your goals.",
    icon: "star",
  },
  {
    id: "pediatric-dentistry",
    name: "Pediatric Dentistry",
    description: "Friendly, patient care that helps children feel comfortable at every visit.",
    icon: "heart",
  },
];

export const BENEFITS: Benefit[] = [
  {
    title: "Advanced Dental Care",
    description: "Evidence-based treatment planning backed by modern clinical standards.",
    icon: "shield",
  },
  {
    title: "Experienced Specialists",
    description: "A team spanning general, restorative, orthodontic and implant care.",
    icon: "cpu",
  },
  {
    title: "Comfortable Patient Experience",
    description: "A calm, unhurried environment designed to ease dental anxiety.",
    icon: "feather",
  },
  {
    title: "Personalized Treatment Plans",
    description: "Care plans built around your individual needs and goals.",
    icon: "clipboard",
  },
  {
    title: "Modern Technology",
    description: "Digital tools that make diagnosis more precise and visits more efficient.",
    icon: "calendar",
  },
];

export const JOURNEY_STEPS = [
  { number: "01", title: "Book a Visit", description: "Reserve a time online, by phone, or on WhatsApp in a few taps." },
  { number: "02", title: "Meet Your Dentist", description: "A relaxed first conversation about your smile and any concerns." },
  { number: "03", title: "Personalized Plan", description: "A treatment plan built around your goals, timeline and comfort." },
  { number: "04", title: "Confident Smile", description: "Ongoing care and follow-up to keep your results healthy long-term." },
];

export const TECH_FEATURES = [
  { title: "Digital Scanning", description: "Precise digital impressions replace messy trays for a faster, more comfortable visit.", icon: "cpu" as const },
  { title: "Modern Imaging", description: "Clear diagnostic imaging helps catch concerns early and plan treatment accurately.", icon: "sparkle" as const },
  { title: "Advanced Treatment Tools", description: "Contemporary equipment supports precise, efficient procedures.", icon: "shield" as const },
  { title: "Comfort-Focused Technology", description: "Small details — from seating to sterilization — designed around patient comfort.", icon: "heart" as const },
];

export const SMILE_CASES: SmileCase[] = [
  { treatment: "Teeth Whitening", note: "Sample demonstration of a whitening treatment outcome." },
  { treatment: "Cosmetic Bonding", note: "Sample demonstration of a smile-shaping treatment." },
  { treatment: "Orthodontic Alignment", note: "Sample demonstration of an alignment treatment." },
];

// Clearly fictional demo testimonials — for portfolio/demo purposes only.
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "A. Malik",
    role: "Demo Patient",
    quote:
      "The team explained every step clearly and made the whole visit feel relaxed. It's the most comfortable I've felt at a dental clinic.",
    service: "Teeth Cleaning",
  },
  {
    name: "R. Fernandez",
    role: "Demo Patient",
    quote:
      "I appreciated how personalized my treatment plan felt. Booking on WhatsApp was quick and the staff were friendly from the start.",
    service: "Cosmetic Dentistry",
  },
  {
    name: "S. Ahmed",
    role: "Demo Patient",
    quote:
      "My kids actually look forward to their checkups now. Patient, kind, and great with children.",
    service: "Pediatric Dentistry",
  },
];

export const FAQS: FaqItem[] = [
  {
    question: "What services do you provide?",
    answer:
      "We provide general dentistry, teeth cleaning, teeth whitening, root canal treatment, dental implants, braces & orthodontics, cosmetic dentistry, and pediatric dentistry.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "You can book using the appointment form on this page, message us on WhatsApp, or chat with our AI assistant, which can collect your details for you.",
  },
  {
    question: "Do you accept emergency dental visits?",
    answer:
      "Yes, we set aside time for urgent dental concerns. Please call or message us on WhatsApp as soon as possible so we can prioritize your visit.",
  },
  {
    question: "How often should I visit a dentist?",
    answer:
      "Most patients benefit from a checkup and cleaning every six months, though your dentist may recommend a different schedule based on your needs.",
  },
  {
    question: "Do you provide braces?",
    answer:
      "Yes, we offer braces and orthodontic treatment plans tailored to your smile goals and timeline.",
  },
  {
    question: "Do you offer teeth whitening?",
    answer:
      "Yes, we offer safe, professionally supervised teeth whitening treatments.",
  },
  {
    question: "Where is the clinic located?",
    answer:
      "We're located at 221 Maple Grove Avenue, Suite 4B, Willowbrook. See the map in our Contact section for directions.",
  },
];

export const WHATSAPP_DEFAULT_MESSAGE =
  "Hello, I would like to book a dental appointment.";

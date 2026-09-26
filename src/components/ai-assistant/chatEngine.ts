import { CLINIC, DENTISTS, SERVICES } from "../../data/clinicData";
import type { BookingDraft, BookingStep, ChatLanguage } from "../../types";

// ---------------------------------------------------------------------------
// DEMO CHAT ENGINE
// ---------------------------------------------------------------------------
// This is a lightweight, rule-based simulation of an AI assistant so the demo
// works fully offline with no API key. It detects language (English / Urdu
// script / Roman Urdu), matches a small set of intents, and can walk a
// visitor through a simple appointment-booking flow.
//
// TO CONNECT A REAL AI MODEL LATER:
//   Replace the body of `getAssistantReply()` with a call to your own backend
//   endpoint (never call a model API with a secret key directly from the
//   browser), e.g.:
//
//     const res = await fetch("/api/assistant", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ message: text, history, bookingDraft }),
//     });
//     const data = await res.json();
//     return { text: data.reply, lang: data.lang };
//
//   Your backend can then call the Claude API (or any LLM) server-side,
//   passing this same clinic data as system context, and keep the medical-
//   safety instructions (no diagnosis, recommend an in-person dentist) in
//   its system prompt.
// ---------------------------------------------------------------------------

const URDU_SCRIPT_REGEX = /[\u0600-\u06FF]/;

// A compact set of common Roman Urdu function words/markers. This is a
// heuristic for a demo, not a full language model — good enough to route
// casual "clinic kab open hoti hai?" style messages to Roman Urdu replies.
const ROMAN_URDU_MARKERS = [
  "kab", "kaise", "kasy", "kese", "kyun", "kyu", "kia", "kya", "hai", "hain",
  "ho", "hoti", "hota", "hote", "mujhe", "mera", "meri", "mera", "aap",
  "apka", "apki", "sakta", "sakti", "sakte", "chahiye", "chahye", "kar",
  "karo", "karna", "milta", "milti", "mil", "sakta hoon", "hoon", "bata",
  "batayen", "please bata", "acha", "theek", "shukriya", "mehrbani",
  "clinic", "waqt", "raabta", "number", "fees", "qeemat", "dant", "daant",
  "dard", "sujan", "bachon", "bachay",
];

export function detectLanguage(input: string): ChatLanguage {
  if (URDU_SCRIPT_REGEX.test(input)) return "ur";

  const lower = input.toLowerCase();
  const hasRomanMarker = ROMAN_URDU_MARKERS.some((marker) =>
    new RegExp(`\\b${marker}\\b`).test(lower)
  );
  if (hasRomanMarker) return "roman";

  return "en";
}

type Intent =
  | "greeting"
  | "services"
  | "hours"
  | "location"
  | "booking"
  | "braces"
  | "whitening"
  | "price"
  | "emergency"
  | "medical_symptom"
  | "thanks"
  | "fallback";

const INTENT_KEYWORDS: Record<Exclude<Intent, "fallback">, string[]> = {
  greeting: ["hello", "hi ", "hey", "salam", "assalam", "سلام", "ہیلو"],
  services: [
    "service", "services", "treatment", "khidmat", "علاج", "خدمات",
    "offer", "what do you do",
  ],
  hours: [
    "hour", "hours", "open", "close", "timing", "time do you", "khulti",
    "khulta", "band", "کھلتی", "کھلتا", "وقت",
  ],
  location: [
    "location", "address", "where are you", "kahan", "kahaan", "پتہ",
    "کہاں", "map",
  ],
  booking: [
    "appointment", "book", "booking", "schedule", "reserve", "apointment",
    "apointmnt", "milna", "waqt lena", "اپائنٹمنٹ", "بک",
  ],
  braces: ["brace", "braces", "orthodontic", "teeth straighten", "دانتوں کی سیدھ"],
  whitening: ["whitening", "white teeth", "safed", "چمکانا", "سفید"],
  price: ["price", "cost", "fee", "fees", "qeemat", "kitna", "قیمت", "فیس"],
  emergency: ["emergency", "urgent", "pain now", "ابھی", "ایمرجنسی", "فوری"],
  medical_symptom: [
    "pain", "hurt", "ache", "dard", "درد", "swelling", "sujan", "سوجن",
    "cavity", "keeda", "keerha", "کیڑا", "infection", "bleeding", "khoon",
    "خون", "broken tooth", "toota", "ٹوٹا",
  ],
  thanks: ["thank", "shukriya", "شکریہ", "thanx", "thnx"],
};

function matchIntent(lower: string): Intent {
  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS) as [
    Exclude<Intent, "fallback">,
    string[]
  ][]) {
    if (keywords.some((k) => lower.includes(k))) return intent;
  }
  return "fallback";
}

const serviceListEn = SERVICES.map((s) => s.name).join(", ");
const serviceListRoman = SERVICES.map((s) => s.name).join(", ");

interface ReplyBank {
  greeting: Record<ChatLanguage, string>;
  services: Record<ChatLanguage, string>;
  hours: Record<ChatLanguage, string>;
  location: Record<ChatLanguage, string>;
  braces: Record<ChatLanguage, string>;
  whitening: Record<ChatLanguage, string>;
  price: Record<ChatLanguage, string>;
  emergency: Record<ChatLanguage, string>;
  medicalSymptom: Record<ChatLanguage, string>;
  thanks: Record<ChatLanguage, string>;
  fallback: Record<ChatLanguage, string>;
  bookingIntro: Record<ChatLanguage, string>;
  askName: Record<ChatLanguage, string>;
  askPhone: Record<ChatLanguage, string>;
  askService: Record<ChatLanguage, string>;
  askDate: Record<ChatLanguage, string>;
  askTime: Record<ChatLanguage, string>;
  bookingDone: Record<ChatLanguage, string>;
}

const R: ReplyBank = {
  greeting: {
    en: `Hi there! 👋 How can I help — services, hours, location, or booking an appointment?`,
    ur: `السلام علیکم! 👋 میں آپ کی کس طرح مدد کر سکتا ہوں — خدمات، اوقاتِ کار، پتہ، یا اپائنٹمنٹ بک کرنا؟`,
    roman: `Assalam-o-Alaikum! 👋 Main aap ki kis tarah madad kar sakta hoon — services, timing, location, ya appointment booking?`,
  },
  services: {
    en: `We offer ${serviceListEn}. Would you like to book a consultation for any of these?`,
    ur: `ہم یہ خدمات فراہم کرتے ہیں: جنرل ڈینٹسٹری، دانتوں کی صفائی، وائٹننگ، روٹ کینال، ڈینٹل امپلانٹس، بریسز، کاسمیٹک ڈینٹسٹری اور بچوں کی ڈینٹسٹری۔ کیا آپ ان میں سے کسی کے لیے اپائنٹمنٹ لینا چاہیں گے؟`,
    roman: `Hum ${serviceListRoman} offer karte hain. Kya aap in mein se kisi ke liye appointment book karna chahenge?`,
  },
  hours: {
    en: `We're open ${CLINIC.hours[0].days}, ${CLINIC.hours[0].time}. We're closed on ${CLINIC.hours[1].days}.`,
    ur: `کلینک پیر سے ہفتہ، صبح 10 بجے سے شام 8 بجے تک کھلا رہتا ہے۔ اتوار کو بند ہوتا ہے۔`,
    roman: `Clinic Monday se Saturday, subah 10 baje se shaam 8 baje tak open hoti hai. Sunday ko band hoti hai.`,
  },
  location: {
    en: `We're located at ${CLINIC.addressLine1}, ${CLINIC.addressLine2}. You'll find a map in the Contact section below.`,
    ur: `ہمارا کلینک ${CLINIC.addressLine1}، ${CLINIC.addressLine2} پر واقع ہے۔ نقشہ نیچے کانٹیکٹ سیکشن میں موجود ہے۔`,
    roman: `Hamara clinic ${CLINIC.addressLine1}, ${CLINIC.addressLine2} par hai. Map neeche Contact section mein mil jayega.`,
  },
  braces: {
    en: `Yes, we offer braces and orthodontic treatment with a plan tailored to your smile goals. Want to book a consultation?`,
    ur: `جی ہاں، ہم بریسز اور آرتھوڈانٹک علاج فراہم کرتے ہیں، جو آپ کی ضرورت کے مطابق ترتیب دیا جاتا ہے۔ کیا آپ کنسلٹیشن بک کروانا چاہیں گے؟`,
    roman: `Ji haan, hum braces aur orthodontic treatment offer karte hain, jo aapki zaroorat ke mutabiq banaya jata hai. Kya aap consultation book karwana chahenge?`,
  },
  whitening: {
    en: `Yes, we offer safe, professionally supervised teeth whitening. Would you like to book a session?`,
    ur: `جی، ہم محفوظ اور ماہرانہ نگرانی میں ٹیتھ وائٹننگ فراہم کرتے ہیں۔ کیا آپ اپائنٹمنٹ لینا چاہیں گے؟`,
    roman: `Ji, hum safe aur professionally supervised teeth whitening offer karte hain. Kya aap appointment lena chahenge?`,
  },
  price: {
    en: `Treatment costs vary based on your specific needs, so our team shares exact pricing after a short consultation. Would you like to book one?`,
    ur: `علاج کی قیمت آپ کی ضرورت کے مطابق مختلف ہو سکتی ہے، اس لیے مکمل تفصیل کنسلٹیشن کے بعد بتائی جاتی ہے۔ کیا آپ کنسلٹیشن بک کروانا چاہیں گے؟`,
    roman: `Treatment ki cost aap ki zaroorat ke mutabiq alag ho sakti hai, isliye exact pricing consultation ke baad batai jati hai. Kya aap consultation book karwana chahenge?`,
  },
  emergency: {
    en: `We do our best to prioritize urgent dental concerns. Please call us at ${CLINIC.phoneDisplay} or message us on WhatsApp right away.`,
    ur: `ہم فوری دانتوں کے مسائل کو ترجیح دینے کی پوری کوشش کرتے ہیں۔ براہِ کرم فوراً ${CLINIC.phoneDisplay} پر کال کریں یا واٹس ایپ پر پیغام بھیجیں۔`,
    roman: `Hum urgent dental issues ko priority dene ki koshish karte hain. Please turant ${CLINIC.phoneDisplay} par call karein ya WhatsApp par message karein.`,
  },
  medicalSymptom: {
    en: `I can share general information, but I can't diagnose your condition. A qualified dentist should examine you to determine the right treatment — would you like help booking a visit?`,
    ur: `میں عمومی معلومات فراہم کر سکتا ہوں، لیکن آپ کی حالت کی تشخیص نہیں کر سکتا۔ درست علاج کے تعین کے لیے ایک ماہر دندان ساز کا معائنہ ضروری ہے۔ کیا میں آپ کے لیے اپائنٹمنٹ بک کروانے میں مدد کروں؟`,
    roman: `Main general information de sakta hoon, lekin aap ki condition ka diagnosis nahi kar sakta. Sahi treatment ke liye ek qualified dentist ka checkup zaroori hai. Kya main appointment book karne mein madad karoon?`,
  },
  thanks: {
    en: `You're welcome! Anything else I can help with?`,
    ur: `خوش آمدید! کیا میں کسی اور چیز میں مدد کر سکتا ہوں؟`,
    roman: `Khushamdeed! Kya aur kisi cheez mein madad kar sakta hoon?`,
  },
  fallback: {
    en: `I can help with services, hours, location, or booking an appointment. Could you tell me a bit more about what you need?`,
    ur: `میں خدمات، اوقاتِ کار، پتہ یا اپائنٹمنٹ بکنگ میں مدد کر سکتا ہوں۔ براہِ کرم بتائیں کہ آپ کو کس چیز میں مدد چاہیے؟`,
    roman: `Main services, timing, location ya appointment booking mein madad kar sakta hoon. Please bataein aapko kis cheez mein madad chahiye?`,
  },
  bookingIntro: {
    en: `Great, let's get your appointment request started. What's your full name?`,
    ur: `بہت خوب، آئیے آپ کی اپائنٹمنٹ کی درخواست شروع کرتے ہیں۔ آپ کا مکمل نام کیا ہے؟`,
    roman: `Theek hai, chaliye aapki appointment request shuru karte hain. Aapka pura naam kya hai?`,
  },
  askName: {
    en: `Could you share your full name?`,
    ur: `براہِ کرم اپنا مکمل نام بتائیں۔`,
    roman: `Please apna pura naam bataein.`,
  },
  askPhone: {
    en: `Thanks! What's the best phone number to reach you?`,
    ur: `شکریہ! رابطے کے لیے بہترین فون نمبر بتائیں۔`,
    roman: `Shukriya! Rabta karne ke liye behtareen phone number bataein.`,
  },
  askService: {
    en: `Which service would you like to book? (e.g. teeth cleaning, whitening, braces)`,
    ur: `آپ کون سی سروس بک کروانا چاہیں گے؟ (مثلاً صفائی، وائٹننگ، بریسز)`,
    roman: `Aap kaunsi service book karwana chahenge? (masalan cleaning, whitening, braces)`,
  },
  askDate: {
    en: `What date works best for you?`,
    ur: `آپ کے لیے کون سی تاریخ مناسب رہے گی؟`,
    roman: `Aapke liye kaunsi date theek rahegi?`,
  },
  askTime: {
    en: `And what time would you prefer?`,
    ur: `اور کون سا وقت آپ کو مناسب لگے گا؟`,
    roman: `Aur kaunsa waqt aapko theek lagega?`,
  },
  bookingDone: {
    en: `Thanks! Your appointment request has been received. The clinic team will contact you to confirm availability.`,
    ur: `شکریہ! آپ کی اپائنٹمنٹ کی درخواست موصول ہو گئی ہے۔ کلینک ٹیم آپ سے دستیابی کی تصدیق کے لیے رابطہ کرے گی۔`,
    roman: `Shukriya! Aap ki appointment request receive ho gayi hai. Clinic team availability confirm karne ke liye aapse rabta karegi.`,
  },
};

export interface AssistantReply {
  text: string;
  lang: ChatLanguage;
  bookingStep: BookingStep;
  bookingDraft: BookingDraft;
}

/**
 * Advances the rule-based conversation. Pure function: given the incoming
 * message and current booking state, returns the assistant's reply plus the
 * next booking step/draft, so the calling component just needs to hold state.
 */
export function getAssistantReply(
  rawText: string,
  currentStep: BookingStep,
  draft: BookingDraft
): AssistantReply {
  const lang = detectLanguage(rawText);
  const text = rawText.trim();
  const lower = text.toLowerCase();

  // --- Continue an in-progress booking flow -------------------------------
  if (currentStep !== "idle" && currentStep !== "done") {
    const nextDraft = { ...draft };
    let nextStep: BookingStep = currentStep;
    let reply = "";

    switch (currentStep) {
      case "askName":
        nextDraft.name = text;
        nextStep = "askPhone";
        reply = R.askPhone[lang];
        break;
      case "askPhone":
        nextDraft.phone = text;
        nextStep = "askService";
        reply = R.askService[lang];
        break;
      case "askService":
        nextDraft.service = text;
        nextStep = "askDate";
        reply = R.askDate[lang];
        break;
      case "askDate":
        nextDraft.date = text;
        nextStep = "askTime";
        reply = R.askTime[lang];
        break;
      case "askTime":
        nextDraft.time = text;
        nextStep = "done";
        reply = R.bookingDone[lang];
        break;
      default:
        reply = R.fallback[lang];
    }

    return { text: reply, lang, bookingStep: nextStep, bookingDraft: nextDraft };
  }

  // --- Fresh message: detect intent ---------------------------------------
  const intent = matchIntent(lower);

  if (intent === "booking") {
    return {
      text: R.bookingIntro[lang],
      lang,
      bookingStep: "askName",
      bookingDraft: {},
    };
  }

  const replyMap: Record<Exclude<Intent, "booking" | "fallback">, Record<ChatLanguage, string>> = {
    greeting: R.greeting,
    services: R.services,
    hours: R.hours,
    location: R.location,
    braces: R.braces,
    whitening: R.whitening,
    price: R.price,
    emergency: R.emergency,
    medical_symptom: R.medicalSymptom,
    thanks: R.thanks,
  };

  const reply = intent === "fallback" ? R.fallback[lang] : replyMap[intent][lang];

  return { text: reply, lang, bookingStep: "idle", bookingDraft: draft };
}

export const WELCOME_MESSAGE =
  "Hi! 👋 I'm PearlCare's virtual dental assistant. I can help you learn about our services, clinic hours, location, and appointment process.";

export const SUGGESTED_QUESTIONS = [
  "Services ke bare mein batao",
  "How can I book an appointment?",
  "کل appointment مل سکتی ہے؟",
  "Where is the clinic?",
  "Do you offer braces?",
];

export const ASSISTANT_NAME = "PearlCare AI";
export const DENTIST_NAME_FOR_ASSISTANT = DENTISTS[0].name;

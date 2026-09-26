// ---------------------------------------------------------------------------
// Placeholder photography for this demo — all sourced from Unsplash and
// free to use under the Unsplash License (no attribution required, commercial
// use permitted): https://unsplash.com/license
//
// Swap these for a real clinic's own photography when handing this off.
// `img()` just appends Unsplash's on-the-fly resize/format query params.
// ---------------------------------------------------------------------------

export const STOCK = {
  // Close-up smile/teeth — Sarah Wolfe, unsplash.com/photos/QAuXTVNmsTQ
  smileCloseUp: "https://images.unsplash.com/photo-1549564810-df2a9f868d1c",
  // Dental tools/implant model — Jonathan Borba, unsplash.com/photos/W9YEY6G8LVM
  dentalTools: "https://images.unsplash.com/photo-1593022356769-11f762e25ed9",
  // Dental clinic waiting area — Benyamin Bohlouli, unsplash.com/photos/B_sK_xgzwVA
  clinicInterior: "https://images.unsplash.com/photo-1629909614456-6b1c5c94cecc",
  // Dentist examining a patient — Erfan Amiri, unsplash.com/photos/c5W7w6cFV88
  dentistPatient: "https://images.unsplash.com/photo-1662543701887-91f8f042a338",
};

export function img(base: string, width: number, quality = 75): string {
  return `${base}?auto=format&fit=crop&w=${width}&q=${quality}`;
}

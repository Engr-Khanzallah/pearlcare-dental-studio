import type { ReactNode } from "react";

/** Italic serif emphasis, e.g. Healthy Smiles Begin With <Accent>Exceptional</Accent> Care. */
export default function Accent({ children }: { children: ReactNode }) {
  return <em className="font-display italic text-jade">{children}</em>;
}

export interface Product {
  tabLabel: string;
  name: string;
  category: string;
  status: string;
  statusLive: boolean;
  description: string;
  scope: string;
  contributions: string[];
}

export interface ExperienceEntry {
  docId: string;
  role: string;
  company: string;
  period: string;
  duration: string;
  tags: string[];
  highlights: string[];
  products?: Product[];
}

// Paste isi array `experiences` yang sudah ada di ExperienceSection.tsx lama
// ke sini apa adanya (baris 30–383 di file lama kamu).
export const experiences: ExperienceEntry[] = [
  // ...DOC.01, DOC.02, DOC.03, DOC.04 (copy dari file lama)
];

export function getExperienceByDocId(docId: string): ExperienceEntry | undefined {
  return experiences.find((e) => e.docId.toLowerCase() === docId.toLowerCase());
}

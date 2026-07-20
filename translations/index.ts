import { de } from "./de";
import { fr } from "./fr";

export const translations = { de, fr } as const;

export type Locale = keyof typeof translations;
export type { AppTranslations } from "./de";

export const defaultLocale: Locale = "de";

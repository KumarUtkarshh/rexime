import {
  EB_Garamond,
  Geist,
  IBM_Plex_Mono,
  Inter,
  Lato,
  Merriweather,
  Montserrat,
  Open_Sans,
  Playfair_Display,
  PT_Serif,
  Raleway,
  Roboto,
  Source_Sans_3,
} from "next/font/google";

export const ibmplexmono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// --- Added more weights (like '700' for bold) to your existing fonts ---
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
});
export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

export const serif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-serif",
});

// --- Here are the new popular fonts for resumes ---

/**
 * A very popular, clean, and friendly sans-serif. Excellent for body text.
 */
export const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-lato",
  display: "swap",
});

/**
 * A modern, geometric sans-serif. Great for headings and a stylish, clean look.
 */
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

/**
 * A highly readable serif font designed for screens. Great for a more traditional feel.
 */
export const merriweather = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-merriweather",
  display: "swap",
});

/**
 * A humanist sans-serif. Extremely readable and neutral, a workhorse font.
 */
export const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-open-sans",
  display: "swap",
});

/**
 * An elegant and stylish sans-serif, often used for headings and names.
 */
export const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-raleway",
  display: "swap",
});

/**
 * A classic, elegant serif based on the original Garamond. Gives a very professional, academic, and timeless feel.
 */
export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-eb-garamond",
  display: "swap",
});

/**
 * The modern successor to Source Sans Pro. A very clear and balanced sans-serif.
 */
export const sourceSans3 = Source_Sans_3({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-source-sans-3",
  display: "swap",
});

import { Playfair_Display_SC } from "next/font/google";
import { Inter } from "next/font/google";
export const inter = Inter({ subsets: ["latin"] });
export const playfair = Playfair_Display_SC({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});
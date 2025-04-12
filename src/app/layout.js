import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  metadataBase: new URL('https://restauran-landing.vercel.app'),
  title: "Pizzaria Bella Massa - A melhor pizza de Guarulhos",
  description:
    "Descubra os sabores autênticos da Pizzaria Bella Massa. Ingredientes frescos, tradição italiana e o melhor atendimento de Guarulhos.",
  keywords: [
    "pizza artesanal",
    "pizzaria guarulhos",
    "comida italiana",
    "restaurante em guarulhos",
  ],
  authors: [{ name: "Pizzaria Bella Massa" }],
  creator: "kliuvert figueroa",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "40x40", type: "image/png" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: { url: "/favicon.png", type: "image/png" },
  },
  openGraph: {
    title: "Pizzaria Bella Massa - A melhor pizza de Guarulhos",
    description: "Ingredientes frescos, tradição italiana e o melhor atendimento.",
    url: "/opengraph-pizza.png",
    siteName: "Pizzaria Bella Massa",
    images: [
      {
        url: "/opengraph-pizza.png",
        width: 1200,
        height: 630,
        alt: "Logo da Pizzaria Bella Massa",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  x: {
    card: "summary_large_image",
    title: "Pizzaria Bella Massa - A melhor pizza de Guarulhos",
    description: "Ingredientes frescos, tradição italiana e o melhor atendimento.",
    images: ["/opengraph-pizza.png"],
  },
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

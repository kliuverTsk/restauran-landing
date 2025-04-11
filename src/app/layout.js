import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata = {
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
    url: "https://restaurant-landing.vercel.app", // Actualiza con la URL que te dé Vercel
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { playfair } from "../../ui/fonts";
import { inter } from "../../ui/fonts";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-start overflow-hidden" id="/">
      <div className="absolute inset-0">
        <Image
          src="/espagueti.webp" // Convierte tu SVG a WebP
          alt="Fondo de espagueti"
          fill
          priority
          className="object-cover object-right md:object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />


      <div className="relative z-10 px-6 md:px-16 py-20 max-w-2xl text-white space-y-6">
        <motion.h1
          className={`text-4xl md:text-5xl font-bold leading-tight ${playfair.className}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          Bela massa
        </motion.h1>

        <motion.p
          className={`text-lg ${inter.className}`}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Desfrute da nossa deliciosa comida brasileira em um ambiente aconchegante.
        </motion.p>
      </div>
    </section>
  );
}

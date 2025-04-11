"use client";
import Image from "next/image";
import { FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { playfair } from "../../ui/fonts";
import { inter } from "../../ui/fonts";

export default function PratosPopulares() {
  return (
    <section
      className={`w-full bg-black py-20 px-6 md:px-16 text-white ${inter.className}`}
      id="popular-platos"
    >
      {/* Título con animación */}
      <motion.h2
        className={`text-3xl md:text-4xl font-bold mb-12 text-center ${playfair.className}`}
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Pratos Populares
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {[
          {
            img: "/sin fondo/espagueti-sinFondo.png",
            title: "espagueti na italiana",
            stars: "★ ★ ★ ★ ☆",
            price: "$ 8.75",
          },
          {
            img: "/sin fondo/espagueti-na-italiana.png",
            title: "espagueti vegano",
            stars: "★ ★ ★ ★ ☆",
            price: "$ 9.20",
          },
          {
            img: "/sin fondo/pizza.png",
            title: "Pizza de pepperoni",
            stars: "★ ★ ★ ★ ★",
            price: "$ 11.00",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#121212] rounded-2xl overflow-hidden p-6 flex flex-col items-center shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={item.img}
              alt={item.title}
              width={200}
              height={160}
              className="rounded-full object-cover"
            />
            <h3 className={`mt-4 text-xl font-semibold ${inter.className}`}>
              {item.title}
            </h3>
            <div className="flex mt-2 text-yellow-400 text-sm">{item.stars}</div>
            <p className="mt-1 text-white/80">{item.price}</p>
          </motion.div>
        ))}
      </div>

      {/* Botones con animación */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <a
          href="#localizacion"
          rel="noopener noreferrer"
          className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
        >
          <FaMapMarkerAlt className="text-lg" />
          Onde ficamos?
        </a>

        <a
          href="https://wa.me/5511949749057"
          target="_blank"
          className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-full flex items-center gap-2 font-semibold"
        >
          <FaWhatsapp className="text-lg" />
          Fale conosco
        </a>
      </motion.div>

      {/* Texto resumen con animación */}
      <motion.p
        className="text-center text-white/70 max-w-xl mx-auto text-sm mt-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        viewport={{ once: true }}
      >
        Veja o cardápio completo e faça seu pedido por WhatsApp. Também atendemos delivery!
      </motion.p>
    </section>
  );
}

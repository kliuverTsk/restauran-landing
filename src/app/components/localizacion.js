import { playfair } from "../../ui/fonts";
import { inter } from "../../ui/fonts";
export default function Localizacao() {
    return (
      <section className="bg-black text-white py-20 px-4 md:px-12 space-y-8 text-center">
        <h2 className={`text-3xl md:text-5xl font-bold ${playfair.className}`} id="localizacion">Onde Estamos</h2>
        <p className={`text-lg md:text-xl max-w-2xl mx-auto text-[#bbbbbb] ${inter.className}`}>
          Estamos localizados no coração de Guarulhos. Venha nos visitar ou faça seu pedido agora mesmo!
        </p>
  
        {/* Mapa embebido */}
        <div className="w-full h-[300px] md:h-[450px] rounded-2xl overflow-hidden" >
        <iframe
            src="https://www.google.com/maps?q=Shopping+Internacional+de+Guarulhos,+SP&hl=pt-BR&z=16&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
        </div>
  
        <a
          href="https://wa.me/5511949749057"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-green-600 hover:bg-green-700 text-white text-lg font-semibold px-8 py-4 rounded-full transition"
        >
          Pedir pelo WhatsApp
        </a>
      </section>
    );
  }
  
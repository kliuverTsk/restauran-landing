import { playfair, inter } from "../../ui/fonts";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-4 md:px-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Nombre y dirección */}
        <div className="text-center md:text-left">
          <h3 className={`text-lg font-semibold ${playfair.className}`}>Restaurante Brasileiro</h3>
          <p className={`text-sm text-[#bbbbbb] ${inter.className}`}>
            Shopping Internacional de Guarulhos, SP
          </p>
        </div>

        {/* Navegación */}
        <div className="flex flex-col items-center gap-3 md:flex-row md:gap-6">
          <a href="#/" className={`text-sm hover:underline ${inter.className}`}>Início</a>
          <a href="#popular-platos" className={`text-sm hover:underline ${inter.className}`}>Pratos Populares</a>
        </div>

        {/* WhatsApp y direitos */}
        <div className="text-center md:text-right space-y-2">
          <a
            href="https://wa.me/5511949749057"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-xl inline-block"
            id="contacto"
          >
            Pedir por WhatsApp
          </a>
          <p className={`text-xs text-[#666] ${inter.className}`}>
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

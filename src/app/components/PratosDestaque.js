import { playfair, inter } from "@/ui/fonts";

export default function PratosDestaque() {
  const pratos = [
    {
      nome: "espagueti na italiana",
      descricao: "Massa al dente com molho de tomate fresco e manjericão.",
      imagem: "/sin fondo/espagueti-sinFondo.png",
      lado: "esquerda"
    },
    {
      nome: "espagueti vegano",
      descricao: "Espaguete de trigo integral com tomate cozido e molho pesto vegano.",
      imagem: "/sin fondo/espagueti-na-italiana.png",
      lado: "direita"
    },
    {
      nome: "Pizza de pepperoni",
      descricao: "Massa fina e crocante com molho artesanal, queijo derretido e fatias generosas de pepperoni.",
      imagem: "/sin fondo/pizza.png",
      lado: "esquerda"
    }
  ];

  return (
    <section className="hidden md:block bg-black text-white py-14 space-y-11 px-4 md:px-8">
      {pratos.map((prato, index) => {
        const isEsquerda = prato.lado === "esquerda";

        return (
          <div
            key={index}
            className={`flex ${!isEsquerda ? "flex-row-reverse" : ""} items-center gap-8`}
          >
            {/* Imagen */}
            <div className="w-1/2">
              <img
                src={prato.imagem}
                alt={prato.nome}
                className="rounded-2xl w-full h-[600px] object-cover mx-auto"
              />
            </div>

            {/* Texto */}
            <div className="w-1/2 text-left space-y-5">
              <h2 className={`text-5xl font-bold ${playfair.className}`}>
                {prato.nome}
              </h2>
              <p className={`text-xl ${inter.className}`}>
                {prato.descricao}
              </p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

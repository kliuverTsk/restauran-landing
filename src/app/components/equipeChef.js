import Image from "next/image";
import { playfair } from "../../ui/fonts";
import { inter } from "../../ui/fonts";

export default function EquipeChef() {
  const equipe = [
    {
      nome: "Chef Antônio Ramos",
      funcao: "Chef Executivo",
      imagem: "/sin fondo/equipe/antonio.png",
      frase: "Sou responsável por coordenar toda a cozinha e garantir que cada prato sirva como uma verdadeira experiência gastronômica.",
    },
    {
      nome: "Carla Menezes",
      funcao: "Chef de Confeitaria",
      imagem: "/sin fondo/equipe/carla.png",
      frase: "Cuido de cada detalhe das sobremesas para oferecer um toque doce inesquecível que completa a experiência dos nossos clientes.",
    },
    {
      nome: "Lucas Silva",
      funcao: "Sous-chef",
      imagem: "/sin fondo/equipe/lucas.png",
      frase: "Auxilio o chef executivo e lidero a equipe para manter a excelência no preparo dos pratos mais pedidos de Guarulhos.",
    },
  ];

  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-4 md:px-12" id="equipe">
      <h2
        className={`text-3xl md:text-5xl font-bold text-center mb-16 tracking-tight ${playfair.className}`}
      >
        Nossa Equipe
      </h2>

      <div className="grid gap-12 md:gap-8 md:grid-cols-3">
        {equipe.map((membro, index) => (
          <div
            key={index}
            className={`bg-[#1a1a1a] rounded-2xl px-6 py-8 text-center shadow-lg hover:shadow-red-500/30 hover:scale-[1.02] transition-all duration-300 ease-in-out ${inter.className}`}
          >
            <div className="relative w-[160px] h-[240px] mx-auto mb-6">
              <Image
                src={membro.imagem}
                alt={membro.nome}
                fill
                className="object-contain drop-shadow-lg"
              />
            </div>

            <h3 className={`text-xl font-semibold mb-1 ${playfair.className}`}>
              {membro.nome}
            </h3>
            <p className="text-sm text-[#bbbbbb] mb-4">{membro.funcao}</p>
            <p className="italic text-[#aaaaaa] text-sm leading-relaxed">
              “{membro.frase}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

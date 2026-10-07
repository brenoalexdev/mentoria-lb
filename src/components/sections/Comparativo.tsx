"use client";

export default function Comparativo() {
  const itensComparativo = [
    {
      tradicional: "Focam apenas na dieta e esquecem a gestão financeira e o controle de custos do lote.",
      mentoriaLB: "Visão 360º: você aprende a gerir a nutrição, os custos exatos e a margem de lucro real."
    },
    {
      tradicional: "Entregam planilhas complexas de escritório que ninguém na fazenda consegue preencher no dia a dia.",
      mentoriaLB: "Ferramentas práticas, validadas no curral e adaptadas para a realidade de quem vive o campo."
    },
    {
      tradicional: "Te enchem de teoria genérica e te deixam sozinho na hora que o problema real acontece no cocho.",
      mentoriaLB: "Direcionamento prático de quem vive de pecuária. Você não está sozinho para tomar decisões."
    },
    {
      tradicional: "O objetivo é apenas 'fazer o boi ganhar peso', sem importar se a conta de arroba produzida fecha.",
      mentoriaLB: "O foco é resultado final: transformar o boi gordo em lucro no seu bolso com máxima eficiência."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="bg-zinc-900 text-amber-500 text-sm font-bold tracking-wider py-1 px-4 rounded-full border border-amber-500/20">
            A DIFERENÇA NA PRÁTICA
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-6 mb-6 leading-tight">
            Por que a Mentoria LB traz resultados reais enquanto outras falham?
          </h2>
          <p className="text-lg text-zinc-400">
            Esqueça as teorias bonitas que não funcionam no curral. Veja a diferença entre tentar adivinhar e aplicar um método de gestão validado na prática.
          </p>
        </div>

        {/* Tabela de Comparação */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12">
          
          {/* Coluna Ruim*/}
          <div className="space-y-4">
            <div className="bg-red-950/40 border border-red-900/50 text-red-500 font-bold text-center py-4 rounded-t-xl text-xl">
             Outros cursos
            </div>
            {itensComparativo.map((item, index) => (
              <div 
                key={`ruim-${index}`} 
                className="bg-zinc-900/50 border-l-4 border-red-600/70 p-5 md:p-6 rounded-r-lg text-zinc-400 text-sm md:text-base"
              >
                {item.tradicional}
              </div>
            ))}
          </div>

          {/* Coluna Boa*/}
          <div className="space-y-4">
            <div className="bg-amber-500 text-zinc-950 font-black text-center py-4 rounded-t-xl text-xl shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              Mentoria LB
            </div>
            {itensComparativo.map((item, index) => (
              <div 
                key={`bom-${index}`} 
                className="bg-zinc-900 border-l-4 border-amber-500 p-5 md:p-6 rounded-r-lg text-zinc-200 font-medium text-sm md:text-base shadow-sm"
              >
                {item.mentoriaLB}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
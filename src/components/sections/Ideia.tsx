import { dadosDoCurso } from '../../config/curso';

export default function Ideia() {
  const { theme, content } = dadosDoCurso;

  return (
    <section className={`py-24 px-8 md:px-24 ${theme.secondaryColor} border-t border-zinc-900`}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.textColor}`}>
          {content.ideia.title}
        </h2>
        <p className="text-xl text-zinc-400">
          {content.ideia.subtitle}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {content.ideia.items.map((item, index) => (
          <div key={index} className={`p-8 rounded-2xl border border-zinc-800 ${theme.cardBg}`}>
            <h3 className={`text-xl font-bold mb-3 ${theme.accentText}`}>
              {item.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
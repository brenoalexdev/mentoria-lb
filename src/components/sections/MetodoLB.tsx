import { dadosDoCurso } from '../../config/curso';

export default function MetodoLB() {
  const { theme, content } = dadosDoCurso;

  return (
    <section className={`py-24 px-8 md:px-24 ${theme.secondaryColor} border-t border-zinc-900`}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.textColor}`}>
          {content.metodoLB.title}
        </h2>
        <p className="text-xl text-zinc-400">
          {content.metodoLB.subtitle}
        </p>
      </div>
      <div className={`max-w-3xl mx-auto p-8 md:p-12 rounded-3xl border border-zinc-800 ${theme.cardBg}`}>
        <ul className="space-y-6">
          {content.metodoLB.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className={`${theme.accentText} mr-4 text-2xl`}>✓</span>
              <span className="text-zinc-200 text-lg md:text-xl">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
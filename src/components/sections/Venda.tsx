import { dadosDoCurso } from '../../config/curso';

export default function Venda() {
  const { theme, content } = dadosDoCurso;

  return (
    <section className={`py-24 px-8 md:px-24 ${theme.secondaryColor} border-t border-zinc-900`} id="venda">
      <div className="text-center max-w-4xl mx-auto mb-16">
        <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme.textColor}`}>
          {content.venda.title}
        </h2>
        <p className="text-xl text-zinc-400">
          {content.venda.subtitle}
        </p>
      </div>
      <div className="flex justify-center max-w-xl mx-auto">
        <div className={`flex flex-col p-10 rounded-3xl w-full relative ${theme.cardBg} border-2 border-amber-500 shadow-xl`}>
          <span className={`absolute -top-4 left-1/2 -translate-x-1/2 ${theme.primaryColor} text-black px-6 py-1.5 rounded-full text-sm font-bold uppercase`}>
            Oferta Especial
          </span>
          <h3 className={`text-3xl font-bold mb-8 text-center mt-4 ${theme.textColor}`}>
            {content.venda.planName}
          </h3>
          <a 
            href={content.venda.hotmartLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full py-5 text-lg font-bold rounded-xl transition-colors text-center text-black block ${theme.primaryColor} ${theme.primaryHover}`}
          >
            {content.venda.buttonText}
          </a>
        </div>
      </div>
    </section>
  );
}
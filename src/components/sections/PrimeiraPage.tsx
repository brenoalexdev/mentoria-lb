import { dadosDoCurso } from '../../config/curso';

export default function PrimeiraPage() {
  const { theme, content } = dadosDoCurso;

  return (
    <section className={`flex flex-col items-center justify-center min-h-[90vh] px-8 py-20 text-center ${theme.secondaryColor}`}>
      <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
        {theme.logoUrl && (
          <img src={theme.logoUrl} alt="Logo" className="h-32 md:h-48 w-auto mb-6 object-contain" />
        )}
        <span className={`inline-block px-4 py-1.5 rounded-full ${theme.primaryColor} bg-opacity-10 ${theme.accentText} font-semibold text-sm mb-4 border border-amber-500/20`}>
          {content.primeiraPage.tag}
        </span>
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${theme.textColor}`}>
          {content.primeiraPage.headline}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {content.primeiraPage.subheadline}
        </p>
        <div className="pt-8">
          <a href="#venda" className={`inline-block px-10 py-5 text-black font-bold text-lg rounded-xl transition-transform hover:scale-105 ${theme.primaryColor} ${theme.primaryHover}`}>
            {content.primeiraPage.ctaText}
          </a>
        </div>
      </div>
    </section>
  );
}
import { dadosDoCurso } from '../../config/curso';


export default function PrimeiraPage() {
  const { theme, content } = dadosDoCurso;

  return (
    <section className={`flex flex-col items-center justify-center min-h-[90vh] px-8 py-20 text-center ${theme.secondaryColor}`}>
      <div className="max-w-4xl mx-auto space-y-8 flex flex-col items-center">
        {theme.logoUrl && (
          <img src={theme.logoUrl} alt="logo" className="h-32 md:h-48 w-auto mb-6 object-contain" />
        )}
        <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500 text-zinc-950 font-bold text-sm mb-4 shadow-sm">
        {content.PrimeiraPage.tag}
         </span>
        <h1 className={`text-5xl md:text-7xl font-extrabold tracking-tight ${theme.textColor}`}>
          {content.PrimeiraPage.headline}
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
          {content.PrimeiraPage.subheadline}
        </p>
       <div className="pt-8">
          <a href="#venda" className={`inline-block px-10 py-5 text-black font-bold text-lg rounded-xl transition-transform hover:scale-105 ${theme.primaryColor} ${theme.primaryHover}`}>
            {content.PrimeiraPage.ctaText}
          </a>

          <div className="flex items-center justify-center gap-2 mt-4 text-sm text-zinc-400">
            <svg 
              className="w-5 h-5 text-amber-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={3} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
            <span>{content.PrimeiraPage.trustText}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
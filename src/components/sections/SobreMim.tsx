"use client";

import { dadosDoCurso } from '../../config/curso';

export default function SobreMim() {
  const { theme, content } = dadosDoCurso;

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <section className={`py-24 px-8 md:px-24 ${theme.secondaryColor} border-t border-zinc-900`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="w-full md:w-5/12 flex justify-center">
          <div className="relative w-72 h-96 md:w-full md:h-[550px] rounded-2xl overflow-hidden border-2 border-amber-500">
            <img 
              src={content.sobreMim.imagePath} 
              alt={content.sobreMim.name} 
              className="w-full h-full object-cover bg-zinc-900"
              onError={handleImageError}
            />
          </div>
        </div>
        <div className="w-full md:w-7/12 space-y-6">
          <h2 className={`text-4xl md:text-5xl font-bold ${theme.accentText} mb-8`}>
            {content.sobreMim.title}
          </h2>
          <div className="space-y-5 text-lg text-zinc-300 leading-relaxed">
            {content.sobreMim.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
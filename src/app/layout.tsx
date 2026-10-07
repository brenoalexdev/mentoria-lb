import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentoria Agropecuária LB',
  description: 'Transforme seu Confinamento em um Sistema Organizado e Lucrativo',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className="antialiased bg-black text-zinc-50">
        {children}
      </body>
    </html>
  );
}
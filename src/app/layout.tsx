import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentoria Agropecuária LB | Lucas Borba',
  description: 'Aprenda estratégias de mercado, gestão e otimização em agropecuária com a mentoria especializada de Lucas Borba.',
  keywords: ['mentoria agropecuária', 'Lucas Borba', 'gestão rural', 'agronegócio', 'Agropecuária LB'],
  openGraph: {
    title: 'Mentoria Agropecuária LB',
    description: 'Estratégias avançadas para alavancar os seus resultados no agronegócio.',
    url: 'https://mentoria-lb.netlify.app/',
    siteName: 'Mentoria LB',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 600,
        alt: 'Logo Agropecuária LB',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
};
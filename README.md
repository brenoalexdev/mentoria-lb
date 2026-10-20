# 🌾 Landing Page de Alta Conversão - Mentoria Agropecuária LB

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Este projeto é uma **Landing Page comercial** desenvolvida sob demanda para um cliente real (Lucas Borba - Mentoria Agropecuária LB). O foco principal do desenvolvimento foi a criação de uma interface de alta conversão, otimizada para campanhas de tráfego pago, com foco em performance e estrutura voltada para resultados no nicho do agronegócio.

## 🎯 Objetivo Comercial

Como um projeto entregue para um cliente, a arquitetura do site foi pensada para resolver problemas reais de negócio:
* **Conversão:** Implementação de gatilhos mentais visuais, secções de comparação ("Nós vs Eles") e badges de segurança em pontos estratégicos de clique (CTAs).
* **Rastreamento de Dados:** Integração limpa do **Facebook Pixel** utilizando as melhores práticas do React para garantir que o cliente consiga rastrear o custo por lead/venda sem perder velocidade de carregamento.
* **Escalabilidade:** Utilização de uma arquitetura baseada em ficheiros de configuração (`config/curso.ts`), permitindo que os textos e informações da página sejam alterados rapidamente sem necessidade de reescrever a interface.

## 🚀 Tecnologias Utilizadas

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Linguagem:** TypeScript
* **Estilização:** Tailwind CSS (com paleta de cores customizada para contraste `zinc-900` e `amber-500`)
* **Deploy e Hospedagem:** Netlify / Vercel

## ⚙️ Performance e SEO (Otimizações)

O projeto foi construído seguindo as diretrizes vitais do Google (Core Web Vitals):
* **Imagens de Nova Geração:** Conversão de todos os ativos visuais para o formato `.webp` e utilização do componente `<Image>` do Next.js para renderização com tamanhos dinâmicos.
* **Lazy Loading Nativo:** Carregamento de imagens e secções mais pesadas apenas quando entram na área visível do utilizador.
* **SEO e Open Graph:** Configuração dinâmica de Meta Tags (`layout.tsx`) para garantir que links partilhados no WhatsApp, LinkedIn e redes sociais renderizem pré-visualizações ricas e atrativas.
* **Scripts Assíncronos:** O Facebook Pixel foi injetado utilizando o `next/script` com a estratégia `afterInteractive`, garantindo que a thread principal não seja bloqueada no carregamento inicial.

## 📦 Como executar localmente

Se deseja testar ou modificar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
```bash
git clone [https://github.com/seu-usuario/nome-do-repositorio.git](https://github.com/seu-usuario/nome-do-repositorio.git)

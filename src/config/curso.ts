import PrimeiraPage from "../components/sections/PrimeiraPage";

export const dadosDoCurso = {
  theme: {
    logoUrl: '/logo.png' ,
    primaryColor: 'bg-amber-500', 
    primaryHover: 'hover:bg-amber-600',
    secondaryColor: 'bg-black',
    cardBg: 'bg-zinc-900',
    textColor: 'text-zinc-50',
    accentText: 'text-amber-500',
  },
  content: {
  PrimeiraPage: {
    tag: 'ATENÇÃO PECUARISTA',
    headline: 'Transforme seu confinamento em um sistema organizado e lucrativo',
    subheadline: 'Do animal que entra ao resultado que sai. Pare de depender da sorte e aprenda o método prático de manejo e gestão que gera sucesso real na pecuária.',
    ctaText: 'Quero lucrar no confinamento',
    trustText: 'Método 100% Comprovado na Prática',
  },
    ideia: {
      title: 'O resultado no confinamento não acontece por acaso',
      subtitle: 'Se você toma decisões baseadas apenas em "achismo", está deixando dinheiro na mesa. Veja onde os lucros costumam vazar:',
      items: [
        { title: 'Compra e Viabilidade Cegas', text: 'Comprar no escuro. Pagar caro no bezerro errado e já começar a operação no prejuízo antes mesmo do gado pisar no confinamento.' },
        { title: 'Descontrole de Dieta e Adaptação', text: 'Jogar o boi no cocho de qualquer jeito e perder peso na adaptação, além de trabalhar com dietas genéricas.' },
        { title: 'Falta de Acompanhamento (GMD)', text: 'Não organizar os dados de peso e consumo diário, perdendo a hora exata de ajustar o sistema para evitar prejuízos.' },
        { title: 'Terminação no Escuro', text: 'Não planejar o momento da saída e não entender o rendimento de carcaça, matando a rentabilidade por cabeça.' },
      ]
    },
    sobreMim: {
      title: 'Quem será o seu mentor?',
      name: 'Lucas Borba',
      imagePath: '/lucas.png',
      paragraphs: [
        'Eu sou Lucas Borba, da Agropecuária LB.',
        'Comecei na pecuária ainda muito novo e fui aprendendo na prática que resultado no confinamento não acontece por acaso. Ele é construído com compra bem feita, planejamento, adaptação e tomada de decisão.',
        'Foi errando e testando que desenvolvi meu próprio método de trabalho em confinamento 100% fechado.',
        'Hoje, quero colocar esse conhecimento à sua disposição para transformar a sua operação.'
      ]
    },
    metodoLB: {
      title: 'O que você vai encontrar na Mentoria?',
      subtitle: 'Um método validado com ferramentas práticas para aplicar na sua realidade.',
      features: [
        '11 aulas práticas em vídeo (da chegada ao abate)',
        'Planilha de Viabilidade de Operação',
        'Planilha de Peso, Organização e Rendimento de Carcaça',
        'Acesso aos vídeos e suas atualizações por 1 ano',
        '8 encontros semanais com momentos de 1 hora'
      ]
    },
    venda: {
      title: 'Assuma o controle da sua operação hoje',
      subtitle: 'Pare de errar e comece a trabalhar com números reais.',
      planName: 'Mentoria Agropecuária LB',
      buttonText: 'Compre agora',
      hotmartLink: 'LINK DA HOTMART(FALTA COLOCAR)',
    }
  }
};
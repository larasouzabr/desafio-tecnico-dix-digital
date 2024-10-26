import { Injectable } from '@angular/core';
import { Colunist, Report } from '../../core/models/News';

@Injectable({
  providedIn: 'root',
})
export class ColunistService {
  private colunists: Colunist[] = [
    {
      name: 'Erica Silva',
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      smalldescription: 'Jornalista e especialista em política regional.',
      columnname: 'De Olho na Política',
      reportagens: [
        {
          title: 'Eleições 2024: O que esperar?',
          content:
            'Um panorama das eleições que se aproximam. A expectativa é alta, pois os eleitores buscam candidatos que realmente representem suas necessidades e desejos. Com novas alianças sendo formadas e algumas figuras políticas em ascensão, a dinâmica eleitoral promete ser intensa. As questões mais debatidas incluem saúde, educação e segurança pública, temas que dominam as conversas nas comunidades. Além disso, a participação da juventude nas eleições é uma novidade que pode alterar o cenário. Esperamos ver um aumento no engajamento político, refletindo a urgência por mudanças. Neste contexto, é fundamental que todos estejam bem informados para fazer escolhas conscientes.',
          date: '2024-01-15',
          mainHeadline: 'As eleições de 2024 prometem grandes mudanças!',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+1',
        },
        {
          title: 'Política local em transformação',
          content:
            'Analisamos como a política local tem mudado nos últimos anos. A ascensão de novos líderes e a saída de figuras tradicionais marcam um período de transição. Esses líderes trazem propostas inovadoras, buscando atender a demandas que antes eram ignoradas. A transparência na administração pública e o uso de tecnologia têm sido fundamentais para melhorar a comunicação com a população. No entanto, ainda existem desafios a serem superados, como a corrupção e a desconfiança da população. A participação cidadã nas decisões políticas é vital para garantir que as mudanças sejam sustentáveis e realmente atendam às necessidades da comunidade.',
          date: '2024-02-20',
          mainHeadline: 'Transformações e desafios na política local',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+2',
        },
        {
          title: 'Desafios da nova administração',
          content:
            'Uma análise dos primeiros 100 dias do novo governo. Neste período, a nova administração enfrentou uma série de desafios, desde a implementação de políticas públicas até a gestão de crises emergenciais. O foco tem sido em estabelecer um diálogo aberto com a população e buscar soluções que envolvam a comunidade. No entanto, as críticas não faltam, especialmente em relação à lentidão na execução de promessas de campanha. O governo também precisa lidar com a resistência de setores que se opõem a suas reformas. A eficácia das medidas adotadas será fundamental para ganhar a confiança dos cidadãos e garantir a continuidade do apoio.',
          date: '2024-03-10',
          mainHeadline: 'O que mudou na administração pública?',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+3',
        },
      ],
    },
    {
      name: 'Carlos Mendes',
      img: 'https://randomuser.me/api/portraits/men/30.jpg',
      smalldescription: 'Analista econômico e comentarista de finanças.',
      columnname: 'Visão Econômica',
      reportagens: [
        {
          title: 'Cenários econômicos para 2024',
          content:
            'Um estudo sobre as projeções econômicas. As previsões indicam que a economia global enfrentará desafios significativos, mas também oportunidades únicas. A inflação e a taxa de desemprego são pontos críticos a serem monitorados. Com a recuperação econômica após a pandemia, muitos setores estão se adaptando e inovando para se manter competitivos. Os investidores devem estar atentos às mudanças nas políticas monetárias e fiscais que podem impactar suas decisões. Neste cenário, é crucial diversificar os investimentos e considerar os riscos associados. As tendências de consumo também estão mudando, refletindo as novas prioridades da sociedade.',
          date: '2024-01-22',
          mainHeadline: 'Economia: O que nos espera em 2024?',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+4',
        },
        {
          title: 'Investimentos inteligentes',
          content:
            'Dicas sobre onde investir seu dinheiro. A busca por investimentos seguros e rentáveis é mais intensa do que nunca. As ações de tecnologia, por exemplo, continuam a atrair a atenção dos investidores, mas é importante também considerar ativos diversificados, como imóveis e commodities. Outro ponto a ser destacado é a importância de educar-se financeiramente, entendendo os riscos e retornos de cada opção. Aplicações em fundos sustentáveis e de impacto social estão ganhando força, refletindo uma mudança no comportamento dos investidores. Além disso, é crucial acompanhar as tendências de mercado e as notícias que possam influenciar suas decisões de investimento.',
          date: '2024-02-18',
          mainHeadline: 'Os melhores investimentos para 2024',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+5',
        },
        {
          title: 'Análise do mercado de trabalho',
          content:
            'Como o mercado de trabalho tem se adaptado às novas demandas. A pandemia acelerou mudanças que já estavam em curso, como a digitalização e o trabalho remoto. Muitas empresas estão reavaliando suas estruturas e buscando formas de melhorar a produtividade. A qualificação profissional torna-se cada vez mais relevante, e os trabalhadores precisam estar prontos para se adaptar a novas funções. Setores como tecnologia e saúde estão se expandindo, enquanto outros enfrentam dificuldades. Com a crescente automação, a habilidade de aprender e se reinventar será crucial para a empregabilidade. O futuro do trabalho promete ser dinâmico e desafiador.',
          date: '2024-03-05',
          mainHeadline: 'O futuro do trabalho',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+6',
        },
      ],
    },
    {
      name: 'Ana Pereira',
      img: 'https://randomuser.me/api/portraits/women/20.jpg',
      smalldescription: 'Pesquisadora em sociologia e escritora.',
      columnname: 'Reflexões Sociais',
      reportagens: [
        {
          title: 'O impacto da tecnologia na sociedade',
          content:
            'Como a tecnologia tem moldado nosso comportamento. As inovações tecnológicas estão transformando a forma como interagimos, trabalhamos e nos comunicamos. Desde o advento das redes sociais até a automação de processos, as mudanças são profundas. Embora a tecnologia traga benefícios significativos, como a conectividade e acesso à informação, também levanta questões sobre privacidade e dependência digital. A desconexão social e a superficialidade nas relações são preocupações que emergem nesse contexto. É essencial refletir sobre como equilibrar a utilização da tecnologia e a preservação das relações humanas significativas. A educação digital é uma ferramenta fundamental para ajudar a sociedade a navegar neste novo cenário.',
          date: '2024-01-30',
          mainHeadline: 'Tecnologia e sociedade: uma relação complexa',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+7',
        },
        {
          title: 'Desigualdade social em debate',
          content:
            'Analisamos a crescente desigualdade no Brasil. Este tema é uma das maiores preocupações da sociedade contemporânea, pois afeta diretamente a qualidade de vida de milhões de brasileiros. O acesso a recursos, educação e oportunidades de emprego é desigual, e essa disparidade se reflete em diversos aspectos da vida cotidiana. As políticas públicas muitas vezes falham em abordar essas desigualdades de maneira eficaz. É urgente que haja um debate amplo e inclusivo sobre como construir uma sociedade mais justa. Iniciativas de inclusão social e educação são essenciais para promover a igualdade e garantir que todos tenham acesso a um futuro melhor.',
          date: '2024-02-28',
          mainHeadline: 'Desigualdade: um problema que não podemos ignorar',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+8',
        },
        {
          title: 'Educação e suas falhas',
          content:
            'Um olhar crítico sobre o sistema educacional. A educação é a base para o desenvolvimento de uma sociedade, mas muitos aspectos do sistema atual deixam a desejar. As salas de aula estão superlotadas, e a falta de recursos compromete a qualidade do ensino. A formação dos professores e o apoio pedagógico são frequentemente negligenciados. Além disso, as metodologias de ensino não têm se adaptado às necessidades dos alunos, resultando em altas taxas de evasão escolar. É vital reavaliar e reformular o sistema educacional, promovendo uma abordagem mais inclusiva e adaptativa. Somente assim poderemos garantir que todas as crianças tenham a oportunidade de aprender e prosperar.',
          date: '2024-03-15',
          mainHeadline: 'A educação precisa de mudanças',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+9',
        },
      ],
    },
  ];

  constructor() {}

  getColunists(): Colunist[] {
    return this.colunists;
  }

  getColunistInfo(name: string): Colunist | null {
    const colunist = this.colunists.find((c) => c.name === name);
    return colunist
      ? colunist
      : {
          name: 'Colunista Desconhecido',
          img: 'https://via.placeholder.com/200',
          smalldescription: 'Informações não disponíveis.',
          columnname: 'Coluna Desconhecida',
          reportagens: [],
        };
  }

  getReportagensByColunist(name: string): Report[] {
    const colunist = this.colunists.find((c) => c.name === name);
    return colunist ? colunist.reportagens : [];
  }
}

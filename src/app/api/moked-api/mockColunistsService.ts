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
          content: 'Um panorama das eleições que se aproximam...',
          date: '2024-01-15',
          mainHeadline: 'As eleições de 2024 prometem grandes mudanças!',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+1',
        },
        {
          title: 'Política local em transformação',
          content:
            'Analisamos como a política local tem mudado nos últimos anos...',
          date: '2024-02-20',
          mainHeadline: 'Transformações e desafios na política local',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+2',
        },
        {
          title: 'Desafios da nova administração',
          content: 'Uma análise dos primeiros 100 dias do novo governo...',
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
          content: 'Um estudo sobre as projeções econômicas...',
          date: '2024-01-22',
          mainHeadline: 'Economia: O que nos espera em 2024?',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+4',
        },
        {
          title: 'Investimentos inteligentes',
          content: 'Dicas sobre onde investir seu dinheiro...',
          date: '2024-02-18',
          mainHeadline: 'Os melhores investimentos para 2024',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+5',
        },
        {
          title: 'Análise do mercado de trabalho',
          content:
            'Como o mercado de trabalho tem se adaptado às novas demandas...',
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
          content: 'Como a tecnologia tem moldado nosso comportamento...',
          date: '2024-01-30',
          mainHeadline: 'Tecnologia e sociedade: uma relação complexa',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+7',
        },
        {
          title: 'Desigualdade social em debate',
          content: 'Analisamos a crescente desigualdade no Brasil...',
          date: '2024-02-28',
          mainHeadline: 'Desigualdade: um problema que não podemos ignorar',
          img: 'https://via.placeholder.com/600x400?text=Reportagem+8',
        },
        {
          title: 'Educação e suas falhas',
          content: 'Um olhar crítico sobre o sistema educacional...',
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

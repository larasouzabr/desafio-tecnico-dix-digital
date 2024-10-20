import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-most-read',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './most-read.component.html',
  styleUrl: './most-read.component.css'
})
export class MostReadComponent {
  news = [
    {
      id: 1,
      title: 'Título da Notícia 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus in libero '
    },
    {
      id: 2,
      title: 'Título da Notícia 2',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus in libero '
    },
    {
      id: 3,
      title: 'Título da Notícia 3',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ornare lacus in libero '
    }
  ];
}

import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { SmallCardComponentComponent } from '../small-card-component/small-card-component.component';
import { News } from '../../models/News';

@Component({
  selector: 'app-container-information',
  standalone: true,
  imports: [CommonModule, CarouselComponent, SmallCardComponentComponent],
  templateUrl: './container-information.component.html',
  styleUrl: './container-information.component.css',
})
export class ContainerInformationComponent {
  @Input() theme: string = 'white';
  @Input() sectionName: string = 'default';

  carouselItems = [
    { imageSrc: 'https://via.placeholder.com/800x400', altText: 'First Slide' },
    {
      imageSrc: 'https://via.placeholder.com/800x400',
      altText: 'Second Slide',
    },
    { imageSrc: 'https://via.placeholder.com/800x400', altText: 'Third Slide' },
  ];

  newsList: News[] = [
    {
      title: 'Título da Notícia 1',
      description: 'Descrição da notícia 1. Lorem ipsum dolor sit amet.',
    },
    {
      title: 'Título da Notícia 2',
      description: 'Descrição da notícia 2. Consectetur adipiscing elit.',
    },
  ];
}

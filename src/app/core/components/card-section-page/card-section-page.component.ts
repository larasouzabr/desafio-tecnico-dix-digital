import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Colunist } from '../../models/News';

@Component({
  selector: 'app-card-section-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card-section-page.component.html',
  styleUrl: './card-section-page.component.css',
})
export class CardSectionPageComponent {
  @Input()
  colunist!: Colunist;
}

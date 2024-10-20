import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { News } from '../../models/News';

@Component({
  selector: 'app-small-card-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './small-card-component.component.html',
  styleUrl: './small-card-component.component.css'
})
export class SmallCardComponentComponent {
  @Input() news: News[] = [];
  @Input() flexType: string = 'row';

}

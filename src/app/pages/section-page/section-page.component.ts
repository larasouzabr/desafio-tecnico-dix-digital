import { Component } from '@angular/core';
import { CardSectionPageComponent } from '../../core/components/card-section-page/card-section-page.component';
import { ColunistService } from '../../api/moked-api/mockColunistsService';
import { Colunist } from '../../core/models/News';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-section-page',
  standalone: true,
  imports: [CardSectionPageComponent, CommonModule],
  templateUrl: './section-page.component.html',
  styleUrl: './section-page.component.css',
})
export class SectionPageComponent {
  colunists: Colunist[] = [];

  constructor(private colunistService: ColunistService) {}

  ngOnInit(): void {
    this.colunists = this.colunistService.getColunists();
    console.log(this.colunists);
  }
}

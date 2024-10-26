import { Component } from '@angular/core';
import { CardSectionPageComponent } from '../../core/components/card-section-page/card-section-page.component';
import { ColunistService } from '../../api/moked-api/mockColunistsService';
import { Colunist } from '../../core/models/News';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-colunist-page',
  standalone: true,
  imports: [CardSectionPageComponent, CommonModule],
  templateUrl: './colunists-page.component.html',
  styleUrl: './colunists-page.component.css',
})
export class ColunistsPageComponent {
  colunists: Colunist[] = [];

  constructor(private colunistService: ColunistService) {}

  ngOnInit(): void {
    this.colunists = this.colunistService.getColunists();
    console.log(this.colunists);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário em standalone components
import { CardSectionPageComponent } from '../../core/components/card-section-page/card-section-page.component';
import { ColunistService } from '../../api/moked-api/mockColunistsService';
import { Colunist, Report } from '../../core/models/News';
import { ReportCardComponent } from '../../core/components/report-card/report-card.component';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [CommonModule, CardSectionPageComponent, ReportCardComponent],
  templateUrl: './report-page.component.html',
  styleUrls: ['./report-page.component.css'],
})
export class ReportPageComponent implements OnInit {
  colunistName: string | null = '';
  colunist!: Colunist;
  reportagens: Report[] = [];

  constructor(
    private route: ActivatedRoute,
    private colunistService: ColunistService
  ) {}

  ngOnInit(): void {
    this.colunistName = this.route.snapshot.paramMap.get('name');

    if (this.colunistName) {
      const colunistData = this.colunistService.getColunistInfo(
        this.colunistName
      );

      if (colunistData) {
        this.colunist = colunistData;
        this.reportagens = this.colunist.reportagens;
      } else {
        console.error('Colunista não encontrado');
      }
    } else {
      console.error('Nome de colunista não fornecido na rota');
    }
  }
}

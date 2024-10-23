import { Component, OnInit } from '@angular/core';
import { DestaquesComponent } from '../../core/components/destaques/destaques.component';
import { MostReadComponent } from '../../core/components/most-read/most-read.component';
import { ContainerInformationComponent } from '../../core/components/container-information/container-information.component';
import { Banner, City, Home } from '../../core/models/News';
import { HomeService } from '../../api/homeService';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    DestaquesComponent,
    MostReadComponent,
    ContainerInformationComponent,
  ],
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent implements OnInit {
  citiesFiltered: City[] = [];
  homePage!: Home;

  constructor(private homeService: HomeService) {}

  ngOnInit(): void {
    this.getHomePage();
  }

  private getHomePage() {
    this.homeService.getHomePage().subscribe({
      next: (response: Home) => {
        this.homePage = response;

        console.log(this.homePage);
      },
      error: (error) => this.handleError(error),
    });
  }

  private handleError(error: any): void {
    console.error('Erro ao buscar as cidades:', error);
  }
}

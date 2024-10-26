import { Component, OnInit } from '@angular/core';
import { DestaquesComponent } from '../../core/components/destaques/destaques.component';
import { MostReadComponent } from '../../core/components/most-read/most-read.component';
import { ContainerInformationComponent } from '../../core/components/container-information/container-information.component';
import { City, Home } from '../../core/models/News';
import { HomeService } from '../../api/homeService';
import { HttpErrorResponse } from '@angular/common/http';
import { NewsletterComponent } from "../../core/components/newsletter/newsletter.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [
    DestaquesComponent,
    MostReadComponent,
    ContainerInformationComponent,
    NewsletterComponent
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
      error: (error: HttpErrorResponse) => this.handleError(error),
    });
  }

  private handleError(error: any): void {
    console.error('Erro ao buscar as cidades:', error);
  }
}

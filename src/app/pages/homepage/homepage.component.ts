import { Component } from '@angular/core';
import { DestaquesComponent } from "../../core/components/destaques/destaques.component";
import { MostReadComponent } from "../../core/components/most-read/most-read.component";
import { ContainerInformationComponent } from "../../core/components/container-information/container-information.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [DestaquesComponent, MostReadComponent, ContainerInformationComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}

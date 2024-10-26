import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Report } from '../../models/News';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-report-card',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonComponent],
  templateUrl: './report-card.component.html',
  styleUrl: './report-card.component.css',
})
export class ReportCardComponent {
  @Input()
  report!: Report;

  public showFullContent: boolean = false;

  toggleContent() {
    this.showFullContent = !this.showFullContent;
  }
}

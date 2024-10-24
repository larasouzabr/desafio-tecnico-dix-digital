import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { SectionPageComponent } from './pages/section-page/section-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'section-page', component: SectionPageComponent },
  { path: 'colunist/:name', component: ReportPageComponent },
];

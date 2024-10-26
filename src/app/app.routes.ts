import { Routes } from '@angular/router';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ColunistsPageComponent } from './pages/colunists-page/colunists-page.component';
import { ReportPageComponent } from './pages/report-page/report-page.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'colunists-page', component: ColunistsPageComponent },
  { path: 'colunist/:name', component: ReportPageComponent },
];

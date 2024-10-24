import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import * as dotenv from 'dotenv';
import { environment } from './enviroments/enviroment';
import { enableProdMode } from '@angular/core';

dotenv.config();

if (environment.production) {
  enableProdMode();
}
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

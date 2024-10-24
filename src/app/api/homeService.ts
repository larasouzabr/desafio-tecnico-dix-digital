import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { Home } from '../core/models/News';
import { appConfigService } from './appConfigService';
import { mockHomeService } from './moked-api/mockHomeService';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private http: HttpClient,
    private mockHomeService: mockHomeService,
    @Inject(PLATFORM_ID) private platformId: Object,
    private appConfig: appConfigService
  ) {}

  getHomePage(): Observable<Home> {
    if (isPlatformBrowser(this.platformId)) {
      if (this.appConfig.useMockApi) {
        return this.mockHomeService.getHomePage();
      } else {
        const url = `${this.appConfig.urlApiBasePath}/home-page`;
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.appConfig.bearerToken}`,
        });
        return this.http
          .get<Home>(url, { headers })
          .pipe(catchError(this.handleError));
      }
    } else {
      const fallbackHome: Home = {
        message: 'Fallback data for server-side rendering',
        data: {
          home: [],
          pages: [],
          banners: [],
        },
      };
      return of(fallbackHome);
    }
  }

  private handleError(error: any): Observable<Home> {
    console.error('Erro ao chamar home:', error);
    const errorHome: Home = {
      message: 'Error fetching data',
      data: {
        home: [],
        pages: [],
        banners: [],
      },
    };
    return of(errorHome);
  }
}

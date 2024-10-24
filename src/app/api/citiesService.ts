import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';
import { City } from '../core/models/News';
import { mockCitiesService } from './moked-api/mockCitiesService';
import { environment } from '../../enviroments/environment.prod';
@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  constructor(
    private http: HttpClient,
    private mockCitiesService: mockCitiesService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  token = import.meta.env.NG_APP_API_KEY;
  urlApiBasePath = import.meta.env.NG_APP_BASE_URL;
  useMockApi = environment.mockApiData;

  getCitiesFiltered(stateId: number): Observable<City[]> {
    if (isPlatformBrowser(this.platformId)) {
      if (this.useMockApi) {
        return this.mockCitiesService.getCitiesFiltered(stateId);
      } else {
        const url = `${this.urlApiBasePath}/cities?state=${stateId}`;
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        });
        return this.http
          .get<City[]>(url, { headers })
          .pipe(catchError(this.handleError));
      }
    } else {
      return of([] as City[]);
    }
  }
  getAllCities(): Observable<City[]> {
    if (isPlatformBrowser(this.platformId)) {
      if (this.useMockApi) {
        return this.mockCitiesService.getAllCities();
      } else {
        const url = `${this.urlApiBasePath}/cities`;
        const headers = new HttpHeaders({
          Authorization: `Bearer ${this.token}`,
        });
        return this.http
          .get<City[]>(url, { headers })
          .pipe(catchError(this.handleError));
      }
    } else {
      return of([] as City[]);
    }
  }

  private handleError(error: any): Observable<City[]> {
    console.error('Erro ao buscar cidades:', error);
    return of([] as City[]);
  }
}

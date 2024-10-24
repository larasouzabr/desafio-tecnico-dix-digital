import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { City } from '../../core/models/News';

@Injectable({
  providedIn: 'root',
})
export class mockCitiesService {
  private mockCities: City[] = [
    {
      id: 5318,
      state_id: 9,
      title: 'Abadia de Goiás',
      iso: 5200050,
      iso_ddd: 62,
      status: 2,
      slug: 'abadia-de-goias',
      population: 8053,
      lat: '-16.75881189',
      long: '-49.44054783',
      income_per_capita: '634.46',
      created_at: null,
      updated_at: null,
    },
    {
      id: 2243,
      state_id: 11,
      title: 'Abadia dos Dourados',
      iso: 3100104,
      iso_ddd: 34,
      status: 2,
      slug: 'abadia-dos-dourados',
      population: 7037,
      lat: '-18.48756496',
      long: '-47.39683244',
      income_per_capita: '648.20',
      created_at: null,
      updated_at: null,
    },
    {
      id: 5319,
      state_id: 9,
      title: 'Abadiânia',
      iso: 5200100,
      iso_ddd: 62,
      status: 2,
      slug: 'abadiania',
      population: 18427,
      lat: '-16.18267186',
      long: '-48.71881214',
      income_per_capita: '584.92',
      created_at: null,
      updated_at: null,
    },
  ];

  getCitiesFiltered(stateId: number): Observable<City[]> {
    const filteredCities = this.mockCities.filter(
      (city) => city.state_id === stateId
    );
    return of(filteredCities);
  }

  getAllCities(): Observable<City[]> {
    return of(this.mockCities);
  }
}

import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ICountry, DropdownData } from '../models/country';
import { map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) {}

  loadCountry(region: string): Observable<ICountry[]> {
    console.log('test');

    return this.http.get<ICountry[]>(`${this.baseUrl}/${region}`).pipe(
      map((res: ICountry[]) => {
        return res.map((country) => ({ 
          name: country.name,
          capital: country.capital,
          population: country.population,
          currencies: country.currencies,
          flag: country.flag,
        }));
      })
    );
  }
}


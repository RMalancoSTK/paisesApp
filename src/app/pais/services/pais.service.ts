import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root',
})
export class PaisService {
  private apiUrlv3: string = 'https://restcountries.com/v3.1';
  private apiUrlv2: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set('fields', 'name,flags,population,altSpellings');
  }

  constructor(private http: HttpClient) {}

  buscarPais(termino: string): Observable<Country[]> {
    if (!termino.trim()) {
      return of([]);
    }
    const url = `${this.apiUrlv3}/name/${termino}`;
    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }

  buscarCapital(termino: string): Observable<Country[]> {
    if (!termino.trim()) {
      return of([]);
    }
    const url = `${this.apiUrlv3}/capital/${termino}`;
    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }

  getDatosAlpha(id: string): Observable<Country> {
    if (!id.trim()) {
      return of({} as Country);
    }
    const url = `${this.apiUrlv3}/alpha/${id}`;
    return this.http.get<Country>(url);
  }

  buscarregionalblock(termino: string): Observable<Country[]> {
    if (!termino.trim()) {
      return of([]);
    }
    const url = `${this.apiUrlv2}/regionalbloc/${termino}`;
    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }

  buscarRegion(termino: string): Observable<Country[]> {
    if (!termino.trim()) {
      return of([]);
    }
    const url = `${this.apiUrlv3}/region/${termino}`;
    return this.http.get<Country[]>(url, {
      params: this.httpParams,
    });
  }
}

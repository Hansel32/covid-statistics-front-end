import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  fetchData(): Observable<any> {
    return this.http.get('http://localhost:3000/dashboard',
      {withCredentials: true });
  }

  syncData(): Observable<any> {
    return this.http.get('http://localhost:3000/sync',
      {withCredentials: true, responseType: 'text'});
  }

  searchByCountry(countryName): Observable<any> {
    return this.http
      .get('http://localhost:3000/dashboard/country/' + countryName );
  }
}

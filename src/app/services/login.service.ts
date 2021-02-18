import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(email, password): Observable<any> {
    return this.http.post('http://localhost:3000/login',
      {email, password}, {responseType: 'text'});
  }

  logOut(): Observable<any> {
    return this.http.post('http://localhost:3000/logout',
      {}, {responseType: 'text'});
  }

  register(username, password, email): Observable<any> {
    return this.http.post('http://localhost:3000/register'
      , {username, password, email }, {responseType: 'text'});
  }
}

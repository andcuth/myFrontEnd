import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
//import { appConfig } from '../app.config';

@Injectable()
export class AuthLoginService {
  public token: string;

  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    //return this.http.post<any>(appConfig.apiUrl + '/api/signin', { email: email, password: password })

  }
}


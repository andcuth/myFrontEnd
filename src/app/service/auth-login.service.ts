import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { appConfig } from '../app.config';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {User} from '../models/user';

@Injectable()
export class AuthLoginService {
  public token: string;
  private token: string;
  private LoggedIn = new BehaviorSubject<boolean> (false);
  currentLoggedIn = this.LoggedIn.asObservable();
  private currentUser = new BehaviorSubject<User>(null);
  currentUserObserver = this.currentUser.asObservable();

  changeLoginStatus(nextLoginStatus: boolean) {
    this.LoggedIn.next(nextLoginStatus);
    console.log('Current Project Type ' + nextLoginStatus);
  }
  changeCurrentUserStatus(nextCurrentUser: User) {this.currentUser.next(nextCurrentUser); }


  constructor(private http: HttpClient) { }

  login(email: string, password: string) {
    return this.http.post<any>(appConfig.apiUrl + '/api/signin', { email: email, password: password })
      .map(user => {
        console.log('login has fired');

        console.log(user);
        // split up token
        const parted = user.token.split(' ');
        const currentUserReturned = jwt.decode(parted[1], appConfig.secret);

        console.log(currentUserReturned);
        // login successful if there's a jwt token in the response
        if (user) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(currentUserReturned));
          localStorage.setItem('token', JSON.stringify(user));
          this.changeLoginStatus(true);
          this.changeCurrentUserStatus(currentUserReturned);

        }


        return user;
      });

  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.changeLoginStatus(false);
    this.changeCurrentUserStatus(null);
  }

}



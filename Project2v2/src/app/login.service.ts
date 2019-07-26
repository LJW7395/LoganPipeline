import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './user.model';
import { Tournament } from './tournament.model';
import { NgForm } from '@angular/forms';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginURL = 'http://34.239.48.216:8085/MavenProjectPipeline/aether/login';
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private httpClient: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  doLogin(username: string, password: string) {
    //let httpParams = [username,password];
    //return this.httpClient.post(this.loginURL,httpParams);

    /*
    let formData:FormData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    return this.httpClient.post(this.loginURL,formData);
    */

    return this.httpClient.post<any>(this.loginURL, { username, password })
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }
}
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { User } from './user.model';
import { Tournament } from './tournament.model';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //
  apiUrl = 'https://jsonplaceholder.typicode.com/users';

  //tournamentsIndexURL = 'https://api.challonge.com/v1/tournaments.json?api_key=XOrxEi0Ml0MTpeKmB3ddlRfgHgAbGfc8kvHAtW0Y';
  tournamentsIndexURL = 'https://TheRealMrWillis:XOrxEi0Ml0MTpeKmB3ddlRfgHgAbGfc8kvHAtW0Y@api.challonge.com/v1/tournaments.json';
  //tournamentsIndexURL = 'https://api.challonge.com/v1/tournaments.json';

  loginURL = 'http://34.239.48.216:8085/MavenProjectPipeline/aether/login';


  constructor(private httpClient: HttpClient) { }

  /*
  getUsers(){
    return this.httpClient.get<User[]>(this.apiUrl);
  }
  */

  getTournamentsIndex(){
    
    console.log("attempting data.service.ts return");
    console.log(this.httpClient.get(this.tournamentsIndexURL));
    return this.httpClient.get<Tournament[]>(this.tournamentsIndexURL);
    //return this.httpClient.get<Object[]>(this.tournamentsIndexURL);
  }

  doLogin(username:string,password:string){
    //let httpParams = [username,password];
    //return this.httpClient.post(this.loginURL,httpParams);
    let formData:FormData = new FormData();
    formData.append('username',username);
    formData.append('password',password);
    return this.httpClient.post(this.loginURL,formData);
  }
}

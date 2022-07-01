/**
 * Auth Service will send/get the data to/from the API
 * 
 * @Functions
 * -> getData() = Recieves all users from the API
 * -> sendData() = sends data to the API
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseUrl } from 'src/environments/environment';
import { Users } from '../model/users';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  constructor(private http: HttpClient) { }
  
  users: Users[] = [];

  getData(): Observable<Users[]> {
    console.log("getData function: AuthService")
    return this.http.get<Users[]>(baseUrl + '/users'); // returns observable
  }

  sendData(userData: Users): Observable<Users> {
    return this.http.post<Users>(baseUrl + '/users', userData);
  }

}

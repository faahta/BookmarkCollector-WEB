import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
// import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {}

  sendCredential(username: string, password: string) {
    const url = 'http://localhost:8080/api/user/';
    const params = 'username=' + username + '&password=' + password;
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });
    return this.http.post(url, params, {headers, withCredentials : true});
  }

  logout() {
    const url = 'http://localhost:8080/logout';
    return this.http.get(url, { withCredentials: true });
  }

}

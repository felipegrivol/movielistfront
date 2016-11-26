import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Http, Response, Request, RequestOptions, Headers, RequestMethod } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Login } from '../model/login';

@Injectable()
export class LoginService {

  private loginUrl = 'http://localhost:3000/api/auth/login/';

  constructor(
    private http: Http,
    private router: Router
    ) { }

  login(login: Login): Observable<any> {

    let options = new RequestOptions();

    return this.http.post(this.loginUrl, login, options)
    .map((response: Response) => {
      let data = response.json();

      if (!data || !data.success || !data.token) {
          let errorMessage = '';
          
          if (data && data.message)
              errorMessage = data.message;

          return { success: false, message: errorMessage };
      }

      localStorage.setItem("userToken", data.token);
      this.router.navigate(['']);
      return { success: true }; 
    });
  }

  logout() {
    if (localStorage.getItem("userToken")) 
        localStorage.removeItem("userToken");
    this.router.navigate(['/login']);
  }

  checkLogged() {
    if (localStorage.getItem("userToken") === null){
        return false;
    }

    return true;
  }

}

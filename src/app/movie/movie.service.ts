import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Movie } from '../model/movie';
import { LoginService } from '../login/login.service';

@Injectable()
export class MovieService {

  private moviesUrl = 'http://localhost:3000/api/movies/';

  constructor(
    private http: Http,
    private loginService: LoginService
  ) { }

  getMovies(): Observable<Movie[]>{
    let options = new RequestOptions({ headers: new Headers({ 'x-access-token': localStorage.getItem("userToken") }) });

    return this.http.get(this.moviesUrl, options)
    .map((response: Response, index: Number) => {
      let data = response.json();
      return data || null; 
    })
    .catch((err) => {
      if (err.status == 401) {
        this.loginService.logout();
      }
      return Observable.from([]);
    });
  };

}

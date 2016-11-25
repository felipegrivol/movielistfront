import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response, RequestOptions } from '@angular/http';

import { Movie } from '../model/movie';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(): Movie[]{
    let movie = new Movie();
    movie.title = "Matrix";
    
    let movie1 = new Movie();
    movie1.title = "Senhor dos Anéis";
    
    let movies: Movie[] = [movie, movie1];

    return movies;
  }
}

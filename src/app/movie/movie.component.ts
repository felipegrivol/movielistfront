import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';
import { Movie } from '../model/movie';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [LoginService, MovieService]
})
export class MovieComponent implements OnInit {

  movies: Movie[];

  constructor(private loginService: LoginService, private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

}

import { Component, OnInit } from '@angular/core';

import { MovieService } from './movie.service';
import { Movie } from '../model/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  providers: [MovieService]
})
export class MovieComponent implements OnInit {

  errorMsg: string = '';;
  movies: Movie[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMovies().subscribe(
      movies => this.movies = movies,
      error => this.errorMsg = error);
  }

}

import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: any[] = [];
  banners: string[] = [];
  titles: string[] = [];
  ids: string[] = [];

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    const request = await this.moviesService.getTrending();
    this.movies = request;

    this.movies.forEach(movie => {
      this.banners.push(movie.backdrop_path);
      this.ids.push(movie.id);
      if (movie.title != null) {
        this.titles.push(movie.title);
      } else {
        this.titles.push(movie.name);
      }
    });
  }
}

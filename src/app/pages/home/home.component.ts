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
  mediaTypes: string[] = [];
  logos: string[] = [];


  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    const request = await this.moviesService.getTrending();
    this.movies = request;

    let randomNumbers = [];
    for (let i = 0; i < 5; i++) {
      randomNumbers.push(Math.floor(Math.random() * 19));
    }

    console.log(randomNumbers);

    for (let i = 0; i < this.movies.length; i++) {
      const movie = this.movies[i];

      if (randomNumbers.includes(i)) {
        this.banners.push(movie.backdrop_path);
        this.ids.push(movie.id);
        this.mediaTypes.push(movie.media_type);
        if (movie.title != null) {
          this.titles.push(movie.title);
        } else {
          this.titles.push(movie.name);
        }
      }
    }

    this.getLogos();
  }

  async getLogos() {

    for (let i = 0; i < this.ids.length; i++) {
      const id = this.ids[i];

      let mediaType: string = '';
      let language = 'pt';

      if (this.mediaTypes[i] === 'movie') {
        mediaType = 'movie';
      } else {
        mediaType = 'tv';
      }

      let logo = await this.moviesService.getLogos(parseInt(id), mediaType, language);

      if (!logo) {
        logo = await this.moviesService.getLogos(parseInt(id), mediaType, 'en');
      }

      this.logos.push(logo);
    }
  }
}

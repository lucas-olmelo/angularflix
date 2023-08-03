import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  imageUrl: string = 'https://image.tmdb.org/t/p/original';
  episodes: any[] = [];
  details: any;
  seasons: any[] = [];
  cast: any[] = [];
  crew: any[] = [];

  directors: any[] = [];
  producers: any[] = [];
  exProducers: any[] = [];
  writers: any[] = [];
  editors: any[] = [];

  logoMovie: string = ''

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getId(): string {
    let id: string | null = '';
    this.route.paramMap.subscribe( value =>
      {id = value.get('id')});
    return id;
  }

  getMediaType(): string {
    let mediaType: string | null = '';
    this.route.paramMap.subscribe( value =>
      {mediaType = value.get('type')});
    return mediaType;
  }

  async getMovieDetails(){
    const id = this.getId();
    let request;

    if (this.getMediaType() === 'movie') {
      request = await this.moviesService.getMovie(id);
      this.details = request;
    } else {
      request = await this.moviesService.getShow(id);
      this.details = request;
      this.details.seasons.forEach((season: any) => {
        if (season.name != 'Especiais') {
          this.seasons.push(season);
        }
      });
    }
    this.getCrew();
  }

  async getSeason(season: number) {
    const id = this.getId();
    let request;
    this.episodes = [];
    request = await this.moviesService.getSeason(parseInt(id), season);

    const data = new Date();

    request.forEach(episode => {
      let dataEp = new Date(episode.air_date);

      if (dataEp <= data) {
        this.episodes.push(episode);
      }
    });
  }


  async getLogo() {

    let language = 'pt';

    let logo = await this.moviesService.getLogos(parseInt(this.getId()), this.getMediaType(), language);

    if (!logo) {
      logo = await this.moviesService.getLogos(parseInt(this.getId()), this.getMediaType(), 'en');
    }

    console.log(this.imageUrl + logo.file_path);

    this.logoMovie = this.imageUrl + logo.file_path;
  }

  async getCrew() {
    const id = this.getId();
    const mediaType = this.getMediaType();
    let request;

    request = await this.moviesService.getCrew(id, mediaType);
    this.cast = request.cast;

    request.crew.forEach((crew: any) => {
      if (crew.job === 'Producer') {
        this.producers.push(crew);
      }
      if (crew.job === 'Director') {
        this.directors.push(crew);
      }
      if (crew.job === 'Executive Producer') {
        this.exProducers.push(crew);
      }
      if (crew.job === 'Writer') {
        this.writers.push(crew);
      }
      if (crew.job === 'Story Editor') {
        this.editors.push(crew);
      }
    });
  }
}

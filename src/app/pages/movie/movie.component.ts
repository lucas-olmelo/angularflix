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
      this.getLogos();
    } else {
      request = await this.moviesService.getShow(id);
      this.details = request;
      this.getLogos();
      this.details.seasons.forEach((season: any) => {
        if (season.name != 'Especiais') {
          this.seasons.push(season);
        }
      });
    }
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
    console.log(this.episodes);
  }


  async getLogos() {

    let mediaType: string = '';
    let language = 'pt';

    console.log(this.getId());
    console.log(this.getMediaType());
    
    if (this.getMediaType() === 'movie') {
      mediaType = 'movie';
    } else {
      mediaType = 'tv';
    }

    let logo = await this.moviesService.getLogos(parseInt(this.getId()), mediaType, language);

    if (!logo) {
      console.log('sim');
      logo = await this.moviesService.getLogos(parseInt(this.getId()), mediaType, 'en');
    }

    return this.imageUrl + logo;
  }
}

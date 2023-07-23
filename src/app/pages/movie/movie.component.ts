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
    } else {
      request = await this.moviesService.getShow(id);
    }
    this.details = request;
    this.details.seasons.forEach((season: any) => {
      if (season.name != 'Especiais') {
        this.seasons.push(season);
      }
    });
  }

  async getSeason(season: number) {
    const id = this.getId();
    let request;
    request = await this.moviesService.getSeason(parseInt(id), season);
    request.forEach(episode => {
      if (episode.overview != '') {
        this.episodes.push(episode);
      }
    });
    console.log(this.episodes);
  }
}

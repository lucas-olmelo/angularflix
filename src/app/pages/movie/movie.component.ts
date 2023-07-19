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
  details: any;

  ngOnInit(): void {
    this.getMovieDetails();
  }

  getMovieId(): string {
    let id: string | null = '';
    this.route.paramMap.subscribe( value =>
      {id = value.get('id')});
    return id;
  }

  async getMovieDetails(){
    const id = this.getMovieId();

    const request = await this.moviesService.getMovie(id);
    this.details = request;
  }

}

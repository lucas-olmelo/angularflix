import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movie-poster',
  templateUrl: './movie-poster.component.html',
  styleUrls: ['./movie-poster.component.css']
})
export class MoviePosterComponent implements OnInit {

  constructor() { }

  @Input() movie: any;
  id: number = 0;

  baseUrl = "https://image.tmdb.org/t/p/original/"

  ngOnInit(): void {
    this.id = this.movie.id;
    console.log(this.id);

  }

}

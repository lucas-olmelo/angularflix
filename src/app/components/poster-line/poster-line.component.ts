import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-poster-line',
  templateUrl: './poster-line.component.html',
  styleUrls: ['./poster-line.component.css']
})
export class PosterLineComponent implements OnInit {

  constructor() { }

  @Input() movies:any;

  ngOnInit(): void {
  }
}

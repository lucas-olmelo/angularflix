import { Component, OnInit, Input } from '@angular/core';

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

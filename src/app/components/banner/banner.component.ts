import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() banner: any;
  baseUrl = "https://image.tmdb.org/t/p/original/"

  ngOnInit(): void {
  }

}

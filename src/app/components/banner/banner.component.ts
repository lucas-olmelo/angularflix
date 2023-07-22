import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  @Input() episode: any;
  baseUrl = "https://image.tmdb.org/t/p/original/"

  ngOnInit(): void {
  }

  convertMinutes(): string {
    const minutes = this.episode.runtime;

    let hours = Math.floor(minutes / 60);
    let minutesRemaining = minutes % 60;

    if (hours > 0) {
      return hours + 'h' + String(minutesRemaining).padStart(2, '0') + 'm';
    } else {
      return String(minutesRemaining).padStart(2, '0') + 'm';
    }
  }

}

import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-media-list',
  templateUrl: './media-list.component.html',
  styleUrls: ['./media-list.component.css']
})
export class MediaListComponent implements OnInit, OnChanges {
  topRated: any[] = [];
  popular: any[] = [];

  constructor(private route: ActivatedRoute, private moviesService: MoviesService) { }

  ngOnChanges(): void {
    this.getTopRated();
    this.getPopular();
  }

  ngOnInit(): void {
    this.getTopRated();
    this.getPopular();
  }

  // ngAfterViewChecked(): void {
  //   this.getTopRated();
  //   this.getPopular();
  // }

  getMediaType(): string {
    let mediaType: string | null = '';
    this.route.paramMap.subscribe( value =>
      {mediaType = value.get('type')});
    return mediaType;
  }

  async getTopRated() {
    const request = await this.moviesService.getPopularTopRated(this.getMediaType(), 'top_rated');
    this.topRated = request;

    this.topRated.forEach(movie => {
      movie.media_type = this.getMediaType();
    });

    console.log('toprated');

  }

  async getPopular() {
    const request = await this.moviesService.getPopularTopRated(this.getMediaType(), 'popular');
    this.popular = request;

    this.popular.forEach(movie => {
      movie.media_type = this.getMediaType();
    });

    console.log('popular');

  }

}

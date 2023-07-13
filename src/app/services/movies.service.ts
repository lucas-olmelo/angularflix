import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor(private http: HttpClient) { }

  config = {
    api_key: '906ee8fec43965cfb3accc4205c359ec',
    api_base_url: 'https://api.themoviedb.org/3/',
    image_base_url: 'https://image.tmdb.org/t/p/original'
  }

  BASE_URL = this.config.api_base_url
  API_KEY = this.config.api_key

  public async getTrending(page = 1): Promise<any[]> {
    let data = []
    try {
        const response = await fetch(`${this.BASE_URL}/trending/all/week?language=pt-BR&api_key=${this.API_KEY}&page=${page}`);
        const responseData = await response.json();
        data = responseData?.results;
        console.log(data);
    } catch (error) {

    }
    return data
  }

  // API_URL = 'https://api.themoviedb.org/3/trending/all/week?language=pt-Br&?language=pt-Br&api_key=906ee8fec43965cfb3accc4205c359ec';

  /**
   * getMovies
   * https://image.tmdb.org/t/p/
   */
  // public async getTrending(): Promise<any[]> {

  //   let data: any[] = [];

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDZlZThmZWM0Mzk2NWNmYjNhY2NjNDIwNWMzNTllYyIsInN1YiI6IjY0YTRhYjZlMWJmMjY2MDEwNTE3YTEwYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.W1fdm0WzY4YQNHbmWl3bDi5gWUUYTkepRBdVPZGFVqk'
  //     }
  //   };

  //   fetch('https://api.themoviedb.org/3/trending/all/week?language=pt-BR', options)
  //     .then(response => response.json())
  //     .then(response => {
  //       data = response.results
  //       console.log(data);
  //     })
  //     .catch(err => console.error(err));

  //     return data;
  // }
}

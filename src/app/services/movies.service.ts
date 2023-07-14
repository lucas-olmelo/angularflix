import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

  config = {
    api_key: '906ee8fec43965cfb3accc4205c359ec',
    api_base_url: 'https://api.themoviedb.org/3/',
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
}

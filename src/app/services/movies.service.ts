import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  constructor() { }

  config = {
    api_key: '906ee8fec43965cfb3accc4205c359ec',
    api_base_url: 'https://api.themoviedb.org/3',
  }

  BASE_URL = this.config.api_base_url
  API_KEY = this.config.api_key

  public async getTrending(page = 1): Promise<any[]> {
    let data = []
    try {
        const response = await fetch(`${this.BASE_URL}/trending/all/week?language=pt-BR&api_key=${this.API_KEY}&page=${page}`);
        const responseData = await response.json();
        data = responseData?.results;
    } catch (error) {

    }
    return data
  }

  public async getMovie(id: string): Promise<any[]> {

    let data = []
    try {
        const response = await fetch(`${this.BASE_URL}/movie/${id}?language=pt-BR&api_key=${this.API_KEY}`);
        const responseData = await response.json();
        data = responseData;
    } catch (error) {

    }
    return data
  }

  public async getShow(id: string): Promise<any[]> {

    let data = []
    try {
        const response = await fetch(`${this.BASE_URL}/tv/${id}?language=pt-BR&api_key=${this.API_KEY}`);
        const responseData = await response.json();
        data = responseData;
    } catch (error) {

    }
    return data
  }

  public async getSeason(id: number, season: number): Promise<any[]> {

    let data = []
    try {
        const response = await fetch(`${this.BASE_URL}/tv/${id}/season/${season}?language=pt-BR&api_key=${this.API_KEY}`);
        const responseData = await response.json();
        data = responseData.episodes;
    } catch (error) {

    }
    return data
  }

  public async getLogos(id: number, mediaType: string, language: string) {
    let data = []
    try {
        const response = await fetch(`${this.BASE_URL}/${mediaType}/${id}/images?language=${language}&api_key=${this.API_KEY}`);
        const responseData = await response.json();
        data = responseData.logos[0];
    } catch (error) {

    }
    return data;
  }

  public async getCrew(id: string, mediaType: string){
    let data = [];
    try {
        const response = await fetch(`${this.BASE_URL}/${mediaType}/${id}/credits?language=pt-BR&api_key=${this.API_KEY}`);
        const responseData = await response.json();
        data = responseData;
    } catch (error) {

    }
    return data;
  }

  // API_URL = 'https://api.themoviedb.org/3/trending/all/week?language=pt-Br&?language=pt-Br&api_key=906ee8fec43965cfb3accc4205c359ec';

  /**
   * getMovies
   * https://image.tmdb.org/t/p/
   */
}

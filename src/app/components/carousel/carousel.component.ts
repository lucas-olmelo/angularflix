import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {

  constructor() { }

  baseUrl = "https://image.tmdb.org/t/p/original";

  // Guarda a referência do temporizador.
  // Assim conseguimos interromper o temporizador
  // a qualquer momento
  timerSubs!: Subscription;

  // Array com a URL das imagens que serão exibidas
  // no carrossel
  @Input() slides: string[] = [];
  @Input() titles: string[] = [];
  @Input() ids: string[] = [];
  @Input() mediaTypes: string[] = [];

  // Guarda a posição no array "imagens" que
  // corresponde a imagem que está sendo exibida
  // no carrossel
  private _indexImagemAtiva: number = 0;
  get indexImagemAtiva() {
    return this._indexImagemAtiva;
  }

  set indexImagemAtiva(value: number) {
    this._indexImagemAtiva =
      value < this.slides.length ? value : 0;
  }

  ngOnInit(): void {
    this.iniciarTimer();
  }

  ngOnDestroy(): void {
    this.pararTimer();
  }

  iniciarTimer(): void {
    this.timerSubs = timer(6000).subscribe(() => {
      this.ativarImagem(
        this.indexImagemAtiva + 1
      );
    });
  }

  pararTimer(): void {
    this.timerSubs?.unsubscribe();
  }

  ativarImagem(index: number): void {
    this.indexImagemAtiva = index;
    this.iniciarTimer();
  }

  getCurrentSlideUrl() {
    return this.baseUrl + this.slides[this.indexImagemAtiva];
  }

  getMovieTitle(){
    return this.titles[this.indexImagemAtiva];
  }

  getMovieId(){
    return this.ids[this.indexImagemAtiva];
  }

  getMediaType(){
    return this.mediaTypes[this.indexImagemAtiva];
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { MoviePosterComponent } from './components/movie-poster/movie-poster.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { PosterLineComponent } from './components/poster-line/poster-line.component';
import { MovieComponent } from './pages/movie/movie.component';
import { BannerComponent } from './components/banner/banner.component';
import { MediaListComponent } from './pages/media-list/media-list.component';
import { ActorComponent } from './components/actor/actor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MoviePosterComponent,
    CarouselComponent,
    PosterLineComponent,
    MovieComponent,
    BannerComponent,
    MediaListComponent,
    ActorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

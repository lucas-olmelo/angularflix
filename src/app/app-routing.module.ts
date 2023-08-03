import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MovieComponent } from './pages/movie/movie.component';
import { MediaListComponent } from './pages/media-list/media-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:':type',
    component: MediaListComponent
  },
  {
    path:':type/:id',
    component: MovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

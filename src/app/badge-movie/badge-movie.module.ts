import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgeMoviePage } from './badge-movie.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeMoviePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BadgeMoviePage]
})
export class BadgeMoviePageModule {}

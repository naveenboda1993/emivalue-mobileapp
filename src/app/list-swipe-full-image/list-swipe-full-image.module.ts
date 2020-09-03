import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSwipeFullImagePage } from './list-swipe-full-image.page';

const routes: Routes = [
  {
    path: '',
    component: ListSwipeFullImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSwipeFullImagePage]
})
export class ListSwipeFullImagePageModule {}

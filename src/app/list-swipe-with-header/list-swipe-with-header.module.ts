import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSwipeWithHeaderPage } from './list-swipe-with-header.page';

const routes: Routes = [
  {
    path: '',
    component: ListSwipeWithHeaderPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSwipeWithHeaderPage]
})
export class ListSwipeWithHeaderPageModule {}

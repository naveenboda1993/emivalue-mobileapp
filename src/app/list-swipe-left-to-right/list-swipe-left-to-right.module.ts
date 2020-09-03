import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSwipeLeftToRightPage } from './list-swipe-left-to-right.page';

const routes: Routes = [
  {
    path: '',
    component: ListSwipeLeftToRightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSwipeLeftToRightPage]
})
export class ListSwipeLeftToRightPageModule {}

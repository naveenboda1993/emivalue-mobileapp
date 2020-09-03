import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSwipeRightToLeftPage } from './list-swipe-right-to-left.page';

const routes: Routes = [
  {
    path: '',
    component: ListSwipeRightToLeftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSwipeRightToLeftPage]
})
export class ListSwipeRightToLeftPageModule {}

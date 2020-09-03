import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSlideRightPage } from './list-slide-right.page';

const routes: Routes = [
  {
    path: '',
    component: ListSlideRightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSlideRightPage]
})
export class ListSlideRightPageModule {}

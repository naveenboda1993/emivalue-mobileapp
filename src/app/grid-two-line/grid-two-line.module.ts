import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridTwoLinePage } from './grid-two-line.page';

const routes: Routes = [
  {
    path: '',
    component: GridTwoLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridTwoLinePage]
})
export class GridTwoLinePageModule {}

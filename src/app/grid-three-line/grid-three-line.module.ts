import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridThreeLinePage } from './grid-three-line.page';

const routes: Routes = [
  {
    path: '',
    component: GridThreeLinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridThreeLinePage]
})
export class GridThreeLinePageModule {}

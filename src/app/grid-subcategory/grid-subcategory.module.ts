import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GridSubcategoryPage } from './grid-subcategory.page';

const routes: Routes = [
  {
    path: '',
    component: GridSubcategoryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GridSubcategoryPage]
})
export class GridSubcategoryPageModule {}

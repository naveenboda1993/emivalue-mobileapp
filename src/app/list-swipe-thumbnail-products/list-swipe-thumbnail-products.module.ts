import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSwipeThumbnailProductsPage } from './list-swipe-thumbnail-products.page';

const routes: Routes = [
  {
    path: '',
    component: ListSwipeThumbnailProductsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSwipeThumbnailProductsPage]
})
export class ListSwipeThumbnailProductsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchbarWithImagesPage } from './searchbar-with-images.page';

const routes: Routes = [
  {
    path: '',
    component: SearchbarWithImagesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SearchbarWithImagesPage]
})
export class SearchbarWithImagesPageModule {}

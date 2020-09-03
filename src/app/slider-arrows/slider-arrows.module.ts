import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SliderArrowsPage } from './slider-arrows.page';

const routes: Routes = [
  {
    path: '',
    component: SliderArrowsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SliderArrowsPage]
})
export class SliderArrowsPageModule {}

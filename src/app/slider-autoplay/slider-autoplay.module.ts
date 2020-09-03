import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SliderAutoplayPage } from './slider-autoplay.page';

const routes: Routes = [
  {
    path: '',
    component: SliderAutoplayPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SliderAutoplayPage]
})
export class SliderAutoplayPageModule {}

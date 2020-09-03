import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RadioSquareWithBigImagePage } from './radio-square-with-big-image.page';

const routes: Routes = [
  {
    path: '',
    component: RadioSquareWithBigImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RadioSquareWithBigImagePage]
})
export class RadioSquareWithBigImagePageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ParallaxHeaderImagePage } from './parallax-header-image.page';

const routes: Routes = [
  {
    path: '',
    component: ParallaxHeaderImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ParallaxHeaderImagePage]
})
export class ParallaxHeaderImagePageModule {}

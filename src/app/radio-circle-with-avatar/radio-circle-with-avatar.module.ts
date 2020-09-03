import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RadioCircleWithAvatarPage } from './radio-circle-with-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: RadioCircleWithAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RadioCircleWithAvatarPage]
})
export class RadioCircleWithAvatarPageModule {}

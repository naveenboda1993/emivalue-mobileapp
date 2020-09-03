import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RadioSimpleRightPage } from './radio-simple-right.page';

const routes: Routes = [
  {
    path: '',
    component: RadioSimpleRightPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RadioSimpleRightPage]
})
export class RadioSimpleRightPageModule {}

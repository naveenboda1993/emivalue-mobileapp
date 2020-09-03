import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormForgetTwoPage } from './form-forget-two.page';

const routes: Routes = [
  {
    path: '',
    component: FormForgetTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormForgetTwoPage]
})
export class FormForgetTwoPageModule {}

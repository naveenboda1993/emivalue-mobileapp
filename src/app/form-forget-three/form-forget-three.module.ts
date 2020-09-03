import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormForgetThreePage } from './form-forget-three.page';

const routes: Routes = [
  {
    path: '',
    component: FormForgetThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormForgetThreePage]
})
export class FormForgetThreePageModule {}

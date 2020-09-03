import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormForgetOnePage } from './form-forget-one.page';

const routes: Routes = [
  {
    path: '',
    component: FormForgetOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormForgetOnePage]
})
export class FormForgetOnePageModule {}

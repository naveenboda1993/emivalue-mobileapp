import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormRegisterTwoPage } from './form-register-two.page';

const routes: Routes = [
  {
    path: '',
    component: FormRegisterTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule ,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormRegisterTwoPage]
})
export class FormRegisterTwoPageModule {}

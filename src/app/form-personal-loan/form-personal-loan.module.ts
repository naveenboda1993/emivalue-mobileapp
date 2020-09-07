import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FormPersonalLoanPage as FormPersonalLoanPage } from './form-personal-loan.page';

const routes: Routes = [
  {
    path: '',
    component: FormPersonalLoanPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormPersonalLoanPage]
})
export class FormPersonalPageModule {}

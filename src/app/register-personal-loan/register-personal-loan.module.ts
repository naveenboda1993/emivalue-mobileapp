import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPersonalLoanPage as RegisterPersonalLoanPage } from './register-personal-loan.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPersonalLoanPage
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
  declarations: [RegisterPersonalLoanPage]
})
export class RegisterPersonalLoanPageModule {}

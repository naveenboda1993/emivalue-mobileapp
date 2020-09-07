import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterPersonalLoan2Page as RegisterPersonalLoan2Page } from './register-personal-loan2.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterPersonalLoan2Page
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
  declarations: [RegisterPersonalLoan2Page]
})
export class RegisterPersonalLoan2PageModule {}

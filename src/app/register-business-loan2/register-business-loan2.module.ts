import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RegisterBusinessLoan2Page } from './register-business-loan2.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterBusinessLoan2Page
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
  declarations: [RegisterBusinessLoan2Page]
})
export class RegisterBusinessLoan2PageModule {}

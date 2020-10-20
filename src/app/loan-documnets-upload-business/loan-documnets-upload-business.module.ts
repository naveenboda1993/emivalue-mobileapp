import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoanDocumnetsUploadBusinessTextPage } from './loan-documnets-upload-business.page';

const routes: Routes = [
  {
    path: '',
    component: LoanDocumnetsUploadBusinessTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoanDocumnetsUploadBusinessTextPage]
})
export class LoanDocumnetsUploadBusinessTextPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LoanDocumnetsUploadTextPage } from './loan-documnets-upload.page';

const routes: Routes = [
  {
    path: '',
    component: LoanDocumnetsUploadTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoanDocumnetsUploadTextPage]
})
export class LoanDocumnetsUploadTextPageModule {}

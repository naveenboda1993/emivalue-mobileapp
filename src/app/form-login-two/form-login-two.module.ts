import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormLoginTwoPage } from './form-login-two.page';

const routes: Routes = [
  {
    path: '',
    component: FormLoginTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormLoginTwoPage]
})
export class FormLoginTwoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormLoginThreePage } from './form-login-three.page';

const routes: Routes = [
  {
    path: '',
    component: FormLoginThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FormLoginThreePage]
})
export class FormLoginThreePageModule {}

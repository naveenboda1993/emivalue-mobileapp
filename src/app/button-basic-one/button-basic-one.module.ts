import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonBasicOnePage } from './button-basic-one.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonBasicOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ButtonBasicOnePage]
})
export class ButtonBasicOnePageModule {}

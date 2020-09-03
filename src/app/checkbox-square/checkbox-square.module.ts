import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckboxSquarePage } from './checkbox-square.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxSquarePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckboxSquarePage]
})
export class CheckboxSquarePageModule {}

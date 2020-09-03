import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionsheetSimplePage } from './actionsheet-simple.page';

const routes: Routes = [
  {
    path: '',
    component: ActionsheetSimplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionsheetSimplePage]
})
export class ActionsheetSimplePageModule {}

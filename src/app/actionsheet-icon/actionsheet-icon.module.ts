import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActionsheetIconPage } from './actionsheet-icon.page';

const routes: Routes = [
  {
    path: '',
    component: ActionsheetIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActionsheetIconPage]
})
export class ActionsheetIconPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ToastMiddlePage } from './toast-middle.page';

const routes: Routes = [
  {
    path: '',
    component: ToastMiddlePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToastMiddlePage]
})
export class ToastMiddlePageModule { }

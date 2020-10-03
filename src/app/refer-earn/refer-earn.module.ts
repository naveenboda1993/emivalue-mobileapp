import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ReferEarnPage } from './refer-earn.page';
import { MiAccordionPageModule } from '../components/mi-accordion/mi-accordion.module';

const routes: Routes = [
  {
    path: '',
    component: ReferEarnPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule, MiAccordionPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReferEarnPage]
})
export class ReferEarnPageModule { }

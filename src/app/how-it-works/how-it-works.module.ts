import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HowItWorksPage } from './how-it-works.page';
import { MiAccordionPageModule } from '../components/mi-accordion/mi-accordion.module';
const routes: Routes = [
  {
    path: '',
    component: HowItWorksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule, MiAccordionPageModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HowItWorksPage]
})
export class HowItWorksPageModule { }

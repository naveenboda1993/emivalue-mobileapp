import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HowItWorksPage } from './how-it-works.page';
import { MiAccordionComponent } from '../components/mi-accordion/mi-accordion.component';
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
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HowItWorksPage, MiAccordionComponent]
})
export class HowItWorksPageModule {}

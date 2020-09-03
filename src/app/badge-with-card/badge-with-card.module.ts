import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgeWithCardPage } from './badge-with-card.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeWithCardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BadgeWithCardPage]
})
export class BadgeWithCardPageModule {}

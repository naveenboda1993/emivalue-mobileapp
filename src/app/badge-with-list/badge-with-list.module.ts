import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgeWithListPage } from './badge-with-list.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeWithListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BadgeWithListPage]
})
export class BadgeWithListPageModule {}

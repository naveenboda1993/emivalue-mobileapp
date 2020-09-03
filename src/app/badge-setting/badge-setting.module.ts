import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgeSettingPage } from './badge-setting.page';

const routes: Routes = [
  {
    path: '',
    component: BadgeSettingPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BadgeSettingPage]
})
export class BadgeSettingPageModule {}

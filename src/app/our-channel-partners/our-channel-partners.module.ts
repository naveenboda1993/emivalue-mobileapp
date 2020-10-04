import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { OurChannelPartnersPage } from './our-channel-partners.page';

const routes: Routes = [
  {
    path: '',
    component: OurChannelPartnersPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [OurChannelPartnersPage]
})
export class OurChannelPartnersPageModule {}


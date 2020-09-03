import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentFooterTextIconPage } from './segment-footer-text-icon.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentFooterTextIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegmentFooterTextIconPage]
})
export class SegmentFooterTextIconPageModule {}

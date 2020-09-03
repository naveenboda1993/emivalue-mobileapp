import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentFooterIconPage } from './segment-footer-icon.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentFooterIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegmentFooterIconPage]
})
export class SegmentFooterIconPageModule {}

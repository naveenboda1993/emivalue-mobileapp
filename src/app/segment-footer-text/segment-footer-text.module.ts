import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentFooterTextPage } from './segment-footer-text.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentFooterTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegmentFooterTextPage]
})
export class SegmentFooterTextPageModule {}

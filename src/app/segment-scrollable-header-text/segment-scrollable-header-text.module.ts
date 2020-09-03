import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentScrollableHeaderTextPage } from './segment-scrollable-header-text.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentScrollableHeaderTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegmentScrollableHeaderTextPage]
})
export class SegmentScrollableHeaderTextPageModule {}

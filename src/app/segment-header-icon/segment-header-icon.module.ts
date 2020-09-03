import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentHeaderIconPage } from './segment-header-icon.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentHeaderIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegmentHeaderIconPage]
})
export class SegmentHeaderIconPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SegmentHeaderTextPage } from './segment-header-text.page';

const routes: Routes = [
  {
    path: '',
    component: SegmentHeaderTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SegmentHeaderTextPage]
})
export class SegmentHeaderTextPageModule {}

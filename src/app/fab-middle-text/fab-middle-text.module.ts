import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabMiddleTextPage } from './fab-middle-text.page';

const routes: Routes = [
  {
    path: '',
    component: FabMiddleTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabMiddleTextPage]
})
export class FabMiddleTextPageModule {}

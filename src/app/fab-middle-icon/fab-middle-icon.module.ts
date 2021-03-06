import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabMiddleIconPage } from './fab-middle-icon.page';

const routes: Routes = [
  {
    path: '',
    component: FabMiddleIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabMiddleIconPage]
})
export class FabMiddleIconPageModule {}

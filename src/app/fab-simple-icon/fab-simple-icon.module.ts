import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FabSimpleIconPage } from './fab-simple-icon.page';

const routes: Routes = [
  {
    path: '',
    component: FabSimpleIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabSimpleIconPage]
})
export class FabSimpleIconPageModule {}

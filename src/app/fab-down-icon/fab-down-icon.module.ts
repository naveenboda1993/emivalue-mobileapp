import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabDownIconPage } from './fab-down-icon.page';

const routes: Routes = [
  {
    path: '',
    component: FabDownIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabDownIconPage]
})
export class FabDownIconPageModule {}

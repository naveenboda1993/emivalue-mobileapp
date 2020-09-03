import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabLeftIconPage } from './fab-left-icon.page';

const routes: Routes = [
  {
    path: '',
    component: FabLeftIconPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabLeftIconPage]
})
export class FabLeftIconPageModule {}

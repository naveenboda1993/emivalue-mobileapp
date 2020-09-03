import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabDownTextPage } from './fab-down-text.page';

const routes: Routes = [
  {
    path: '',
    component: FabDownTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabDownTextPage]
})
export class FabDownTextPageModule {}

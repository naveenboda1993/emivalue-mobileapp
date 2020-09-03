import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonTransparentPage } from './button-transparent.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonTransparentPage
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ButtonTransparentPage]
})
export class ButtonTransparentPageModule {}

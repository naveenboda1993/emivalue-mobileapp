import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonBasicTwoPage } from './button-basic-two.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonBasicTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ButtonBasicTwoPage]
})
export class ButtonBasicTwoPageModule {}

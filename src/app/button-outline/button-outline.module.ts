import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ButtonOutlinePage } from './button-outline.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonOutlinePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ButtonOutlinePage]
})
export class ButtonOutlinePageModule {}

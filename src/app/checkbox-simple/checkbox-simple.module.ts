import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckboxSimplePage } from './checkbox-simple.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxSimplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckboxSimplePage]
})
export class CheckboxSimplePageModule {}

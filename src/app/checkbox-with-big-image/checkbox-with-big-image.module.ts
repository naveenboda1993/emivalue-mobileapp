import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CheckboxWithBigImagePage } from './checkbox-with-big-image.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxWithBigImagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckboxWithBigImagePage]
})
export class CheckboxWithBigImagePageModule {}

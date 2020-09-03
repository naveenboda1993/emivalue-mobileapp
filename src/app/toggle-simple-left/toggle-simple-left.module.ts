import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ToggleSimpleLeftPage } from './toggle-simple-left.page';

const routes: Routes = [
  {
    path: '',
    component: ToggleSimpleLeftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToggleSimpleLeftPage]
})
export class ToggleSimpleLeftPageModule {}

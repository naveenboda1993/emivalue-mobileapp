import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListSlideLeftPage } from './list-slide-left.page';

const routes: Routes = [
  {
    path: '',
    component: ListSlideLeftPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListSlideLeftPage]
})
export class ListSlideLeftPageModule {}

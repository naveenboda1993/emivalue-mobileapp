import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CardShopingSimplePage } from './card-shoping-simple.page';

const routes: Routes = [
  {
    path: '',
    component: CardShopingSimplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardShopingSimplePage]
})
export class CardShopingSimplePageModule {}

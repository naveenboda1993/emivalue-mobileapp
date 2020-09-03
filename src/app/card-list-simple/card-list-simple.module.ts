import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardListSimplePage } from './card-list-simple.page';

const routes: Routes = [
  {
    path: '',
    component: CardListSimplePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardListSimplePage]
})
export class CardListSimplePageModule {}

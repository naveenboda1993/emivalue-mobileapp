import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardListAvatarPage } from './card-list-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: CardListAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardListAvatarPage]
})
export class CardListAvatarPageModule {}

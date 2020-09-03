import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardTimelineThemeTwoPage } from './card-timeline-theme-two.page';

const routes: Routes = [
  {
    path: '',
    component: CardTimelineThemeTwoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardTimelineThemeTwoPage]
})
export class CardTimelineThemeTwoPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardTimelineThemeThreePage } from './card-timeline-theme-three.page';

const routes: Routes = [
  {
    path: '',
    component: CardTimelineThemeThreePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardTimelineThemeThreePage]
})
export class CardTimelineThemeThreePageModule {}

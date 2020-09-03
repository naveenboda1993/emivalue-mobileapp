import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CardTimelineThemeOnePage } from './card-timeline-theme-one.page';

const routes: Routes = [
  {
    path: '',
    component: CardTimelineThemeOnePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CardTimelineThemeOnePage]
})
export class CardTimelineThemeOnePageModule {}

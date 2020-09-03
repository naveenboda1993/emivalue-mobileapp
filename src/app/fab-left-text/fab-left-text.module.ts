import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabLeftTextPage } from './fab-left-text.page';

const routes: Routes = [
  {
    path: '',
    component: FabLeftTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabLeftTextPage]
})
export class FabLeftTextPageModule {}

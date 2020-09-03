import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabRightTextPage } from './fab-right-text.page';

const routes: Routes = [
  {
    path: '',
    component: FabRightTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabRightTextPage]
})
export class FabRightTextPageModule {}

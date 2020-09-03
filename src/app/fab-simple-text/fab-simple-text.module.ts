import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FabSimpleTextPage } from './fab-simple-text.page';

const routes: Routes = [
  {
    path: '',
    component: FabSimpleTextPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FabSimpleTextPage]
})
export class FabSimpleTextPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ToggleWithAvatarPage } from './toggle-with-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: ToggleWithAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ToggleWithAvatarPage]
})
export class ToggleWithAvatarPageModule {}

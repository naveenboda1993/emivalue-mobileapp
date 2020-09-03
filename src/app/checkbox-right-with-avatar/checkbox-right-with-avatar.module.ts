import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CheckboxRightWithAvatarPage } from './checkbox-right-with-avatar.page';

const routes: Routes = [
  {
    path: '',
    component: CheckboxRightWithAvatarPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CheckboxRightWithAvatarPage]
})
export class CheckboxRightWithAvatarPageModule {}

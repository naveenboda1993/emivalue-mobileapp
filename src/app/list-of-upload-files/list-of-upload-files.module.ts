import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListOfUploadFilesPage } from './list-of-upload-files.page';

const routes: Routes = [
  {
    path: '',
    component: ListOfUploadFilesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListOfUploadFilesPage]
})
export class ListOfUploadFilesPageModule {}

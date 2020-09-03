import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListExpandablePage } from './list-expandable.page';
//refernce ofexpand-list-component component
import { ExpandListComponentComponent } from '../components/expand-list-component/expand-list-component.component';

const routes: Routes = [
  {
    path: '',
    component: ListExpandablePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListExpandablePage, ExpandListComponentComponent]//add import name in declaration to avoid errors
})
export class ListExpandablePageModule { }

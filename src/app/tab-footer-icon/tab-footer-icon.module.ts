import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabFooterIconPage } from './tab-footer-icon.page';
//all paths for tabs navigation are define here below
const routes: Routes = [
  {
    path: 'tab-footer-icon',
    component: TabFooterIconPage,
    children: [
      {
        path: 'tab-chat',
        loadChildren: '../tab-chat/tab-chat.module#TabChatPageModule'
      },
      {
        path: 'tab-status',
        loadChildren: '../tab-status/tab-status.module#TabStatusPageModule'
      },
      {
        path: 'tab-call',
        loadChildren: '../tab-call/tab-call.module#TabCallPageModule'
      }
    ]
  },
  {
    path:'',
    redirectTo:'tab-footer-icon/tab-chat',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabFooterIconPage]
})
export class TabFooterIconPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabFooterTextIconBadgePage } from './tab-footer-text-icon-badge.page';
//all paths for tabs navigation are define here below
const routes: Routes = [
  {
    path: 'tab-footer-text-icon-badge',
    component: TabFooterTextIconBadgePage,
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
    redirectTo:'tab-footer-text-icon-badge/tab-chat',
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
  declarations: [TabFooterTextIconBadgePage]
})
export class TabFooterTextIconBadgePageModule {}

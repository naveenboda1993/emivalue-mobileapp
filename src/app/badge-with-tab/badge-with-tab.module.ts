import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BadgeWithTabPage } from './badge-with-tab.page';

const routes: Routes = [
  {
    path: 'badge-with-tab',
    component: BadgeWithTabPage,
    children: [
    { path: 'badge-movie',
      loadChildren: '../badge-movie/badge-movie.module#BadgeMoviePageModule'
    },
    { path: 'badge-card',
      loadChildren: '../badge-card/badge-card.module#BadgeCardPageModule' 
    },
    { path: 'badge-setting',
      loadChildren: '../badge-setting/badge-setting.module#BadgeSettingPageModule' 
    }
  ]
  },
  {
    path:'',
    redirectTo:'badge-with-tab/badge-setting',
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
  declarations: [BadgeWithTabPage]
})
export class BadgeWithTabPageModule {}

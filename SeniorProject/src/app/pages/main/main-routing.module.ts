
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: '',
    component: MainPage,
    children: [
      
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/home/home.module').then( m => m.HomePageModule),
          }
        ]
      },
      {
        path: 'permits',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/permits/permits.module').then( m => m.PermitsPageModule)
          }
        ]
      },
      {
        path: 'report',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)          }
        ]
      },
      {
        path: 'chatbot',
        children: [
          {
            path: '',
          //  loadChildren: () => import('src/app/pages/chat/chat.module').then( m => m.ChatPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () => import('src/app/pages/profile/profile.module').then( m => m.ProfilePageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
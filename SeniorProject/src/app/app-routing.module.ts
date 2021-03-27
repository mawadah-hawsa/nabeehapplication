import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
   canActivate:[AuthGuard]
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'page-not-found',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then( m => m.PageNotFoundPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'gathering-permission',
    loadChildren: () => import('./pages/gathering-permission/gathering-permission.module').then( m => m.GatheringPermissionPageModule)
  },
  {
    path: 'supplies-or-grocery',
    loadChildren: () => import('./pages/supplies-or-grocery/supplies-or-grocery.module').then( m => m.SuppliesOrGroceryPageModule)
  },
  {
    path: 'work',
    loadChildren: () => import('./pages/work/work.module').then( m => m.WorkPageModule)
  },
  {
    path: 'emergency',
    loadChildren: () => import('./pages/emergency/emergency.module').then( m => m.EmergencyPageModule)
  },
  {
    path: 'jogging',
    loadChildren: () => import('./pages/jogging/jogging.module').then( m => m.JoggingPageModule)
  },
  {
    path: 'other-emergency',
    loadChildren: () => import('./pages/other-emergency/other-emergency.module').then( m => m.OtherEmergencyPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/forgot-password/forgot-password.module').then( m => m.ForgotPasswordPageModule)
  },
  {
    path: 'permits',
    loadChildren: () => import('./pages/permits/permits.module').then( m => m.PermitsPageModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./pages/main/main.module').then( m => m.MainPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, relativeLinkResolution: 'legacy' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

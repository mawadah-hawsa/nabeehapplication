import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GatheringPermissionPage } from './gathering-permission.page';

const routes: Routes = [
  {
    path: '',
    component: GatheringPermissionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GatheringPermissionPageRoutingModule {}

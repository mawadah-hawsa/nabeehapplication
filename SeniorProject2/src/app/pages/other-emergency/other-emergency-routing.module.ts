import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OtherEmergencyPage } from './other-emergency.page';

const routes: Routes = [
  {
    path: '',
    component: OtherEmergencyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OtherEmergencyPageRoutingModule {}

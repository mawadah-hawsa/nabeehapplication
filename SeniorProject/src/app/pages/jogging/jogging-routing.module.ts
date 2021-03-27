import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JoggingPage } from './jogging.page';

const routes: Routes = [
  {
    path: '',
    component: JoggingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JoggingPageRoutingModule {}

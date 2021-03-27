import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuppliesOrGroceryPage } from './supplies-or-grocery.page';

const routes: Routes = [
  {
    path: '',
    component: SuppliesOrGroceryPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuppliesOrGroceryPageRoutingModule {}

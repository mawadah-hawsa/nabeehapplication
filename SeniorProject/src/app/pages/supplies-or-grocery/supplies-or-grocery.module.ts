import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuppliesOrGroceryPageRoutingModule } from './supplies-or-grocery-routing.module';

import { SuppliesOrGroceryPage } from './supplies-or-grocery.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuppliesOrGroceryPageRoutingModule
  ],
  declarations: [SuppliesOrGroceryPage]
})
export class SuppliesOrGroceryPageModule {}

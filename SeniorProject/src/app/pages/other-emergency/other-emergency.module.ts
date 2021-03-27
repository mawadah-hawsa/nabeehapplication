import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherEmergencyPageRoutingModule } from './other-emergency-routing.module';

import { OtherEmergencyPage } from './other-emergency.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherEmergencyPageRoutingModule
  ],
  declarations: [OtherEmergencyPage]
})
export class OtherEmergencyPageModule {}

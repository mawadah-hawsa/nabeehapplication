import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from '@ionic/angular';
import { PermitsPageRoutingModule } from './permits-routing.module';

import { PermitsPage } from './permits.page';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermitsPageRoutingModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyAs9zi1cMfD43nHSGNVRq3Soz-hjrYBKco"}) 
  ],
  declarations: [PermitsPage],
  providers: [
  AppComponent ///////
  ]
})
export class PermitsPageModule {}

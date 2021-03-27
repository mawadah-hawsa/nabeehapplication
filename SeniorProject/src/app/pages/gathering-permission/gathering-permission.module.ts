import { ErrorHandler, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GatheringPermissionPageRoutingModule } from './gathering-permission-routing.module';
import { GatheringPermissionPage } from './gathering-permission.page';
import { AgmCoreModule } from '@agm/core';
import { Geolocation } from '@ionic-native/geolocation/ngx'; 
//import { LaunchNavigator } from '@ionic-native/launch-navigator';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GatheringPermissionPageRoutingModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyAs9zi1cMfD43nHSGNVRq3Soz-hjrYBKco"}) 
  ],
  declarations: [
    GatheringPermissionPage
  ],
  providers: [
    Geolocation
  ]
})
export class GatheringPermissionPageModule {}

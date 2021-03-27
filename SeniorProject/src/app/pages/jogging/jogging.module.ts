import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JoggingPageRoutingModule } from './jogging-routing.module';

import { JoggingPage } from './jogging.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JoggingPageRoutingModule
  ],
  declarations: [JoggingPage]
})
export class JoggingPageModule {}

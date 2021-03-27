import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public appPages = [
    { title: 'Gathering Permission', url: '/gathering-permission', icon: 'people' },
    { title: 'Supplies Or Grocery', url: '/supplies-or-grocery', icon: 'storefront' },
    { title: 'For Work Or A Student', url: '/Work', icon: 'business' },
    { title: 'Medical Emergency Case', url: '/emergency', icon: 'medical' },
    { title: 'Jogging', url: '/Jogging', icon: 'walk' },
    { title: 'Other Emergency', url: '/other-emergency', icon: 'warning' },
  ];

  public Setting = [
    { title: 'Settings', url: '/home', icon: 'cog' }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private afauth: AngularFireAuth,
    private router: Router
  ) {
    this.initializeApp();
  }

  logout() {
    this.afauth.signOut().then(() => {
      this.router.navigate(['/login']);
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}

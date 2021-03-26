import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  email: string;

  constructor(
    private afauth: AngularFireAuth,
    private toastr: ToastController,
    private router: Router,
    private loadingCtrl: LoadingController,
  ) { }

  ngOnInit() {
  }


  async resetPassword() {

    if (this.email) {

      const loading = await this.loadingCtrl.create({
        message: 'please wait..',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();
      this.afauth.sendPasswordResetEmail(this.email)
        .then(()=> {
          
          loading.dismiss();
          this.toast('please check your email!','success');
          this.router.navigate(['/login']);
          
        })
        .catch((error)=> {
          loading.dismiss();
          this.toast(error.massege, 'danger');
        });
      
    } else {
      this.toast('Please enter your email address!', 'danger');
    }
  }

  async toast(message, status) {
    const toast = await this.toastr.create({
      message: message,
      position: 'top',
      color: status,
      duration: 2000
    });
    toast.present();
  }

}

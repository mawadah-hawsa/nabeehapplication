import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Console } from 'console';
import { error } from 'protractor';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  nid: string;
  email: string;
  password: string;

  constructor(
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private loadingCtrl: LoadingController,
    private toastr: ToastController,
    private router: Router
  ) { }

  ngOnInit() {
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

  async singup() {

    if (this.nid && this.email && this.password) {

      const loading = await this.loadingCtrl.create({
        message: 'loading...',
        spinner: 'crescent',
        showBackdrop: true
      });

      loading.present();

      this.afAuth.createUserWithEmailAndPassword(this.email, this.password).then((data) => {
        this.afs.collection('users').doc(data.user.uid).set({
          'userId' : data.user.uid,
          'nid' : this.nid,
          'email': this.email,
          'password': this.password,
          'createdAt': Date.now()
        });

        data.user.sendEmailVerification();

      })
        .then(() => {
          loading.dismiss();
          this.toast('Registration success!','success');
          this.router.navigate(['/login']);
        })

        .catch((error) => {
          loading.dismiss();
          this.toast(error.message,'danger');
        })

    } else {
      this.toast('please fill the form','danger');
    }

  }//eno of "btnclick" method

}

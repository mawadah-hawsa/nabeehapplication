import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute } from '@angular/router';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  public folder: string;

  private slideOpts = {
       initialSlide: 0,
       speed: 500,
      effect: 'flip',
    slidesPerView: 1.25
    };



  constructor(private router:Router ,private activatedRoute: ActivatedRoute) {}



  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id');

  }

  btnclick(path: string){
    this.router.navigate([path])
  }

}

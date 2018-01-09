import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  

  constructor(public navCtrl: NavController) {

  }
   goToSlide() {
    this.slides.slideTo(3, 10);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
   
  }
   ngAfterViewInit() {
    this.slides.freeMode = true;
  }
  
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides) autoSlides: IonSlides;
  indexGlobal: any;
  visiable = false;

  public slides = [
    { image: "assets/images/intro/slides_1.gif", title: "Home Page", icon: "home", text: "Home screen contain all themes at top. You can select component screen, UI screens and many more from home page. " },
    { image: "assets/images/intro/slides_2.gif", title: "Component Details Page", icon: "apps", text: "Cmponent details page contain all 90+ screens of ionic components. You can use them instead of creating them from scratch" },
    { image: "assets/images/intro/slides_3.gif", title: "UI screens", icon: "browsers", text: "Comming Soon" },
  ];
  constructor(private splashScreen: SplashScreen) {
  }
  nextSlide() {
    this.autoSlides.slideNext();
  }
  ionViewDidEnter() {
    setTimeout(() => {
      this.splashScreen.hide();
    }, 1500);
    this.autoSlides.startAutoplay();
  }
  ngOnInit() {}
  slideChanged() {
    this.autoSlides.getActiveIndex().then(index => {
      console.log(index);
      if (index == 2) {
        this.visiable = true;
      }
      else {
        this.visiable = false;
      }
    });
  }

}

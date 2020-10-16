import { Component, NgZone } from '@angular/core';
import { MenuController, ModalController, NavController, IonSlides, Events } from '@ionic/angular';
import { ThemeService } from '../services/theme.service';
import { ViewChild } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { ElementRef } from '@angular/core';
import { UserService } from '../shared/user.service';

const themes = {
  //red color o.k
  autumn: {
    primary: '#F44336',
    secondary: '#F44336',
    tertiary: 'white',
    light: '#F44336',
    dark: 'black',
    medium: '#F44336',

  },
  //purple color o.k
  night: {
    primary: '#673AB7',
    secondary: '#673AB7',
    tertiary: '#673AB7',
    medium: '#673AB7',
    dark: 'black',
    light: '#673AB7'
  },
  //blue color o.k
  neon: {
    primary: '#03A9F4',//bold text
    secondary: '#03A9F4',
    tertiary: '#03A9F4',
    light: '#03A9F4',
    dark: 'black',
    medium: '#03A9F4',
  },
  //green color o.k
  orginal: {
    primary: '#4CAF50',
    secondary: '#4CAF50',
    tertiary: '#4CAF50',
    light: '#4CAF50',
    medium: '#4CAF50',
    dark: 'black'
  },
  //gray color o.k
  red: {
    primary: '#9E9E9E',
    secondary: '#9E9E9E',
    tertiary: '#9E9E9E',
    light: '#9E9E9E',//background
    medium: '#9E9E9E',//all btn color
    dark: 'black',//text color
    warning: '#9E9E9E',
  },
  //sharp pink color o.k
  purple: {
    primary: '#E91E63',
    secondary: '#E91E63',
    tertiary: '#E91E63',
    light: '#E91E63',//background
    medium: '#E91E63',//all btn color
    dark: 'black',//text color
    warning: '#E91E63',
  },
  //dark blue color o.k
  Lightblue: {
    primary: '#3F51B5',
    secondary: '#3F51B5',
    tertiary: '#3F51B5',
    light: '#3F51B5',//background
    medium: '#3F51B5',//all btn color
    dark: 'black',//text color
    warning: '#3F51B5',
  },
  //light blue color o.k
  Lightgreen: {
    primary: '#00BCD4',
    secondary: '#00BCD4',
    tertiary: '#00BCD4',
    light: '#00BCD4',//background
    medium: '#00BCD4',//all btn color
    dark: 'black',//text color
    warning: '#00BCD4',
  },
  //light green color o.k
  Lightgray: {
    primary: '#8BC34A',
    secondary: '#8BC34A',
    tertiary: '#8BC34A',
    light: '#8BC34A',//background
    medium: '#8BC34A',//all btn color
    dark: 'black',//text color
    warning: '#8BC34A',
  },
  //dark green color o.k
  blue: {
    primary: '#008577',
    secondary: '#008577',
    tertiary: '#008577',
    light: '#008577',//background
    medium: '#008577',//all btn color
    dark: 'black',//text color
    warning: '#008577',
  }
};
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  visiableBtnAutum = false;
  visiableBtnNight = false;
  visiableBtnNeon = true;
  visiableBtnOriginal = false;
  visiableBtnRed = false;
  visiableBtnPurple = false;
  visiableBtnLightblue = false;
  visiableBtnLightgreen = false;
  visiableBtnLightgray = false;
  visiableBtnBlue = false;
  visiableBtn = false;
  user: any;
  public slides = [  ];
  itemColor = "#03A9F4";//blue
  @ViewChild(IonSlides) autoSlides: IonSlides;
  constructor(private service: CustomThemeService,private userAPI: UserService,private zone: NgZone,
    private events: Events, public menuCtrl: MenuController, private theme: ThemeService,
    private navCtrl: NavController, private elementRef: ElementRef) {
    this.visiableBtnAutum = true;
    this.user = this.service.getUser();
    // this.itemColor = "#F44336";
    // this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    // this.theme.setTheme(themes['neon'], 'neon');
    // this.service.setTheme('neon');
    this.userAPI.getbanners().subscribe((res: any) => {
      this.zone.run(() => {
        if (res.isSuccess) {         
          this.slides = res.homebannerimages;
        }
        // this.userAPI.hideLoader();
      })
    });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(false, 'Menu2')
    this.menuCtrl.enable(true, 'Menu1')
    this.menuCtrl.open('Menu1');
    // this.theme.getTheme().then((result) => {
    //   let val = result;
    //   if (val == undefined) {
    //     this.theme.setTheme(themes['autumn'], 'autumn');
    //   }
    //   else {
    //     this.changeTheme(val);
    //   }
    // });
  }
  ////////////////////////////////
  changeTheme(name) {
    // this.theme.setTheme(themes['neon'], 'neon');
    // this.service.setTheme('neon');
    // this.events.publish('icons', name);
    // if (name == 'autumn') {
    //   this.itemColor = "#F44336";//red
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = true;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'night') {
    //   this.itemColor = "#673AB7";//purple
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = true;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'neon') {
    //   this.itemColor = "#03A9F4";//blue
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = true;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'orginal') {
    //   this.itemColor = "#4CAF50";//green
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = true;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'red') {
    //   this.itemColor = "#9E9E9E";//gray
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = true;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'purple') {
    //   this.itemColor = "#E91E63";//sharp pink
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = true;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'Lightblue') {
    //   this.itemColor = "#3F51B5";//dark blue
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = true;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'Lightgreen') {
    //   this.itemColor = "#00BCD4";//light blue
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = true;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'Lightgray') {
    //   this.itemColor = "#8BC34A";//light green
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = true;
    //   this.visiableBtnBlue = false;
    // }
    // else if (name == 'blue') {
    //   this.itemColor = "#008577";//dark green
    //   this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   this.visiableBtnAutum = false;
    //   this.visiableBtnNight = false;
    //   this.visiableBtnNeon = false;
    //   this.visiableBtnOriginal = false;
    //   this.visiableBtnRed = false;
    //   this.visiableBtnPurple = false;
    //   this.visiableBtnLightblue = false;
    //   this.visiableBtnLightgreen = false;
    //   this.visiableBtnLightgray = false;
    //   this.visiableBtnBlue = true;
    // }
  }
  ///////////////////////////////
 
  /////////banner slides autoplay function////////////////
  ionViewDidEnter() {
    this.autoSlides.startAutoplay();
  }
  /////////banner slides previous function///////////////////
  prevSlide() {
    this.autoSlides.slidePrev();
  }
  /////////////banner slides next function///////////////
  nextSlide() {
    this.autoSlides.slideNext();
  }
}

import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-slider-autoplay',
    templateUrl: './slider-autoplay.page.html',
    styleUrls: ['./slider-autoplay.page.scss'],
})
export class SliderAutoplayPage implements OnInit {
    @ViewChild(IonSlides) slides: IonSlides;
    constructor() { }
    items = [
        { img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
        { img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
        { img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
        { img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
    ];
    ngOnInit() {
    }
    ionViewDidEnter() {
        this.slides.startAutoplay();//slider autoplay biult-in function
    }
}
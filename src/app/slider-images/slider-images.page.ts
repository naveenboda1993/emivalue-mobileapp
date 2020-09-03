import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-slider-images',
    templateUrl: './slider-images.page.html',
    styleUrls: ['./slider-images.page.scss'],
})
export class SliderImagesPage implements OnInit {
    @ViewChild(IonSlides) slides: IonSlides;
    items = [
        { img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
        { img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
        { img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
        { img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
    ];
    constructor() { }

    ngOnInit() {
        this.slides.options = { effect: "fade" };
    }


}
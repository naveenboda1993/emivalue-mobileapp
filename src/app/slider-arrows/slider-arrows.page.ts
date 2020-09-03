import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonSlides } from '@ionic/angular';

@Component({
    selector: 'app-slider-arrows',
    templateUrl: './slider-arrows.page.html',
    styleUrls: ['./slider-arrows.page.scss'],
})
export class SliderArrowsPage implements OnInit {
    items = [
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
        { text: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', dob: "November 5, 2015", email: "lorem@gmail.com ", },
    ];
    @ViewChild(IonSlides) slides: IonSlides;

    constructor() { }
    ngOnInit() {
    }
    prevSlide() {
        this.slides.slidePrev();//slider previous built-in function
    }
    nextSlide() {
        this.slides.slideNext();//slider next built-in function
    }

}
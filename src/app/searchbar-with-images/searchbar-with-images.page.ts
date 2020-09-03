import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-searchbar-with-images',
    templateUrl: './searchbar-with-images.page.html',
    styleUrls: ['./searchbar-with-images.page.scss'],
})
export class SearchbarWithImagesPage implements OnInit {
    public items = [
        { text: "Deadpool", img: "assets/images/Pictures/faces-images/face_image1.png", badgeValue: "10" },
        { text: "Batman", img: "assets/images/Pictures/faces-images/face_image2.png", badgeValue: "20" },
        { text: "Spiderman", img: "assets/images/Pictures/faces-images/face_image3.png", badgeValue: "5" },
        { text: "Aquaman", img: "assets/images/Pictures/faces-images/face_image4.png", badgeValue: "20" },
        { text: "Anaconda", img: "assets/images/Pictures/faces-images/face_image5.png", badgeValue: "6" },
        { text: "Ironman", img: "assets/images/Pictures/faces-images/face_image6.png", badgeValue: "7" },
    ];
    public images = [
        { img: "assets/images/Pictures/gallery-images/gallery_image4.png" },
        { img: "assets/images/Pictures/gallery-images/gallery_image5.png" },
        { img: "assets/images/Pictures/gallery-images/gallery_image6.png" },
        { img: "assets/images/Pictures/gallery-images/gallery_image1.png" },
        { img: "assets/images/Pictures/gallery-images/gallery_image2.png" },
        { img: "assets/images/Pictures/gallery-images/gallery_image3.png" },
    ];
    constructor() { }
    ngOnInit() {
    }

}
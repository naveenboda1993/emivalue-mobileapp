import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-radio-circle-with-avatar',
    templateUrl: './radio-circle-with-avatar.page.html',
    styleUrls: ['./radio-circle-with-avatar.page.scss'],
})
export class RadioCircleWithAvatarPage implements OnInit {
    public products = [
        { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Emma Watson", },
        { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Alina Jason", },
        { image: "assets/images/Pictures/faces-images/face_image3.png", name: "Leta James", },
        { image: "assets/images/Pictures/faces-images/face_image4.png", name: "Maria Amber", },
        { image: "assets/images/Pictures/faces-images/face_image5.png", name: "Amber jeff", },
        { image: "assets/images/Pictures/faces-images/face_image6.png", name: "Leta James", },
        { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Selina Pearls", },
        { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Cardi Gelly", },
        { image: "assets/images/Pictures/faces-images/face_image3.png", name: "Amber jeff", },
        { image: "assets/images/Pictures/faces-images/face_image4.png", name: "Cardi Gelly", },
        { image: "assets/images/Pictures/faces-images/face_image5.png", name: "Emma Watson", },
        { image: "assets/images/Pictures/faces-images/face_image6.png", name: "Alina Jason", },
        { image: "assets/images/Pictures/faces-images/face_image1.png", name: "Leta James", },
        { image: "assets/images/Pictures/faces-images/face_image2.png", name: "Cardi Gelly", },
    ];
    constructor() { }

    ngOnInit() {
    }

}
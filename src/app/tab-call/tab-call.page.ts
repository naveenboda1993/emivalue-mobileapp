import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-call',
    templateUrl: './tab-call.page.html',
    styleUrls: ['./tab-call.page.scss'],
})
export class TabCallPage implements OnInit {

    constructor() { }
    public items = [
        { text: "Jack William", short_des: "July 16, 1:45 PM", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Christian James", short_des: "July 12, 3:45 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
        { text: "Maria Jeans", short_des: "July 10, 1:45 AM", img: "assets/images/Pictures/faces-images/face_image3.png" },
        { text: "Andrew Straus", short_des: "July 8, 2:45 PM ", img: "assets/images/Pictures/faces-images/face_image4.png" },
        { text: "Mark Henry", short_des: " July 7, 9:45 PM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
        { text: "Tom Jack", short_des: "July 6, 9:00 PM", img: "assets/images/Pictures/faces-images/face_image6.png" },
        { text: "Williamson Steward", short_des: " July 6, 12:45 PM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Jaon Broad", short_des: " July 5, 6:45 AM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
        { text: "Jack William", short_des: "June 29, 11:05 PM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Christian James", short_des: " June 29, 8:55 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
        { text: "Maria Jeans", short_des: "June 25, 2:15 AM ", img: "assets/images/Pictures/faces-images/face_image3.png" },
        { text: "Andrew Straus", short_des: " June 23, 7:36 AM ", img: "assets/images/Pictures/faces-images/face_image4.png" },
        { text: "Mark Henry", short_des: "June 22, 4:05 PM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
        { text: "Tom Jack", short_des: "June 20, 3:45 PM ", img: "assets/images/Pictures/faces-images/face_image6.png" },
        { text: "Williamson Steward", short_des: "June 29, 7:45 AM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Jaon Broad", short_des: "June 18, 6:45 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" }
    ];
    ngOnInit() {
    }

}
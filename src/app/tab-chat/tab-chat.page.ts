import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-tab-chat',
    templateUrl: './tab-chat.page.html',
    styleUrls: ['./tab-chat.page.scss'],
})
export class TabChatPage implements OnInit {
    public items = [
        { text: "Jack William", short_des: "It's an amazing tonigth", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Christian James", short_des: "Good Morning, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image2.png" },
        { text: "Maria Jeans", short_des: "Hye Maria, How's you ? ", img: "assets/images/Pictures/faces-images/face_image3.png" },
        { text: "Andrew Straus", short_des: "Hey Dude, What's going on ", img: "assets/images/Pictures/faces-images/face_image4.png" },
        { text: "Mark Henry", short_des: " It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image5.png" },
        { text: "Tom Jack", short_des: "It's an amazing tonigth", img: "assets/images/Pictures/faces-images/face_image6.png" },
        { text: "Williamson Steward", short_des: " Good Morning, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Jaon Broad", short_des: " Hye Maria, How's you ? ", img: "assets/images/Pictures/faces-images/face_image2.png" },
        { text: "Jack William", short_des: "It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Christian James", short_des: " It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image2.png" },
        { text: "Maria Jeans", short_des: "Good Afternoon, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image3.png" },
        { text: "Andrew Straus", short_des: " It's happines you are good ", img: "assets/images/Pictures/faces-images/face_image4.png" },
        { text: "Mark Henry", short_des: "Hey Dude, What's going on ?", img: "assets/images/Pictures/faces-images/face_image5.png" },
        { text: "Tom Jack", short_des: "It's an amazing tonigth", img: "assets/images/Pictures/faces-images/face_image6.png" },
        { text: "Williamson Steward", short_des: "Good Morning, Have a nice day ", img: "assets/images/Pictures/faces-images/face_image1.png" },
        { text: "Jaon Broad", short_des: "Hey Dude, What's going on ?", img: "assets/images/Pictures/faces-images/face_image2.png" }
    ];
    constructor() { }

    ngOnInit() {
    }

}
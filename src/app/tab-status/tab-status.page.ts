import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-tab-status',
templateUrl: './tab-status.page.html',
styleUrls: ['./tab-status.page.scss'],
})
export class TabStatusPage implements OnInit {
public items = [
{ text: "Jack William", short_des: "11 minutes ago", img: "assets/images/Pictures/faces-images/face_image1.png" },
{ text: "Christian James", short_des: "25 minutes ago ", img: "assets/images/Pictures/faces-images/face_image2.png" },
{ text: "Maria Jeans", short_des: "Today, 11:05 AM", img: "assets/images/Pictures/faces-images/face_image3.png" },
{ text: "Andrew Straus", short_des: "Today, 6:58 AM", img: "assets/images/Pictures/faces-images/face_image4.png" },
{ text: "Mark Henry", short_des: " Today, 5:05 AM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
{ text: "Tom Jack", short_des: "Today, 1:18 AM", img: "assets/images/Pictures/faces-images/face_image6.png" },
{ text: "Williamson Steward", short_des: " Today, 11:05 AM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
{ text: "Jaon Broad", short_des: " Today, 10:25 AM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
{ text: "Jack William", short_des: "Today, 10:01 AM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
{ text: "Christian James", short_des: " Today, 9:35 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" },
{ text: "Maria Jeans", short_des: "Yesterday, 12:05 AM ", img: "assets/images/Pictures/faces-images/face_image3.png" },
{ text: "Andrew Straus", short_des: "Yesterday, 11:45 PM ", img: "assets/images/Pictures/faces-images/face_image4.png" },
{ text: "Mark Henry", short_des: "Yesterday, 8:22 PM ", img: "assets/images/Pictures/faces-images/face_image5.png" },
{ text: "Tom Jack", short_des: "Yesterday, 05:37 PM ", img: "assets/images/Pictures/faces-images/face_image6.png" },
{ text: "Williamson Steward", short_des: "Yesterday, 4:11 PM ", img: "assets/images/Pictures/faces-images/face_image1.png" },
{ text: "Jaon Broad", short_des: "Yesterday, 1:05 PM ", img: "assets/images/Pictures/faces-images/face_image2.png" }
];
constructor() { }

ngOnInit() {
}

}
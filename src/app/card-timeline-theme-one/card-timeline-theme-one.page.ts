import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-timeline-theme-one',
  templateUrl: './card-timeline-theme-one.page.html',
  styleUrls: ['./card-timeline-theme-one.page.scss'],
})
export class CardTimelineThemeOnePage implements OnInit {
  items=[
    { text:"Maria James", img: 'assets/images/Pictures/gallery-images/gallery_image1.png',dob:"November 5, 2015" },
    { text:"Jeans Stress", img: 'assets/images/Pictures/gallery-images/gallery_image2.png',dob:"November 5, 2015" },
    { text:"Emma Christian", img: 'assets/images/Pictures/gallery-images/gallery_image3.png',dob:"November 5, 2015" },
    { text:"Julia Jan", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob:"November 5, 2015" },
    ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment-footer-icon',
  templateUrl: './segment-footer-icon.page.html',
  styleUrls: ['./segment-footer-icon.page.scss'],
})
export class SegmentFooterIconPage implements OnInit {
  segments: any = 'segmentOne';
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 0 
    };
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

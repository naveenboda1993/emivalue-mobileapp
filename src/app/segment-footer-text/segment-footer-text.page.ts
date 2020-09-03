import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment-footer-text',
  templateUrl: './segment-footer-text.page.html',
  styleUrls: ['./segment-footer-text.page.scss'],
})
export class SegmentFooterTextPage implements OnInit {
  segments: any = 'topSeller';
  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 0 
    };
    items=[
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png',dob:"November 5, 2015", email: "lorem@gmail.com ", },
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png',dob:"November 5, 2015", email: "lorem@gmail.com ", },
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png',dob:"November 5, 2015", email: "lorem@gmail.com ", },
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', dob:"November 5, 2015", email: "lorem@gmail.com ", },
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png',dob:"November 5, 2015", email: "lorem@gmail.com ", },
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png',dob:"November 5, 2015", email: "lorem@gmail.com ",},
      { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', dob:"November 5, 2015", email: "lorem@gmail.com ",},
    ];
  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-section',
  templateUrl: './grid-section.page.html',
  styleUrls: ['./grid-section.page.scss'],
})
export class GridSectionPage implements OnInit {
  items = [
    { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', date: "14 Jan 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', date: "24 May 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', date: "17 Feb 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', date: "4 April 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', date: "11 Aug 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image1.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image2.png', date: "16 June 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image3.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image4.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image5.png', date: "27 July 2019" },
    { img: 'assets/images/Pictures/gallery-images/gallery_image6.png', },
    { img: 'assets/images/Pictures/gallery-images/gallery_image7.png', },
  ];
  constructor() { }

  ngOnInit() {
  }

}
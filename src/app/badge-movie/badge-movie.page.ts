import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-movie',
  templateUrl: './badge-movie.page.html',
  styleUrls: ['./badge-movie.page.scss'],
})
export class BadgeMoviePage implements OnInit {
  items=[
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png' },
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png' },
    { text:"Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png' },
  ];
  constructor() { }

  ngOnInit() {
  }

}

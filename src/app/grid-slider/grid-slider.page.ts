import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-slider',
  templateUrl: './grid-slider.page.html',
  styleUrls: ['./grid-slider.page.scss'],
})
export class GridSliderPage implements OnInit {
  items =
    [
      { name: 'Fashion One', img: 'assets/images/slider/slider1.jpg', id: 0, details: 'Fashion category' },
      { name: 'Fashion Two', img: 'assets/images/slider/slider2.jpg', id: 1, details: 'Fashion category' },
      { name: 'Fashion Three', img: 'assets/images/slider/slider3.jpg', id: 3, details: 'Fashion category' },
      { name: 'Fashion Four', img: 'assets/images/slider/slider4.jpg', id: 4, details: 'Fashion category' },
      { name: 'Fashion One', img: 'assets/images/slider/slider1.jpg', id: 0, details: 'Fashion category' },
      { name: 'Fashion Two', img: 'assets/images/slider/slider2.jpg', id: 1, details: 'Fashion category' },
      { name: 'Fashion Three', img: 'assets/images/slider/slider3.jpg', id: 3, details: 'Fashion category' },
      { name: 'Fashion Four', img: 'assets/images/slider/slider4.jpg', id: 4, details: 'Fashion category' },
    ];
  constructor() { }
  ngOnInit() {
  }
}

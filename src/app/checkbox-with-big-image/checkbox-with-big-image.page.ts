import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-with-big-image',
  templateUrl: './checkbox-with-big-image.page.html',
  styleUrls: ['./checkbox-with-big-image.page.scss'],
})
export class CheckboxWithBigImagePage implements OnInit {
  public items = [
    { img: "assets/images/movies/movie1.jpg" },
    { img: "assets/images/movies/movie2.jpg" },
    { img: "assets/images/movies/movie3.jpg" },
    { img: "assets/images/movies/movie4.jpg" },
    { img: "assets/images/movies/movie5.jpg" },
    { img: "assets/images/movies/movie1.jpg" },
    { img: "assets/images/movies/movie2.jpg" },
    { img: "assets/images/movies/movie3.jpg" },
    { img: "assets/images/movies/movie4.jpg" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
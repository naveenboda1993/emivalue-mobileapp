import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-with-header',
  templateUrl: './grid-with-header.page.html',
  styleUrls: ['./grid-with-header.page.scss'],
})
export class GridWithHeaderPage implements OnInit {
  public items = [
    { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "100", status: "Avaliable" },
    { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "120", status: "Avaliable" },
    { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "130", status: "Avaliable" },
    { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Out Of Stock" },
    { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Avaliable" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
    { text: "Baby sleeping bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", price: "400", status: "Out Of Stock" },
    { text: "Girls dress ", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", price: "320", status: "Avaliable" },
    { text: "Cell Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", price: "90", status: "Avaliable" },
    { text: "Red  chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", price: "160", status: "Avaliable" },
    { text: "Polo shirt men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", price: "70", status: "Out Of Stock" },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", price: "200", status: "Avaliable" },
  ];
  constructor() { }

  ngOnInit() {
  }

}

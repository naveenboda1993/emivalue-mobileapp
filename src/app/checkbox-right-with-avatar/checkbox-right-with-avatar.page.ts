import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-right-with-avatar',
  templateUrl: './checkbox-right-with-avatar.page.html',
  styleUrls: ['./checkbox-right-with-avatar.page.scss'],
})
export class CheckboxRightWithAvatarPage implements OnInit {
  public items = [
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"},
    { text: "Girls dress ", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"},
    { text: "CellStand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png"},
    { text: "Red a chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"},
    { text: "Polo shirt ", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png"},
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png"},
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"},
    { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"},
    { text: "Cell Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", },
    { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"},
    { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png"},
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png"},
    ];
  constructor() { }
  ngOnInit() {}
}

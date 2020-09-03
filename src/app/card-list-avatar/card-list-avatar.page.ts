import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list-avatar',
  templateUrl: './card-list-avatar.page.html',
  styleUrls: ['./card-list-avatar.page.scss'],
})
export class CardListAvatarPage implements OnInit {
  public items = [
    { text: "Baby sleeping bed", badgeValue: "10", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
    { text: "Girls dress red floral", badgeValue: "25", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
    { text: "Cell Phone Stand", badgeValue: "20", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
    { text: "Red and black chair", badgeValue: "26", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
    { text: "Polo shirt men's wear", badgeValue: "37", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
    { text: "Ladies Jacket", badgeValue: "48", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", },
    { text: "Baby sleeping bed", badgeValue: "10", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png" },
    { text: "Girls dress red floral", badgeValue: "25", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png" },
    { text: "Cell Phone Stand", badgeValue: "20", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png" },
    { text: "Red and black chair", badgeValue: "26", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png" },
    { text: "Polo shirt men's wear", badgeValue: "37", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png" },
    { text: "Ladies Jacket", badgeValue: "48", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", },
  ];
  constructor() { }

  ngOnInit() {
  }

}

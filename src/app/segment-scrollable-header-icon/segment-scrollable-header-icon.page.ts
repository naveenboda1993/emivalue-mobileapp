import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-segment-scrollable-header-icon',
  templateUrl: './segment-scrollable-header-icon.page.html',
  styleUrls: ['./segment-scrollable-header-icon.page.scss'],
  animations: [
    trigger('itemState', [
      transition('void => *', [
        style({ transform: 'translateX(200%)' }),
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class SegmentScrollableHeaderIconPage implements OnInit {
  segments: any = 'segmentOne';
  sliderConfig= {
    slidesPerView: 2.2,
    spaceBetween: 0, 
    };
    public items = [
      {
        id:'0',
        name: "Bed",
        price: "250",
        img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png"
      },
      {
        id:'1',
        name: "Dress",
        price: "1800",
        img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png"
      },
      {
        id:'2',
        name: "Stand",
        price: "3200",
        img: "assets/images/Pictures/app-slicing/cell_phone_stand.png"
      },
      {
        id:'3',
        name: "Chair",
        price: "1200",
        img: "assets/images/Pictures/app-slicing/red_and_black_chair.png"
      }
    ];
  
    public itemsList = [
      { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice:"15", price:"10" },
      { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png",dprice:"18", price:"12" },
      { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png",dprice:"15", price:"13" },
      { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice:"19", price:"16" },
      { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png",dprice:"15", price:"7" },
      { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png",dprice:"25", price:"20" },
      { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png",dprice:"45", price:"40" },
      { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png",dprice:"55", price:"32" },
      { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice:"15", price:"9",},
      { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png",dprice:"25", price:"16" },
      { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png",dprice:"15", price:"7" },
      { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png",dprice:"25", price:"20" },
      { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice:"15", price:"10" },
      { text: "Girls dress", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png",dprice:"18", price:"12" },
      { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png",dprice:"15", price:"13" },
      { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice:"19", price:"16" },
      { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png",dprice:"15", price:"7" },
      { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png",dprice:"25", price:"20" },
    ];
  constructor() { }

  ngOnInit() {
  }

}

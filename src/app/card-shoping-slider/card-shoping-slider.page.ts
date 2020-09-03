import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-shoping-slider',
  templateUrl: './card-shoping-slider.page.html',
  styleUrls: ['./card-shoping-slider.page.scss'],
})
export class CardShopingSliderPage implements OnInit {
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

  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0 
    };
  constructor() { }

  ngOnInit() {
  }

}

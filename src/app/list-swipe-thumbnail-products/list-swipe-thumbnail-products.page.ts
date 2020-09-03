import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-list-swipe-thumbnail-products',
  templateUrl: './list-swipe-thumbnail-products.page.html',
  styleUrls: ['./list-swipe-thumbnail-products.page.scss'],
})
export class ListSwipeThumbnailProductsPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  public items = [
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "15", price: "10", },
    { text: "Girls dress ", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "18", price: "12", },
    { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "13", },
    { text: "Red achair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "19", price: "16", },
    { text: "Polo men", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7", },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20", },
    { text: "Baby bed", img: "assets/images/Pictures/app-slicing/baby_sleeping_bed.png", dprice: "45", price: "40", },
    { text: "Girls dress red floral", img: "assets/images/Pictures/app-slicing/girls_dress_red_floral.png", dprice: "55", price: "32", },
    { text: "Phone Stand", img: "assets/images/Pictures/app-slicing/cell_phone_stand.png", dprice: "15", price: "9", },
    { text: "Red chair", img: "assets/images/Pictures/app-slicing/red_and_black_chair.png", dprice: "25", price: "16", },
    { text: "Polo shirt", img: "assets/images/Pictures/app-slicing/polo_shirt_men_pack.png", dprice: "15", price: "7", },
    { text: "Ladies Jacket", img: "assets/images/Pictures/app-slicing/ladies_jacket_yellow.png", dprice: "25", price: "20", },
  ];
  constructor(private service: CustomThemeService, ) {
    this.itemColor = ["#F44336"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    //for the selection of colors
    if (this.data == "autumn")//if selected color is red 
    {
      this.itemColor = ["#F44336"];
    }
    else if (this.data == "night")//if selected color is purple 
    {
      this.itemColor = ["#673AB7"];
    }
    else if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }
    else if (this.data == "orginal")//if selected color is green
    {
      this.itemColor = ["#4CAF50"];
    }
    else if (this.data == "red")//if selected color is gray
    {
      this.itemColor = ["#9E9E9E"];
    }
    else if (this.data == "purple")//if selected color is sharp pink
    {
      this.itemColor = ["#E91E63"];
    }
    else if (this.data == "Lightblue")//if selected color is dark blue
    {
      this.itemColor = ["#3F51B5"];
    }
    else if (this.data == "Lightgreen")//if selected color is light blue
    {
      this.itemColor = ["#00BCD4"];
    }
    else if (this.data == "Lightgray")//if selected color is light green
    {
      this.itemColor = ["#8BC34A"];
    }
    else if (this.data == "blue")//if selected color is dark green 
    {
      this.itemColor = ["#008577"];
    }
  }
  ngOnInit() { }
}
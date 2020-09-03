import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-list-swipe-with-header',
  templateUrl: './list-swipe-with-header.page.html',
  styleUrls: ['./list-swipe-with-header.page.scss'],
})
export class ListSwipeWithHeaderPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  public items = [
    { text: "Song Play 1", img: "assets/images/Pictures/faces-images/face_image1.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 2", img: "assets/images/Pictures/faces-images/face_image2.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 3", img: "assets/images/Pictures/faces-images/face_image3.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 4", img: "assets/images/Pictures/faces-images/face_image4.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 5", img: "assets/images/Pictures/faces-images/face_image5.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 6", img: "assets/images/Pictures/faces-images/face_image6.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 7", img: "assets/images/Pictures/faces-images/face_image1.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 8", img: "assets/images/Pictures/faces-images/face_image2.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 9", img: "assets/images/Pictures/faces-images/face_image3.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 10", img: "assets/images/Pictures/faces-images/face_image4.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 11", img: "assets/images/Pictures/faces-images/face_image5.png", icon1: "add-circle", icon2: "trash" },
    { text: "Song Play 12", img: "assets/images/Pictures/faces-images/face_image6.png", icon1: "add-circle", icon2: "trash" },
  ];
  constructor(private events: Events, private service: CustomThemeService) {
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

import { Component, OnInit, HostBinding } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';//animation packages

@Component({
  selector: 'app-list-slide-left',
  templateUrl: './list-slide-left.page.html',
  styleUrls: ['./list-slide-left.page.scss'],
  //for animation purpose
  animations: [
    trigger('itemState', [
      transition('void => *', [
        style({ transform: 'translateX(-200%)' }),
        animate('3500ms ease-out')
      ])
    ])
  ]
})
export class ListSlideLeftPage implements OnInit {
  public items1 = [
    { text: "Song Play 1", img: "assets/images/Pictures/faces-images/face_image1.png", },
    { text: "Song Play 2", img: "assets/images/Pictures/faces-images/face_image2.png", },
    { text: "Song Play 3", img: "assets/images/Pictures/faces-images/face_image3.png", },
    { text: "Song Play 4", img: "assets/images/Pictures/faces-images/face_image4.png", },
    { text: "Song Play 5", img: "assets/images/Pictures/faces-images/face_image5.png", },
    { text: "Song Play 6", img: "assets/images/Pictures/faces-images/face_image6.png", },
    { text: "Song Play 7", img: "assets/images/Pictures/faces-images/face_image1.png", },
    { text: "Song Play 8", img: "assets/images/Pictures/faces-images/face_image2.png", },
    { text: "Song Play 9", img: "assets/images/Pictures/faces-images/face_image3.png", },
    { text: "Song Play 10", img: "assets/images/Pictures/faces-images/face_image4.png", },
    { text: "Song Play 11", img: "assets/images/Pictures/faces-images/face_image5.png", },
    { text: "Song Play 12", img: "assets/images/Pictures/faces-images/face_image6.png", },
    { text: "Song Play 13", img: "assets/images/Pictures/faces-images/face_image5.png", },
    { text: "Song Play 14", img: "assets/images/Pictures/faces-images/face_image4.png", },
    { text: "Song Play 15", img: "assets/images/Pictures/faces-images/face_image3.png", },
    { text: "Song Play 16", img: "assets/images/Pictures/faces-images/face_image2.png", },
    { text: "Song Play 17", img: "assets/images/Pictures/faces-images/face_image1.png", },
    { text: "Song Play 18", img: "assets/images/Pictures/faces-images/face_image3.png", },
    { text: "Song Play 19", img: "assets/images/Pictures/faces-images/face_image4.png", },
    { text: "Song Play 20", img: "assets/images/Pictures/faces-images/face_image6.png", },
  ];
  public items = [];
  constructor() {
    //loop for iteration on items with animation after 0.25 sec
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        this.items.push(this.items1[i]);
      }, 250 * i);
    }
  }
  ngOnInit() { }
}
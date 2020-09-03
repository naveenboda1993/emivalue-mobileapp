import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-list-simple',
  templateUrl: './card-list-simple.page.html',
  styleUrls: ['./card-list-simple.page.scss'],
})
export class CardListSimplePage implements OnInit {
  public items = [
    { text: "Clothes", badgeValue: "10" },
    { text: "Camera", badgeValue: "25" },
    { text: "Shoes", badgeValue: "20" },
    { text: "Glasses", badgeValue: "26" },
    { text: "Bags", badgeValue: "37" },
    { text: "Mobile", badgeValue: "48" },
    { text: "Lipsticks", badgeValue: "12" },
    { text: "Pefumes", badgeValue: "54" },
    { text: "Clothes", badgeValue: "23" },
    { text: "Glasses", badgeValue: "66" },
    { text: "Phones", badgeValue: "47" },
    { text: "Mobile", badgeValue: "48" },
    { text: "Lipsticks", badgeValue: "12" },
    { text: "Pefumes", badgeValue: "54" },
    { text: "Clothes", badgeValue: "23" },
    { text: "Glasses", badgeValue: "66" },
    { text: "Phones", badgeValue: "47" },
    { text: "Wrist Watch", badgeValue: "20" },
  ];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-square',
  templateUrl: './checkbox-square.page.html',
  styleUrls: ['./checkbox-square.page.scss'],
})
export class CheckboxSquarePage implements OnInit {
  public items = [
    { text: "America", },
    { text: "New Zeland" },
    { text: "Canada" },
    { text: "Pakistan", },
    { text: "India" },
    { text: "Australia" },
    { text: "China" },
    { text: "Brazil" },
    { text: "Nepal", },
    { text: "Korea" },
  ];
  constructor() { }

  ngOnInit() {
  }

}
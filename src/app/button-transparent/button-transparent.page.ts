import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-transparent',
  templateUrl: './button-transparent.page.html',
  styleUrls: ['./button-transparent.page.scss'],
})
export class ButtonTransparentPage implements OnInit {
  public products = [
    { image: "assets/images/shirts/shirt-1.jpg", name: "CLASSIC FIT SOFT-TOUCH POLO", price: "10.41" },
    { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "11.62" },
    { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON  SHIRT", price: "12.23" },
    { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT SOFT POLO", price: "13.75" },
    { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "14.64" },
    { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC FIT COTTON  SHIRT", price: "15.36" },
    { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "16.61" },
    { image: "assets/images/shirts/shirt-8.jpg", name: "HAMPTON CLASSIC FIT SHIRT", price: "17.72" },
  ];
  constructor() { }

  ngOnInit() {
  }

}

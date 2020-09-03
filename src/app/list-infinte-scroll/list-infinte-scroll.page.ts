import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-infinte-scroll',
  templateUrl: './list-infinte-scroll.page.html',
  styleUrls: ['./list-infinte-scroll.page.scss'],
})
export class ListInfinteScrollPage implements OnInit {

  public products = [
    { image: "assets/images/shirts/shirt-1.jpg", name: "CLASSIC FIT POLO", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT POLO", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC COTTON  SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-8.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-6.jpg", name: "CLASSIC COTTON  SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-7.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-4.jpg", name: "CLASSIC FIT POLO", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " },
    { image: "assets/images/shirts/shirt-3.jpg", name: "CLASSIC FIT COTTON", desc: "It is very rare that a 100% cotton Tshirt. " },
  ];
  constructor() { }
  //after scroll loading you can get the item pushed item mention in below code
  loadData(event) {
    setTimeout(() => {
      console.log(event);
      this.products.push({ image: "assets/images/shirts/shirt-5.jpg", name: "HAMPTON CLASSIC FIT SHIRT", desc: "It is very rare that a 100% cotton Tshirt. " }, );
      event.target.complete();
    }, 500);
  }
  ngOnInit() {
  }
}

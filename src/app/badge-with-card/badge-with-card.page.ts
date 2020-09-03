import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badge-with-card',
  templateUrl: './badge-with-card.page.html',
  styleUrls: ['./badge-with-card.page.scss'],
})
export class BadgeWithCardPage implements OnInit {
items=[
  {image:"assets/images/fashion/fashion1.jpg", title:"Susan",para:"Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums:"100", followers:"10.50M"},
  {image:"assets/images/fashion/fashion2.jpg", title:"Maria",para:"Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums:"300", followers:"2.50M"},
  {image:"assets/images/fashion/fashion11.jpg", title:"Emma",para:"Susan is an American singer, actress, dancer and producer. In 1991, Lopez began appearing as a Fly Girl dancer on In Living Color, where she remained a regular until she decided to pursue an acting career in 1993...", albums:"670", followers:"1.10M"},
];
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-images',
  templateUrl: './card-images.page.html',
  styleUrls: ['./card-images.page.scss'],
})
export class CardImagesPage implements OnInit {
  items=[
    {  img: 'assets/images/Pictures/gallery-images/gallery_image1.png' },
    {  img: 'assets/images/Pictures/gallery-images/gallery_image2.png' },
    {  img: 'assets/images/Pictures/gallery-images/gallery_image3.png' },
    {  img: 'assets/images/Pictures/gallery-images/gallery_image4.png' },
    {  img: 'assets/images/Pictures/gallery-images/gallery_image5.png' },
    {  img: 'assets/images/Pictures/gallery-images/gallery_image6.png' },
    {  img: 'assets/images/Pictures/gallery-images/gallery_image7.png' },
  ];
  constructor() { }

  ngOnInit() {
  }

}

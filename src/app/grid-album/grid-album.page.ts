import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-grid-album',
  templateUrl: './grid-album.page.html',
  styleUrls: ['./grid-album.page.scss'],
})
export class GridAlbumPage implements OnInit {
  items = [
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', quant: "2", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', quant: "4", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', quant: "12", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', quant: "20", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', quant: "4", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', quant: "8", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', quant: "9", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image1.png', quant: "10", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image2.png', quant: "12", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image3.png', quant: "4", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image4.png', quant: "2", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image5.png', quant: "11", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image6.png', quant: "20", },
    { name: "Lorem Ipsum", img: 'assets/images/Pictures/gallery-images/gallery_image7.png', quant: "4", },
  ]
  constructor() { }

  ngOnInit() {
  }

}

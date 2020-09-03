import { Component, OnInit } from '@angular/core';
import { Events, NavController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';


@Component({
  selector: 'app-grid-category',
  templateUrl: './grid-category.page.html',
  styleUrls: ['./grid-category.page.scss'],
})
export class GridCategoryPage implements OnInit {
  items =
    [
      { name: 'Fashion One', img: 'assets/images/fashion/fashion1.jpg', id: 0, details: 'Fashion category' },
      { name: 'Fashion Two', img: 'assets/images/fashion/fashion2.jpg', id: 1, details: 'Fashion category' },
      { name: 'Fashion Three', img: 'assets/images/fashion/fashion3.jpg', id: 3, details: 'Fashion category' },
      { name: 'Fashion Four', img: 'assets/images/fashion/fashion4.jpg', id: 4, details: 'Fashion category' },
      { name: 'Fashion Five', img: 'assets/images/fashion/fashion5.jpg', id: 2, details: 'Fashion category' },
      { name: 'Fashion Six', img: 'assets/images/fashion/fashion6.jpg', id: 5, details: 'Fashion category' },
      { name: 'Fashion Seven', img: 'assets/images/fashion/fashion7.jpg', id: 5, details: 'Fashion category' },
      { name: 'Fashion Eight', img: 'assets/images/fashion/fashion8.jpg', id: 5, details: 'Fashion category' },
      { name: 'Fashion Nine', img: 'assets/images/fashion/fashion9.jpg', id: 5, details: 'Fashion category' },
      { name: 'Fashion Ten', img: 'assets/images/fashion/fashion10.jpg', id: 5, details: 'Fashion category' },
      { name: 'Fashion Eleven', img: 'assets/images/fashion/fashion11.jpg', id: 5, details: 'Fashion category' },
      { name: 'Fashion Tweleve', img: 'assets/images/fashion/fashion12.jpg', id: 5, details: 'Fashion category' },
    ];
  constructor(public NavCtrl: NavController) { }
  ngOnInit() {
  }
  goToSubCategory() {
    this.NavCtrl.navigateForward("grid-subcategory");
  }
}

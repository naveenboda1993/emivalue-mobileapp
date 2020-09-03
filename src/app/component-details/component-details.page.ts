import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, Events, IonInfiniteScroll } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-component-details',
  templateUrl: './component-details.page.html',
  styleUrls: ['./component-details.page.scss'],
})
export class ComponentDetailsPage {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  public itemColor = [];
  public iconColorVar = "";
  data: any;
  //for slider swipe
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  };
  // For New Array Count
  count = 0;
  //for displaying component names and there items name with images
  mainArr = [
    {
      category: 'List View',
      Number: 12,
      products: [
        { image: "assets/screen-shots/0_preview.jpeg", name: "Infinite Scroll" },
        { image: "assets/screen-shots/1_preview.jpeg", name: "Refresher" },
        { image: "assets/screen-shots/2_preview.jpeg", name: "Slide To Left Animation" },
        { image: "assets/screen-shots/3_preview.jpeg", name: "Slide To Right Animation" },
        { image: "assets/screen-shots/4_preview.jpeg", name: "Fade In Animation" },
        { image: "assets/screen-shots/5_preview.jpeg", name: "Thumbnail With Products" },
        { image: "assets/screen-shots/6_preview.jpeg", name: "Full Image Left To Right" },
        { image: "assets/screen-shots/7_preview.jpeg", name: "Items With Header" },
        { image: "assets/screen-shots/8_preview.jpeg", name: "Swipe Avatar Left To Right" },
        { image: "assets/screen-shots/9_preview.jpeg", name: "Swipe Avatar Right To Left" },
        { image: "assets/screen-shots/10_preview.jpeg", name: "Reorder List" },
        { image: "assets/screen-shots/11_preview.jpeg", name: "Expandable List" }
      ]
    },
    {
      category: 'Cards',
      Number: 9,
      products: [
        { image: "assets/screen-shots/12_preview.jpeg", name: "Dashboard" },
        { image: "assets/screen-shots/13_preview.jpeg", name: "Simple List" },
        { image: "assets/screen-shots/14_preview.jpeg", name: "Avatar list" },
        { image: "assets/screen-shots/15_preview.jpeg", name: "Shopping Cart" },
        { image: "assets/screen-shots/16_preview.jpeg", name: "Shopping Cart Slider" },
        { image: "assets/screen-shots/17_preview.jpeg", name: "Timeline Theme 1" },
        { image: "assets/screen-shots/18_preview.jpeg", name: "Timeline Theme 2" },
        { image: "assets/screen-shots/19_preview.jpeg", name: "Timeline Theme 3" },
        { image: "assets/screen-shots/20_preview.jpeg", name: "Images" }
      ]
    },
  ];
  newArr = [
    {
      category: 'Grid',
      Number: 7,
      products: [
        { image: "assets/screen-shots/21_preview.jpeg", name: "Two Line Images" },
        { image: "assets/screen-shots/22_preview.jpeg", name: "Three Line Images" },
        { image: "assets/screen-shots/23_preview.jpeg", name: "Category" },
        { image: "assets/screen-shots/24_preview.jpeg", name: "Subcategory One" },
        { image: "assets/screen-shots/25_preview.jpeg", name: "Grid album" },
        { image: "assets/screen-shots/26_preview.jpeg", name: "Grid section" },
        { image: "assets/screen-shots/27_preview.jpeg", name: "Grid with products" }
      ]
    },
    {
      category: 'Tabs',
      Number: 8,
      products: [
        { image: "assets/screen-shots/28_preview.jpeg", name: "Footer Text" },
        { image: "assets/screen-shots/29_preview.jpeg", name: "Footer Icons" },
        { image: "assets/screen-shots/30_preview.jpeg", name: "Footer Text Icons" },
        { image: "assets/screen-shots/31_preview.jpeg", name: "Footer Text Icons Badges" },
        { image: "assets/screen-shots/32_preview.jpeg", name: "Header Text" },
        { image: "assets/screen-shots/33_preview.jpeg", name: "Header Icons" },
        { image: "assets/screen-shots/34_preview.jpeg", name: "Header Text Icons" },
        { image: "assets/screen-shots/35_preview.jpeg", name: "Header Text Icons Badges" }
      ]
    },
    {
      category: 'Segments',
      Number: 7,
      products: [
        { image: "assets/screen-shots/36_preview.jpeg", name: "Header Text" },
        { image: "assets/screen-shots/37_preview.jpeg", name: "Header Icons" },
        { image: "assets/screen-shots/38_preview.jpeg", name: "Scrollable Header Text" },
        { image: "assets/screen-shots/39_preview.jpeg", name: "Scrollable Header Icons" },
        { image: "assets/screen-shots/40_preview.jpeg", name: "Footer Text" },
        { image: "assets/screen-shots/41_preview.jpeg", name: "Footer Icons" },
        { image: "assets/screen-shots/42_preview.jpeg", name: "Footer Text Icons" }
      ]
    },
    {
      category: 'FAB',
      Number: 12,
      products: [
        { image: "assets/screen-shots/43_preview.jpeg", name: "Simple Text" },
        { image: "assets/screen-shots/44_preview.jpeg", name: "Simple Icon" },
        { image: "assets/screen-shots/45_preview.jpeg", name: "Up Text" },
        { image: "assets/screen-shots/46_preview.jpeg", name: "Up Icon" },
        { image: "assets/screen-shots/47_preview.jpeg", name: "Down Text" },
        { image: "assets/screen-shots/48_preview.jpeg", name: "Down Icon" },
        { image: "assets/screen-shots/49_preview.jpeg", name: "Left Text" },
        { image: "assets/screen-shots/50_preview.jpeg", name: "Left Icon" },
        { image: "assets/screen-shots/51_preview.jpeg", name: "Right Text" },
        { image: "assets/screen-shots/52_preview.jpeg", name: "Right Icon" },
        { image: "assets/screen-shots/53_preview.jpeg", name: "Middle Text" },
        { image: "assets/screen-shots/54_preview.jpeg", name: "Middle Icon" }
      ]
    },
    {
      category: 'Form',
      Number: 9,
      products: [
        { image: "assets/screen-shots/55_preview.jpeg", name: "Login Theme One" },
        { image: "assets/screen-shots/56_preview.jpeg", name: "Login Theme Two" },
        { image: "assets/screen-shots/57_preview.jpeg", name: "Login Theme Three" },
        { image: "assets/screen-shots/58_preview.jpeg", name: "Register Theme One" },
        { image: "assets/screen-shots/59_preview.jpeg", name: "Register Theme Two" },
        { image: "assets/screen-shots/60_preview.jpeg", name: "Register Theme Three" },
        { image: "assets/screen-shots/61_preview.jpeg", name: "Forget Theme One" },
        { image: "assets/screen-shots/62_preview.jpeg", name: "Forget Theme Two" },
        { image: "assets/screen-shots/63_preview.jpeg", name: "Forget Theme Three" }
      ]
    },
    {
      category: 'Buttons',
      Number: 6,
      products: [
        { image: "assets/screen-shots/64_preview.jpeg", name: "Basic Style 1" },
        { image: "assets/screen-shots/65_preview.jpeg", name: "Basic Style 2" },
        { image: "assets/screen-shots/66_preview.jpeg", name: "Text" },
        { image: "assets/screen-shots/67_preview.jpeg", name: "Outline" },
        { image: "assets/screen-shots/68_preview.jpeg", name: "Transparent" },
        { image: "assets/screen-shots/69_preview.jpeg", name: "Expand" }
      ]
    },
    {
      category: 'Alerts',
      Number: 5,
      products: [
        { image: "assets/screen-shots/70_preview.jpeg", name: "Basic" },
        { image: "assets/screen-shots/71_preview.jpeg", name: "Confirmation" },
        { image: "assets/screen-shots/72_preview.jpeg", name: "Prompt" },
        { image: "assets/screen-shots/73_preview.jpeg", name: "Radio" },
        { image: "assets/screen-shots/74_preview.jpeg", name: "Checkbox" }
      ]
    },
    {
      category: 'Sliders',
      Number: 4,
      products: [
        { image: "assets/screen-shots/75_preview.jpeg", name: "Simple Slider" },
        { image: "assets/screen-shots/76_preview.jpeg", name: "Images Slider" },
        { image: "assets/screen-shots/77_preview.jpeg", name: "Autoplay Slider" },
        { image: "assets/screen-shots/78_preview.jpeg", name: "Arrows Slider" }
      ]
    },
    {
      category: 'CheckBox',
      Number: 4,
      products: [
        { image: "assets/screen-shots/79_preview.jpeg", name: "Square With Icon" },
        { image: "assets/screen-shots/80_preview.jpeg", name: "Square With Avatar" },
        { image: "assets/screen-shots/81_preview.jpeg", name: "Avatar With Circle" },
        { image: "assets/screen-shots/82_preview.jpeg", name: "Big Image" }
      ]
    },
    {
      category: 'Radio',
      Number: 4,
      products: [
        { image: "assets/screen-shots/83_preview.jpeg", name: "Simple Left" },
        { image: "assets/screen-shots/84_preview.jpeg", name: "Simple Right" },
        { image: "assets/screen-shots/85_preview.jpeg", name: "Radio Avatar" },
        { image: "assets/screen-shots/86_preview.jpeg", name: "Radio Thumbnail" },
      ]
    },
    {
      category: 'Badge',
      Number: 3,
      products: [
        { image: "assets/screen-shots/87_preview.jpeg", name: "Cards" },
        { image: "assets/screen-shots/88_preview.jpeg", name: "Tabs" },
        { image: "assets/screen-shots/89_preview.jpeg", name: "List" }
      ]
    },
    {
      category: 'Toast',
      Number: 3,
      products: [
        { image: "assets/screen-shots/90_preview.jpeg", name: "Bottom Toast" },
        { image: "assets/screen-shots/91_preview.jpeg", name: "Middle Toast" },
        { image: "assets/screen-shots/92_preview.jpeg", name: "Top Toast" }
      ]
    },
    {
      category: 'SearchBar',
      Number: 2,
      products: [
        { image: "assets/screen-shots/93_preview.jpeg", name: "Simple" },
        { image: "assets/screen-shots/94_preview.jpeg", name: "Images" }
      ]
    },
    {
      category: 'ActionSheet',
      Number: 2,
      products: [
        { image: "assets/screen-shots/95_preview.jpeg", name: "Simple Text" },
        { image: "assets/screen-shots/96_preview.jpeg", name: "Icons" }
      ]
    },
    {
      category: 'Toggle',
      Number: 2,
      products: [
        { image: "assets/screen-shots/97_preview.jpeg", name: "Avatar" },
        { image: "assets/screen-shots/98_preview.jpeg", name: "Simple Left Side" },
      ]
    }
  ]

  constructor(private events: Events, private service: CustomThemeService, private navCtrl: NavController) {
    setTimeout(() => {
      this.loadData();
    }, 0);
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
  loadData() {
    for (let index = 1; index <= 5; index++) {
      this.mainArr.push(this.newArr[index - 1]);
    }
    setTimeout(() => {
      for (let index = 6; index <= this.newArr.length; index++) {
        this.mainArr.push(this.newArr[index - 1]);
      }
    }, 2000);
  }
  ngOnInit() { }
  goToComponent(name, i) {
    //conditions to navigate to specific component item
    if (name == 'ActionSheet') {
      if (i == 0) {
        this.navCtrl.navigateForward("actionsheet-simple");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("actionsheet-icon");
      }
    }
    else if (name == 'Toggle') {
      if (i == 0) {
        this.navCtrl.navigateForward("toggle-with-avatar");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("toggle-simple-left");
      }
    }
    else if (name == 'SearchBar') {
      if (i == 0) {
        this.navCtrl.navigateForward("searchbar-simple");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("searchbar-with-images");
      }
    }
    else if (name == 'Toast') {
      if (i == 0) {
        this.navCtrl.navigateForward("toast-bottom");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("toast-middle");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("toast-top");
      }
    }
    else if (name == 'Badge') {
      if (i == 0) {
        this.navCtrl.navigateForward("badge-with-card");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("badge-with-tab");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("badge-with-list");
      }
    }
    else if (name == 'Radio') {
      if (i == 0) {
        this.navCtrl.navigateForward("radio-simple-left");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("radio-simple-right");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("radio-circle-with-avatar");
      }
      else if (i == 3) {
        this.navCtrl.navigateForward("radio-square-with-big-image");
      }
    }
    else if (name == 'CheckBox') {
      if (i == 0) {
        this.navCtrl.navigateForward("checkbox-square");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("checkbox-right-with-avatar");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("checkbox-simple");
      }
      else if (i == 3) {
        this.navCtrl.navigateForward("checkbox-with-big-image");
      }
    }
    else if (name == 'Sliders') {
      if (i == 0) {
        this.navCtrl.navigateForward("slider-simple");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("slider-images");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("slider-autoplay");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("slider-arrows");
      }
    }
    else if (name == 'Alerts') {
      if (i == 0) {
        this.navCtrl.navigateForward("alert-basic");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("alert-confirmation");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("alert-prompt");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("alert-radio");
      }
      if (i == 4) {
        this.navCtrl.navigateForward("alert-checkbox");
      }
    }
    else if (name == 'Buttons') {
      if (i == 0) {
        this.navCtrl.navigateForward("button-basic-one");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("button-basic-two");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("button-text");
      }
      else if (i == 3) {
        this.navCtrl.navigateForward("button-outline");
      }
      else if (i == 4) {
        this.navCtrl.navigateForward("button-transparent");
      }
      else if (i == 5) {
        this.navCtrl.navigateForward("button-expand");
      }
    }
    else if (name == 'Form') {
      if (i == 0) {
        this.navCtrl.navigateForward("form-login-one");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("form-login-two");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("form-login-three");
      }
      else if (i == 3) {
        this.navCtrl.navigateForward("form-register-one");
      }
      else if (i == 4) {
        this.navCtrl.navigateForward("form-register-two");
      }
      else if (i == 5) {
        this.navCtrl.navigateForward("form-register-three");
      }
      else if (i == 6) {
        this.navCtrl.navigateForward("form-forget-one");
      }
      else if (i == 7) {
        this.navCtrl.navigateForward("form-forget-two");
      }
      else if (i == 8) {
        this.navCtrl.navigateForward("form-forget-three");
      }
    }
    else if (name == 'List View') {
      if (i == 0) {
        this.navCtrl.navigateForward("list-infinte-scroll");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("list-refresher");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("list-slide-left");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("list-slide-right");
      }
      if (i == 4) {
        this.navCtrl.navigateForward("list-fade-in");
      }
      if (i == 5) {
        this.navCtrl.navigateForward("list-swipe-thumbnail-products");
      }
      if (i == 6) {
        this.navCtrl.navigateForward("list-swipe-full-image");
      }
      if (i == 7) {
        this.navCtrl.navigateForward("list-swipe-with-header");
      }
      if (i == 8) {
        this.navCtrl.navigateForward("list-swipe-left-to-right");
      }
      if (i == 9) {
        this.navCtrl.navigateForward("list-swipe-right-to-left");
      }
      if (i == 10) {
        this.navCtrl.navigateForward("list-reorder");
      }
      if (i == 11) {
        this.navCtrl.navigateForward("list-expandable");
      }
    }
    else if (name == 'Grid') {
      if (i == 0) {
        this.navCtrl.navigateForward("grid-two-line");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("grid-three-line");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("grid-category");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("grid-subcategory");
      }
      if (i == 4) {
        this.navCtrl.navigateForward("grid-album");
      }
      if (i == 5) {
        this.navCtrl.navigateForward("grid-section");
      }
      if (i == 6) {
        this.navCtrl.navigateForward("grid-with-header");
      }
    }
    else if (name == 'Cards') {
      if (i == 0) {
        this.navCtrl.navigateForward("card-dashboard");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("card-list-simple");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("card-list-avatar");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("card-shoping-simple");
      }
      if (i == 4) {
        this.navCtrl.navigateForward("card-shoping-slider");
      }
      if (i == 5) {
        this.navCtrl.navigateForward("card-timeline-theme-one");
      }
      if (i == 6) {
        this.navCtrl.navigateForward("card-timeline-theme-two");
      }
      if (i == 7) {
        this.navCtrl.navigateForward("card-timeline-theme-three");
      }
      if (i == 8) {
        this.navCtrl.navigateForward("card-images");
      }
    }
    else if (name == 'Tabs') {
      if (i == 0) {
        this.navCtrl.navigateForward("tab-footer-text");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("tab-footer-icon");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("tab-footer-text-icon");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("tab-footer-text-icon-badge");
      }
      if (i == 4) {
        this.navCtrl.navigateForward("tab-header-text");
      }
      if (i == 5) {
        this.navCtrl.navigateForward("tab-header-icon");
      }
      if (i == 6) {
        this.navCtrl.navigateForward("tab-header-text-icon");
      }
      if (i == 7) {
        this.navCtrl.navigateForward("tab-header-text-icon-badge");
      }
    }
    else if (name == 'Segments') {
      if (i == 0) {
        this.navCtrl.navigateForward("segment-header-text");
      }
      if (i == 1) {
        this.navCtrl.navigateForward("segment-header-icon");
      }
      if (i == 2) {
        this.navCtrl.navigateForward("segment-scrollable-header-text");
      }
      if (i == 3) {
        this.navCtrl.navigateForward("segment-scrollable-header-icon");
      }
      if (i == 4) {
        this.navCtrl.navigateForward("segment-footer-text");
      }
      if (i == 5) {
        this.navCtrl.navigateForward("segment-footer-icon");
      }
      if (i == 6) {
        this.navCtrl.navigateForward("segment-footer-text-icon");
      }
    }
    else if (name == 'FAB') {
      if (i == 0) {
        this.navCtrl.navigateForward("fab-simple-text");
      }
      else if (i == 1) {
        this.navCtrl.navigateForward("fab-simple-icon");
      }
      else if (i == 2) {
        this.navCtrl.navigateForward("fab-up-text");
      }
      else if (i == 3) {
        this.navCtrl.navigateForward("fab-up-icon");
      }
      else if (i == 4) {
        this.navCtrl.navigateForward("fab-down-text");
      }
      else if (i == 5) {
        this.navCtrl.navigateForward("fab-down-icon");
      }
      else if (i == 6) {
        this.navCtrl.navigateForward("fab-left-text");
      }
      else if (i == 7) {
        this.navCtrl.navigateForward("fab-left-icon");
      }
      else if (i == 8) {
        this.navCtrl.navigateForward("fab-right-text");
      }
      else if (i == 9) {
        this.navCtrl.navigateForward("fab-right-icon");
      }
      else if (i == 10) {
        this.navCtrl.navigateForward("fab-middle-text");
      }
      else if (i == 11) {
        this.navCtrl.navigateForward("fab-middle-icon");
      }
    }

  }
}
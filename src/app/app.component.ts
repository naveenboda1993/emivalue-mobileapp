import { Component } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Platform, Events, NavController, ModalController, MenuController, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Network } from '@ionic-native/network/ngx';
import { FCM } from '@ionic-native/fcm/ngx';
declare var navigator; 
declare var window; 
declare var Connection; 
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: ['app.scss']
})
export class AppComponent {
  itemColor: any;
  public iconColorVar = "";
  // For Menu 1
  public appPages = [
    //  {
    //    title: 'HOME',
    //    url: '/home',
    //    icon: 'home'
    //  },
    {
      title: 'MENU',
      url: '',
      icon: 'list'
    },
    // {
    //   title: 'UI/UX Themes',
    //   url: '/ui-ux-themes',
    //   icon: 'list'
    // }
  ];

  // For Menu 2
  public appPages2 = [
    {
      title: 'Contact Us',
      url: '/econtact-us',
      icon: 'call'
    },
    {
      title: 'About Us',
      url: '/eabout-us',
      icon: 'information-circle'
    },
    {
      title: 'News',
      url: '/enews',
      icon: 'paper'
    },
    {
      title: 'Intro',
      url: '/eintro',
      icon: 'logo-ionic'
    },
    {
      title: 'Share',
      url: '',
      icon: 'share'
    },
    {
      title: 'Settings',
      url: '/esettings',
      icon: 'settings'
    },
    {
      title: 'Exit',
      url: '/home',
      icon: 'exit'
    }
  ];

  // For Expandable Menu 2

  //home list
  public homeList = [
    { text: "Home - 1" },
    { text: "Home - 2" },
    { text: "Home - 3" },
    { text: "Home - 4" },
    { text: "Home - 5" },
  ];
  //category list
  public categoryList = [
    { text: "Category - 1" },
    { text: "Category - 2" },
    { text: "Category - 3" },
    { text: "Category - 4" },
    { text: "Category - 5" },
    { text: "Category - 6" },
  ];
  //Shop list
  public shopList = [
    { text: "Newset" },
    { text: "Top Seller" },
    { text: "Deals" },
    { text: "Most Liked" },
  ];

  // financial app
  visibleLoan = false;
  visibleReferralWallet = false;
  visibleHowItWorks = false;
  visibleOurChannelPartners = false;
  visibleContactUs = false;
  visibleMyAccount = false;

  ///////
  visibleBtn = false;
  visibleList = false;
  visibleGrid = false;
  visibleCard = false;
  visibleSlider = false;
  visibleTab = false;
  visibleSegment = false;
  visibleButton = false;
  visibleRadio = false;
  visibleCheckbox = false;
  visibleBadge = false;
  visibleToggle = false;
  visibleSearchbar = false;
  visibleFab = false;
  visibleAlert = false;
  visibleToast = false;
  visibleActionsheet = false;
  ///
  visibleHome = false;
  visibleCategory = false;
  visibleShop = false;
  public itemsHome: any = [];
  public itemsCategory: any = [];
  public itemsShop: any = [];

  /// finanacial appa
  public itemsLoan: any = [];
  public itemsReferralWallet: any = [];
  public itemsHowItWorks: any = [];
  public itemsOurChannelPartners: any = [];
  public itemsContactUs: any = [];
  public itemsMyAccount: any = [];

  //////
  public itemsList: any = [];
  public itemsGrid: any = [];
  public itemsCard: any = [];
  public itemsSlider: any = [];
  public itemsTab: any = [];
  public itemsSegment: any = [];
  public itemsButton: any = [];
  public itemsRadio: any = [];
  public itemsCheckbox: any = [];
  public itemsBadge: any = [];
  public itemsToogle: any = [];
  public itemsSearchbar: any = [];
  public itemsFab: any = [];
  public itemsAlert: any = [];
  public itemsToast: any = [];
  public itemsActionsheet: any = [];
  public itemsForm: any = [];
  ///////


  //// financial app
  public home = [];

  public loan = [
    { name: "Personal Loan" },
    { name: "Business Loan" },
    { name: "Home Loan" },
    { name: "Martigage Loan" },
    { name: "Professional Loan" },
    { name: "Vehicle Loan" }
  ];

  goToLoan(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("form-personal-loan");
    }
    if (i == 1) {
      this.navCtrl.navigateForward("business-loan");
    }
    if (i == 2) {
      this.navCtrl.navigateForward("home-loan");
    }
    if (i == 3) {
      this.navCtrl.navigateForward("martigage-loan");
    }
    if (i == 4) {
      this.navCtrl.navigateForward("professional-loan");
    }
    if (i == 5) {
      this.navCtrl.navigateForward("vehicle-loan");
    }
  }

  public referralWallet = [
    { name: "Refer Now" },
    { name: "My Referrals" },
    { name: "Refer & Earn" }
  ];

  goToReferralWallet(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("refer");
    }
    if (i == 1) {
      this.navCtrl.navigateForward("my-referrals");
    }
    if (i == 2) {
      this.navCtrl.navigateForward("refer-earn");
    }
  }

  public howItWorks = [{ name: "How Its Work" }];
  goToHowItWorks(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("how-it-works");
    }
  }
  public ourChannelPartners = [];
  goToOurChannelWorks(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("how-work");
    }
  }

  public contactUs = [];
  goToContactUs(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("how-work");
    }
  }

  public myAccount = [];
  goToMyAccount(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("myaccount");
    }
  }


  //
  public listView = [
    { name: "Infinite Scroll" },
    { name: "Refresher" },
    { name: "Slide To Left Animation" },
    { name: "Slide To Right Animation" },
    { name: "Fade In Animation" },
    { name: "Thumbnail With Products" },
    { name: "Full Image Left To Right" },
    { name: "Items With Header" },
    { name: "Swipe Avatar Left To Right" },
    { name: "Swipe Avatar Right To Left" },
    { name: "Reorder List" },
    { name: "Expandable List" },
  ];
  /////////
  public grid = [
    { name: "Two line" },
    { name: "Three line" },
    { name: "Category" },
    { name: "Grid sub category one" },
    { name: "Grid sub category two" },
    { name: "Album" },
    { name: "Section" },
    { name: "Products" },
  ];
  ////////
  goToGrid(i) {
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
  //////
  public card = [
    { name: "Dashboard" },
    { name: "Simple List" },
    { name: "Avatar List" },
    { name: "Shopping Cart" },
    { name: "Shopping Cart Slider" },
    { name: "Timeline Theme 1" },
    { name: "Timeline Theme 2" },
    { name: "Timeline Theme 3" },
    { name: "Images" },
  ];
  ////////
  goToCard(i) {
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
  ///////////
  public slider = [
    { name: "Simple Slider" },
    { name: "Images Slider" },
    { name: "Autoplay Slider" },
    { name: "Arrows Slider" },
  ];
  ////////
  goToSlider(i) {
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
  ////////
  public tabs = [
    { name: "Footer Text" },
    { name: "Footer Icons" },
    { name: "Footer Text Icons" },
    { name: "Footer Text Icons Badges" },
    { name: "Header Text" },
    { name: "Header Icons" },
    { name: "Header Text Icons" },
    { name: "Header Text Icons Badges" },
  ];
  ////////
  goToTabs(i) {
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
  ////////
  public segment = [
    { name: "Header Text" },
    { name: "Header Icons" },
    { name: "Scrollable Header Text" },
    { name: "Scrollable Header Icons" },
    { name: "Footer Text" },
    { name: "Footer Icons" },
    { name: "Footer Text Icons" },
  ];
  ////////
  goToSegment(i) {
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
  ////////
  public button = [
    { name: "Basic Style 1" },
    { name: "Basic Style 2" },
    { name: "Text" },
    { name: "Outline" },
    { name: "Transparent" },
    { name: "Expand" },
  ];
  ////////
  goToButton(i) {
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
  ////////
  public radio = [
    { name: "Simple Left" },
    { name: "Simple Right" },
    { name: "Radio Avatar" },
    { name: "Radio Thumbnail" },
  ];
  ////////
  goToRadio(i) {
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
  ////////
  public checkbox = [
    { name: "Avatar With Square" },
    { name: "Square Icon" },
    { name: "Avatar With Circle" },
    { name: "Big images" },
  ];
  ////////
  goToCheckbox(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("checkbox-simple");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("checkbox-square");
    }
    else if (i == 2) {
      this.navCtrl.navigateForward("checkbox-right-with-avatar");
    }
    else if (i == 3) {
      this.navCtrl.navigateForward("checkbox-with-big-image");
    }
  }
  ////////
  public badge = [
    { name: "Card" },
    { name: "Tabs" },
    { name: "List" },
  ];
  ////////
  goToBadge(i) {
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
  ////////
  public toggle = [
    { name: "Avatar" },
    { name: "Simple left Side" },
  ];
  ////////
  goToToggle(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("toggle-with-avatar");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("toggle-simple-left");
    }
  }
  ////////
  public searchbar = [
    { name: "Simple" },
    { name: "Images" },
  ];
  ////////
  goToSearchbar(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("searchbar-simple");
    }
    else if (i == 1) {
      this.navCtrl.navigateForward("searchbar-with-images");
    }
  }
  ////////
  public fab = [
    { name: "Simple Text" },
    { name: "Simple Icon" },
    { name: "Up Text" },
    { name: "Up Icon" },
    { name: "Down Text" },
    { name: "Down Icon" },
    { name: "Left Text" },
    { name: "Left Icon" },
    { name: "Right Text" },
    { name: "Right Icon" },
    { name: "Middle Text" },
    { name: "Middle Icon" },
  ];
  ////////
  goToFab(i) {
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
  ////////
  public alert = [
    { name: "Basic" },
    { name: "Confirmation" },
    { name: "Prompt" },
    { name: "Radio" },
    { name: "Checkbox" },
  ];
  ////////
  goToAlert(i) {
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
  ////////
  public toast = [
    { name: "Bottom Toast" },
    { name: "Middle Toast" },
    { name: "Top Toast" },
  ];
  ////////
  goToToast(i) {
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
  ////////
  public actionSheet = [
    { name: "Simple Text" },
    { name: "Icons" },
  ];
  ////////
  goToActionSheet(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("actionsheet-simple");
    }
    if (i == 1) {
      this.navCtrl.navigateForward("actionsheet-icon");
    }
  }

  // constructor
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public menuCtrl: MenuController,
    public modalCntrl: ModalController,
    public nav: NavController,
    private navCtrl: NavController,
    private events: Events,
    public statusbar: StatusBar,
    private network: Network,
    private fcm: FCM,
    public alertController: AlertController,
    private elementRef: ElementRef
  ) {
    //for status bar

    this.initializeApp();
    this.itemsHome = [
      { expandedHome: false },
    ];

    // financial app code
    this.itemsLoan = [
      { expandedHelp: false },
    ];
    this.itemsReferralWallet = [
      { expandedHelp: false },
    ];
    this.itemsHowItWorks = [
      { expandedHelp: false },
    ];
    this.itemsOurChannelPartners = [
      { expandedHelp: false },
    ];
    this.itemsContactUs = [
      { expandedHelp: false },
    ];
    this.itemsMyAccount = [
      { expandedHelp: false },
    ];

    // normal code
    this.itemsCategory = [
      { expandedcategory: false },
    ];
    this.itemsShop = [
      { expandedShop: false },
    ];

    this.itemsList = [
      { expandedHelp: false },
    ];
    this.itemsGrid = [
      { expandedHelp: false },
    ];
    this.itemsCard = [
      { expandedHelp: false },
    ];
    this.itemsSlider = [
      { expandedHelp: false },
    ];
    this.itemsTab = [
      { expandedHelp: false },
    ];
    this.itemsSegment = [
      { expandedHelp: false },
    ];
    this.itemsButton = [
      { expandedHelp: false },
    ];
    this.itemsRadio = [
      { expandedHelp: false },
    ];
    this.itemsCheckbox = [
      { expandedHelp: false },
    ];
    this.itemsBadge = [
      { expandedHelp: false },
    ];
    this.itemsToogle = [
      { expandedHelp: false },
    ];
    this.itemsSearchbar = [
      { expandedHelp: false },
    ];
    this.itemsFab = [
      { expandedHelp: false },
    ];
    this.itemsAlert = [
      { expandedHelp: false },
    ];
    this.itemsToast = [
      { expandedHelp: false },
    ];
    this.itemsActionsheet = [
      { expandedHelp: false },
    ];
    this.itemsForm = [
      { expandedHelp: false },
    ];
    // this.itemColor = ["#03A9F4"];
    // this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    // this.events.subscribe('icons', (data) => {
    //   this.iconColorVar = data;
    //   if (data == "autumn") {
    //     this.itemColor = ["#F44336"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "night") {
    //     this.itemColor = ["#673AB7"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "neon") {
    //     this.itemColor = ["#03A9F4"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "orginal") {
    //     this.itemColor = ["#4CAF50"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "red") {
    //     this.itemColor = ["#9E9E9E"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "purple") {
    //     this.itemColor = ["#E91E63"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "Lightblue") {
    //     this.itemColor = ["#3F51B5"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "Lightgreen") {
    //     this.itemColor = ["#00BCD4"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "Lightgray") {
    //     this.itemColor = ["#8BC34A"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    //   else if (data == "blue") {
    //     this.itemColor = ["#008577"];
    //     this.elementRef.nativeElement.style.setProperty('--my-var', this.itemColor);
    //   }
    // });
  }

  ////////
  goToList(i) {
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
      this.navCtrl.navigateForward("list-slide-rigth");
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

  //finanacial app

  expandItemLoan(item): void {
    this.visibleLoan = !this.visibleLoan;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsLoan.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  expandItemReferralWallet(item): void {
    this.visibleReferralWallet = !this.visibleReferralWallet;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsReferralWallet.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandHowItWorks(item): void {
    this.visibleHowItWorks = !this.visibleHowItWorks;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsHowItWorks.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandOurChannelPartners(item): void {
    this.visibleOurChannelPartners = !this.visibleOurChannelPartners;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsOurChannelPartners.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandContactUs(item): void {
    this.visibleContactUs = !this.visibleContactUs;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsContactUs.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  expandItemMyAccount(item): void {
    this.visibleMyAccount = !this.visibleMyAccount;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsMyAccount.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      })
    }
  }





  /////
  ////////////
  expandItemList(item): void {
    this.visibleList = !this.visibleList;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsList.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ///
  ////////////
  expandItemGrid(item): void {
    this.visibleGrid = !this.visibleGrid;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsGrid.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemCard(item): void {
    this.visibleCard = !this.visibleCard;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsCard.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemSlider(item): void {
    this.visibleSlider = !this.visibleSlider;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsSlider.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemTab(item): void {
    this.visibleTab = !this.visibleTab;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsTab.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemSegment(item): void {
    this.visibleSegment = !this.visibleSegment;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsSegment.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemButton(item): void {
    this.visibleButton = !this.visibleButton;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsButton.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemRadio(item): void {
    this.visibleRadio = !this.visibleRadio;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsRadio.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemCheckbox(item): void {
    this.visibleCheckbox = !this.visibleCheckbox;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsCheckbox.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemBadge(item): void {
    this.visibleBadge = !this.visibleBadge;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsBadge.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemToggle(item): void {
    this.visibleToggle = !this.visibleToggle;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsToogle.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }


  ////////////
  expandItemSearchbar(item): void {
    this.visibleSearchbar = !this.visibleSearchbar;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsSearchbar.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ////////////
  expandItemFAB(item): void {
    this.visibleFab = !this.visibleFab;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsFab.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ////////////
  expandItemAlert(item): void {
    this.visibleAlert = !this.visibleAlert;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsAlert.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ////////////
  expandItemToast(item): void {
    this.visibleToast = !this.visibleToast;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsToast.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ////////////
  expandItemActionSheet(item): void {
    this.visibleActionsheet = !this.visibleActionsheet;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsActionsheet.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ////////////
  expandItemForm(item): void {
    this.visibleActionsheet = !this.visibleActionsheet;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsForm.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  /////
  ngOnInit() {
    this.menuCtrl.enable(true, 'Menu1')
  }
  
  initializeApp() {
    this.platform.ready().then(() => {
      let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
        alert('network was disconnected :-(');
      });

      // stop disconnect watch
      disconnectSubscription.unsubscribe();
      if (window.Connection) {
        if (navigator.connection.type == Connection.NONE) {
          alert("there is no internet");
          navigator['app'].exitApp();
        }
      }
      this.statusBar.hide();
      // subscribe to a topic
      // this.fcm.subscribeToTopic('Deals');

      // get FCM token
      this.fcm.getToken().then(token => {
        localStorage.setItem('fcmtoken',token);
        console.log(token);
      });
      
      // ionic push notification example
      this.fcm.onNotification().subscribe(data => {
        console.log(data);
        if (data.wasTapped) {
          console.log('Received in background');
        } else {
          console.log('Received in foreground');
        }
      });      
      
      // refresh the FCM token
      this.fcm.onTokenRefresh().subscribe(token => {
        localStorage.setItem('fcmtoken',token);
        console.log(token);
      });

      // unsubscribe from a topic
      // this.fcm.unsubscribeFromTopic('offers');
    });
    this.platform.backButton.subscribeWithPriority(5, () => {
      // alert('Handler called to force close!');
      this.presentAlertConfirm();
      
    });
    this.platform.backButton.subscribeWithPriority(10, () => {
      // alert(' 1000 Handler called to force close!');
      this.presentAlertConfirm();
      
    });

    
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'App Termination!',
      message: 'Do you want to close the app?',
      buttons: [
        {
          text: 'STAY',
          role: 'STAY',
          cssClass: 'secondary',
          handler: (blah) => {
           
          }
        }, {
          text: 'EXIT',
          handler: () => {
            navigator['app'].exitApp();
          }
        }
      ]
    });
    await alert.present();
  }

  // For Expandable Function
  expandItem(i, item): void {
    if (i == 0) {
      this.visibleHome = !this.visibleHome;
      if (item.expandedHome) {
        item.expandedHome = false;
      } else {
        this.itemsHome.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
    if (i == 1) {
      this.visibleCategory = !this.visibleCategory;
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.itemsCategory.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
    if (i == 2) {
      this.visibleShop = !this.visibleShop;
      if (item.expanded) {
        item.expanded = false;
      } else {
        this.itemsShop.map(listItem => {
          if (item == listItem) {
            listItem.expanded = !listItem.expanded;
          } else {
            listItem.expanded = false;
          }
          return listItem;
        });
      }
    }
  }

  //////////////////
  homePage(i) {
    if (i == 0) {
      this.nav.navigateForward("ehome");
    }
    else if (i == 1) {
      this.nav.navigateForward("ehometwo");
    }
    else if (i == 2) {
      this.nav.navigateForward("ehomethree");
    }
    else if (i == 3) {
      this.nav.navigateForward("ehomefour");
    }
    else if (i == 4) {
      this.nav.navigateForward("ehomefive");
    }
  }

  categoryPage(i) {
    if (i == 0) {
      this.nav.navigateForward("ecategory");
    }
    else if (i == 1) {
      this.nav.navigateForward("ecategorytwo");
    }
    else if (i == 2) {
      this.nav.navigateForward("ecategorythree");
    }
    else if (i == 3) {
      this.nav.navigateForward("ecategoryfour");
    }
    else if (i == 4) {
      this.nav.navigateForward("ecategoryfive");
    }
    else if (i == 5) {
      this.nav.navigateForward("ecategorysix");
    }
  }

  shopPage(i) {
    if (i == 0) {
      this.nav.navigateForward("eshopnewest");
    }
    else if (i == 1) {
      this.nav.navigateForward("eshoptopseller");
    }
    else if (i == 2) {
      this.nav.navigateForward("eshopdeals");
    }
    else if (i == 3) {
      this.nav.navigateForward("eshopmostliked");
    }
  }
  //////////
  public form = [
    { name: "Login Theme One" },
    { name: "Login Theme Two" },
    { name: "Login Theme Three" },
    { name: "Register Theme One" },
    { name: "Register Theme Two" },
    { name: "Register Theme Three" },
    { name: "Forget Theme One" },
    { name: "Forget Theme Two" },
    { name: "Forget Theme Three" },
  ]
  ////////
  goToForm(i) {
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
  /* public home = []; */
  goToHome(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("how-work");
    }
  }
  goToOurChannelPartners(i) {
    if (i == 0) {
      this.navCtrl.navigateForward("how-work");
    }
  }
  share() {

  }

  expandItemHowItWorks() {

  }
  expandItemHome() {
    console.log('home')
    this.navCtrl.navigateForward("home");
  }

  expandItemOurChannelPartners() {

  }
  expandItemContactUs() {
    this.navCtrl.navigateForward("contact-us");
  }


}

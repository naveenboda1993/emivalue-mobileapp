import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-list-expandable',
  templateUrl: './list-expandable.page.html',
  styleUrls: ['./list-expandable.page.scss'],
})
export class ListExpandablePage {
  public itemsList1: any = [];//expand list one declaration
  public itemsList2: any = [];//expand list two declaration
  public itemsList3: any = [];//expand list three declaration
  public itemColor = [];
  public iconColorVar = "";
  data:any;
  //expand list one object
  public listView1 = [
    { name: "Pay with Paypal" },
    { name: "Pay with visa card" },
    { name: "Pat with mestro card" },
  ];
  //expand list two object
  public listView2 = [
    { name: "Pay with Paypal" },
    { name: "Pay with visa card" },
    { name: "Pat with mestro card" },
  ];
  //expand list three object
  public listView3 = [
    { name: "Pay with Paypal" },
    { name: "Pay with visa card" },
    { name: "Pat with mestro card" },
  ];

  constructor( private service: CustomThemeService) {
    //expand list one initialization
    this.itemsList1 = [
      { expandedHelp: false },
    ];
    //expand list two initialization
    this.itemsList2 = [
      { expandedHelp: false },
    ];
    //expand list three initialization
    this.itemsList3 = [
      { expandedHelp: false },
    ];

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
  //function to expand and not expand list
  expandItemList1(item): void {
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsList1.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //function to expand and not expand list
  expandItemList2(item): void {
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsList2.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //function to expand and not expand list
  expandItemList3(item): void {
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsList3.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  ngOnInit() {
  }
}
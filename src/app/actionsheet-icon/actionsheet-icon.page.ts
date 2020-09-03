import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';//actionsheet controller package

@Component({
  selector: 'app-actionsheet-icon',
  templateUrl: './actionsheet-icon.page.html',
  styleUrls: ['./actionsheet-icon.page.scss'],
})
export class ActionsheetIconPage implements OnInit {
  items=[
    {heading:"News One", image:"assets/images/Pictures/gallery-images/gallery_image2.png",subheading:"Label Text", para:"Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement."},
    {heading:"News Two", image:"assets/images/Pictures/gallery-images/gallery_image3.png",subheading:"Label Text", para:"Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement."},
    {heading:"News Three", image:"assets/images/Pictures/gallery-images/gallery_image4.png",subheading:"Label Text", para:"Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement."},
];
 //action sheet package declaration
  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }
  //action sheet controller function
  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Albums',
      
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'arrow-dropright-circle',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }],
      
    });
    await actionSheet.present();
  }
}
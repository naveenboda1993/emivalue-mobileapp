import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab-left-text',
  templateUrl: './fab-left-text.page.html',
  styleUrls: ['./fab-left-text.page.scss'],
})
export class FabLeftTextPage implements OnInit {
  items = [
    { heading: "News One", image: "assets/images/Pictures/gallery-images/gallery_image2.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
    { heading: "News Two", image: "assets/images/Pictures/gallery-images/gallery_image3.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
    { heading: "News Three", image: "assets/images/Pictures/gallery-images/gallery_image4.png", subheading: "Label Text", para: "Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement." },
  ];
  constructor() { }

  ngOnInit() {
  }

}

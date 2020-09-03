import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-outline',
  templateUrl: './button-outline.page.html',
  styleUrls: ['./button-outline.page.scss'],
})
export class ButtonOutlinePage implements OnInit {
  items=[
  {
    heading:"Person Article One",image:"assets/images/Pictures/gallery-images/gallery_image2.png",personImage:"assets/images/Pictures/faces-images/face_image1.png",personName:"Muller Adams", email:"muller.adams@gamil.com", para:"Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement.",
    friendImg:[
      {imag:"assets/images/Pictures/faces-images/face_image1.png",personNam:"Muller Adams", emai:"muller.adams@gamil.com"},
      {imag:"assets/images/Pictures/faces-images/face_image2.png",personNam:"Earl Grills", emai:"earl.grills@gamil.com"},
      {imag:"assets/images/Pictures/faces-images/face_image3.png",personNam:"Smith Edward", emai:"smith.edward@gamil.com"},
    ]
  },
  {
    heading:"Person Article Two",image:"assets/images/Pictures/gallery-images/gallery_image2.png",personImage:"assets/images/Pictures/faces-images/face_image2.png",personName:"Earl Grills", email:"earl.grills@gamil.com", para:"Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement.",
    friendImg:[
      {imag:"assets/images/Pictures/faces-images/face_image2.png",personNam:"Muller Adams", emai:"muller.adams@gamil.com"},
      {imag:"assets/images/Pictures/faces-images/face_image3.png",personNam:"Earl Grills", emai:"earl.grills@gamil.com"},
      {imag:"assets/images/Pictures/faces-images/face_image1.png",personNam:"Smith Edward", emai:"smith.edward@gamil.com"},
    ]
  },
  {
    heading:"Person Article Three",image:"assets/images/Pictures/gallery-images/gallery_image2.png",personImage:"assets/images/Pictures/faces-images/face_image3.png",personName:"Smith Edward", email:"smith.edward@gamil.com", para:"Text buttons and contained buttons use text labels, which describe the action that will occur if a user taps a button. If a text label is not used, an icon should be present to signify what the button does. By default Material uses capitalizedbutton text labels (for languages that have capitalization). This is to distinguish the text label from surrounding text. If a text button does not use capitalization for button text, find another characteristic to distinguish it such as color,size, or placement.",
    friendImg:[
      {imag:"assets/images/Pictures/faces-images/face_image3.png",personNam:"Muller Adams", emai:"muller.adams@gamil.com"},
      {imag:"assets/images/Pictures/faces-images/face_image1.png", personNam:"Earl Grills", emai:"earl.grills@gamil.com"},
      {imag:"assets/images/Pictures/faces-images/face_image2.png",personNam:"Smith Edward", emai:"smith.edward@gamil.com"},
    ]
  },
];
  constructor() {}

  ngOnInit() {
  }

}

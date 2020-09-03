import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';//alert controller package

@Component({
  selector: 'app-alert-basic',
  templateUrl: './alert-basic.page.html',
  styleUrls: ['./alert-basic.page.scss'],
})
export class AlertBasicPage implements OnInit {
  //alert package declaration
  constructor(public alertCtrl: AlertController) {
  }

  ngOnInit() {
  }
  //alert controller function
  async showAlert() {
    console.log("OK");
    let alert = await this.alertCtrl.create({
      header: 'Albums',
      subHeader: 'Image_1.jpg',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }
}

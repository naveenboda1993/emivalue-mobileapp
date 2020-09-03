import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';//alert controller package

@Component({
  selector: 'app-alert-confirmation',
  templateUrl: './alert-confirmation.page.html',
  styleUrls: ['./alert-confirmation.page.scss'],
})
export class AlertConfirmationPage implements OnInit {
//alert package declaration
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  //alert controller function
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
  }
}

import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';//alert controller package

@Component({
  selector: 'app-alert-radio',
  templateUrl: './alert-radio.page.html',
  styleUrls: ['./alert-radio.page.scss'],
})
export class AlertRadioPage implements OnInit {
//alert package declaration
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  //alert controller function
  async presentAlertRadio() {
    const alert = await this.alertController.create({
      header: 'Choose the your city',
      inputs: [
        {
          
          name: 'radio1',
          type: 'radio',
          label: 'Chicago',
          value: 'value1',
          checked: true
        },
        {
          
          name: 'radio2',
          type: 'radio',
          label: 'London',
          value: 'value2'
        },
        {
          name: 'radio3',
          type: 'radio',
          label: 'New York',
          value: 'value3'
        },
        {
          name: 'radio4',
          type: 'radio',
          label: 'Riyad',
          value: 'value4'
        },
        {
          name: 'radio5',
          type: 'radio',
          label: 'Changcha',
          value: 'value5'
        },
        {
          name: 'radio6',
          type: 'radio',
          label: 'Sialkot',
          value: 'value6'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });
    await alert.present();
  }
}
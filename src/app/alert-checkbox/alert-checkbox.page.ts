import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';//alert controller package

@Component({
  selector: 'app-alert-checkbox',
  templateUrl: './alert-checkbox.page.html',
  styleUrls: ['./alert-checkbox.page.scss'],
})
export class AlertCheckboxPage implements OnInit {
//alert package declaration
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
//alert controller function
  async presentAlertCheckbox() {
    const alert = await this.alertController.create({
      header: 'Which are following your skills',
      inputs: [
        {
          name: 'checkbox1',
          type: 'checkbox',
          label: 'C++',
          value: 'value1',
          checked: true
        },

        {
          name: 'checkbox2',
          type: 'checkbox',
          label: 'Java',
          value: 'value2'
        },

        {
          name: 'checkbox3',
          type: 'checkbox',
          label: 'Android',
          value: 'value3'
        },

        {
          name: 'checkbox4',
          type: 'checkbox',
          label: 'Ionic',
          value: 'value4'
        },

        {
          name: 'checkbox5',
          type: 'checkbox',
          label: 'C#',
          value: 'value5'
        },

        {
          name: 'checkbox6',
          type: 'checkbox',
          label: 'SQL',
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

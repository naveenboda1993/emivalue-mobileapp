import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';//alert controller package

@Component({
  selector: 'app-alert-prompt',
  templateUrl: './alert-prompt.page.html',
  styleUrls: ['./alert-prompt.page.scss'],
})
export class AlertPromptPage implements OnInit {
//alert package declaration
  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }
  //alert controller function
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      backdropDismiss: false,
      message: 'Please fill the required fields',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'First Name'
        },
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Last Name'
        },
        // input date without min nor max
        {
          name: 'name5',
          type: 'date'
        } ,
        {
          name: 'Upload documnets',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }   
      ],
      buttons: [
        {
          text: 'Upload',
          handler: () => {
            console.log('Confirm Cancel');
            return false;
          }
        }, 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, 
        {
          text: 'Ok',
          handler: (alertData) => {
            console.log(alertData.name1);
            console.log(alertData);
          }
        }
      ]
    });

    await alert.present();
  }
}

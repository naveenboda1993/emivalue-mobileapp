import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-my-banks',
  templateUrl: './my-banks.page.html',
  styleUrls: ['./my-banks.page.scss'],
})
export class MyBanksPage implements OnInit {

  constructor( public alertController: AlertController, private toastCtrl: ToastController,) { }

  ngOnInit() {
  }
  
  async addBankAlrertPrompt() {
    const alert = await this.alertController.create({
      header: 'Add Bank',
      backdropDismiss: false,
      message: 'Please fill the required fields',
      inputs: [
        {
          name: 'bankname',
          type: 'text',
          placeholder: 'Bank Name'
        },

        {
          name: 'name',
          type: 'text',
          placeholder: 'A/C Holder Name',
        },
        { 
          name: 'accountnumber',
          type: 'number',
          placeholder: 'A/C Number',
        },
        { 
          name: 'accountnumber1',
          type: 'number',
          placeholder: 'Confirm A/C Number',
        },
        { 
          name: 'ifsccode',
          type: 'text',
          placeholder: 'Bank IFSC Code',
        },
        { 
          name: 'branch',
          type: 'text',
          placeholder: 'Banker Branch',
        }
      ],
      buttons: [
        {
          text: 'Select Upload Documnets',
          handler: (alertData) => {
            if (alertData.bankname.length == 0 || alertData.name.length == 0 || alertData.accountnumber.length == 0 || alertData.accountnumber1.length == 0 || alertData.ifsccode.length == 0 || alertData.branch.length == 0) {
              this.onToast('please fill all the details')
              return false;
            } else {
              console.log(this.alertData.valuew)
              this.addBankAlrertPrompt
            }
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
        // {
        //   text: 'Ok',
        //   handler: (alertData) => {
        //     console.log(alertData.From);
        //     console.log(alertData);
        //     console.log("BankStatement-"+alertData.name1+": FromDate-"+alertData.From+": EndDate-"+alertData.To);

        //   }
        // }
      ]
    });

    await alert.present();
  }

  async onToast(text: any) {
    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color: "success",
      showCloseButton: true,
      position: 'top',
      message: text,
      closeButtonText: '| Done',
      duration: 2000,
    });
    toast.present();
  }

}

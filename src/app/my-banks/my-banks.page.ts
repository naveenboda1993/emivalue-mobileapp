import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-banks',
  templateUrl: './my-banks.page.html',
  styleUrls: ['./my-banks.page.scss'],
})
export class MyBanksPage implements OnInit {
  user: any;
  banks: [];

  constructor(private userAPI: UserService, public alertController: AlertController, private toastCtrl: ToastController, private service: CustomThemeService,
    private http: HttpClient,
    private zone: NgZone,) {
    this.user = this.service.getUser();
    this.getbankslis();

  }
  getbankslis(){
    this.userAPI.getuserbanks(this.user.id).subscribe((res: any) => {
      this.zone.run(() => {
        if (res.isSuccess) {
          this.banks = res.banks;
          // this.ourchannelpartners = res.data;
        }
        // this.userAPI.hideLoader();
      })
    });
  }

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
          text: 'Save',
          handler: (alertData) => {
            if (alertData.bankname.length == 0 || alertData.name.length == 0 || alertData.accountnumber.length == 0 || alertData.accountnumber1.length == 0 || alertData.ifsccode.length == 0 || alertData.branch.length == 0) {
              this.onToast('please fill all the details')
              return false;
            } else {
              console.log(alertData)
              this.http.get(this.service.getBackenEndUrl() + 'Login/userbankadd/' + this.user.id
                + '/' + encodeURIComponent(alertData.bankname)
                + '/' + encodeURIComponent(alertData.name)
                + '/' + encodeURIComponent(alertData.accountnumber)
                + '/' + encodeURIComponent(alertData.ifsccode)
                + '/' + encodeURIComponent(alertData.branch)
              ).pipe(
              )
                .subscribe((res: any) => {
                  this.zone.run(() => {
                    console.log(res)
                    if (res.isSuccess) {
                      this.getbankslis();
                      this.onToast(res.message)
                      // this.form.setValue([name,res]);
                      // this.mydetailsform.reset();
                    } else {
                      this.onToast(res.message);
                    }
                  })
                });
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
  // deleteuserbank
  deleteBank(item: any) {
    this.userAPI.deleteuserbank(item.id).subscribe((res: any) => {
      this.zone.run(() => {
        this.onToast(res.message)
        if (res.isSuccess) {
          this.getbankslis();
          // this.ourchannelpartners = res.data;
        }
        // this.userAPI.hideLoader();
      })
    });
  }

}

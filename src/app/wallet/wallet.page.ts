import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {
  
  user: any;
  refers: any;
  constructor(private service: CustomThemeService,
      private userAPI: UserService,
      private zone: NgZone,private router: Router,
      public alertController: AlertController) {
    this.user = this.service.getUser();
   this.GetRefers();
  }
  
  ngOnInit() {   
    
    this.GetRefers();
  }
  async withdraw(){
    const alert = await this.alertController.create({
      header: "Pleae refer now",
      message: "Dear User, Use's Of Bonus cash Money While Refering of Two successful Qualified Loan Disbursal Leads",
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // console.log(this.bankStatements);
          }
        },
        {
          text: 'Refer Now',
          handler: () => {
            this.router.navigate(['/refer']);
          }
        }
      ]
    });
  }

  GetRefers() {
    this.userAPI.getUserReferrals(this.user.id).subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.isSuccess) {
          this.refers = res.refers;
        }
        this.userAPI.hideLoader();
      })
    });
  }
  async deleteRefer(refer: any) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure delete Refers <strong>L'+refer.id+'</strong> !!!',
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
            this.userAPI.deleteUserrefer(refer.id).subscribe((res) => {
              this.zone.run(() => {
                console.log(res);
                if (res.isSuccess) {
                  this.GetRefers();
                }
                this.userAPI.hideLoader();
              })
            });
          }
        }
      ]
    });
    await alert.present();
  }

}

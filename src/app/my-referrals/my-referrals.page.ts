import { Component, NgZone, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-my-referrals',
  templateUrl: './my-referrals.page.html',
  styleUrls: ['./my-referrals.page.scss'],
})
export class MyReferralsPage implements OnInit {
  
  user: any;
  refers: any;
  constructor(private service: CustomThemeService,
      private userAPI: UserService,
      private zone: NgZone,
      public alertController: AlertController) {
    this.user = this.service.getUser();
   this.GetRefers();
  }
  
  ngOnInit() {   
    
    this.GetRefers();
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

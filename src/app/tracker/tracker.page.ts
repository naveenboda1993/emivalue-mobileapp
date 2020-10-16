import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {
  loantype: any;
  loanamount: any;
  status: any;
  updatedon: any;
  user: any;
  loans: any;
  constructor(private service: CustomThemeService,private router: Router, private userAPI: UserService, private zone: NgZone,public alertController: AlertController) {
    this.user = this.service.getUser();
   this.GetLoans();
  }
  
  ngOnInit() {
    this.loantype = ''
    this.loanamount = ''
    this.status = ''
    this.updatedon = ''
    
    this.GetLoans();
  }

  GetLoans() {
    this.userAPI.getUserLoans(this.user.id).subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.isSuccess) {
          this.loans = res.loans;
        }
        this.userAPI.hideLoader();
      })
    });
  }
  viewLoan(loan:any){
    console.log(loan)
    this.service.setSavedloanid(loan.id);
    this.service.setloanprofile(loan.profile_type);
    this.router.navigate(['/tracker-view']);
  }
  async deleteLoan(loan: any) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure delete Loan <strong>L'+loan.id+'</strong> !!!',
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
            this.userAPI.deleteUserloan(loan.id).subscribe((res) => {
              this.zone.run(() => {
                console.log(res);
                if (res.isSuccess) {
                  this.GetLoans();
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

import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-tracker-view',
  templateUrl: './tracker-view.page.html',
  styleUrls: ['./tracker-view.page.scss'],
})
export class TrackerViewPage implements OnInit {
  loanid: any;
  user: any;
  loans: { basic: any };
  basic: boolean = true;
  constructor(private service: CustomThemeService, private router: Router, private userAPI: UserService, private zone: NgZone, public alertController: AlertController) {
    this.user = this.service.getUser();
    // this.GetLoans();
    this.loanid = this.service.getSavedloanid();
  }

  ngOnInit() {


    this.GetLoans();
  }

  GetLoans() {
    this.userAPI.getvalidateloan(this.loanid).subscribe((res: any) => {
      this.zone.run(() => {
        if (res.isSuccess) {
          console.log(res.loans.basic);
          this.loans = res.loans;
          this.basic = this.loans.basic;
        }else{
          this.router.navigate(['/tracker']);
        }
        this.userAPI.hideLoader();
      })
    });
  }
  async deleteLoan(loan: any) {
    console.log(loan)
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Are you sure delete Loan <strong>L' + loan.id + '</strong> !!!',
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

  gotopage(segments, value) {
    // this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentThree', redirectto: true }))
    // this.router.navigate(['/form-personal-loan']);
    console.log(segments)
    console.log(value)
    if (value === 'false') {
      switch (segments) {
        case 'basic':
          this.service.setLoanPage(JSON.stringify({ step: '/register-personal-loan', status: 'failed', msg: 'Please complete the previous loan', action: this.service.getloanprofile(), redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/register-personal-loan']);
          break;
        case 'questioner':
          this.service.setLoanPage(JSON.stringify({ step: '/register-personal-loan2', status: 'failed', msg: 'Please complete the previous loan', action: 'step2', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/register-personal-loan2']);
          break;
        case 'idproof':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentOne', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'addressproof':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentTwo', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'ownhouseproof':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentThree', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'companyidproof':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentFour', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'jobexpcertifcates':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentFive', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'payslips':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentSix', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'satements':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentSeven', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;
        case 'emisatements':
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'failed', msg: 'Please complete the previous loan', action: 'segmentEight', redirectto: true, loanid: this.loanid }))
          this.router.navigate(['/loan-documnets-upload']);
          break;

        default:
          break;
      }
    }

  }

}

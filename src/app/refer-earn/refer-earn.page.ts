import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-refer-earn',
  templateUrl: './refer-earn.page.html',
  styleUrls: ['./refer-earn.page.scss'],
})
export class ReferEarnPage implements OnInit {

  public isMenuOpen: boolean = false;
  user: any;
  technologies: any;
  referfaqs: any;
  // public technologies: Array<{ name: string, description: string, image?: string }> = [
  //   {
  //     "name": "Personal loan",
  //     "description": "<b>Loan amount   -   Price amount </b><br/> 3lakhs to 7.5lakhs   -   3000rs  <br/> 7.5lakhs to 12.5 lakhs   -   7500rs  <br/> 12.5 lakhs to 25 lakhs   -   12500rs  <br/> 25 lakhs to 35 lakhs   -   25000rs  <br/> 35 lakhs to 50 lakhs   -   35000rs     "
  //   },
  //   {
  //     "name": "Business loan",
  //     "description": "<b>Loan amount   -   Price amount </b>       <br/>7.5lakhs to 15lakhs     -  7500 RS       <br/>15 lakhs to 25 lakhs     - 15000 RS       <br/>25 lakhs to 35 lakhs     - 25000 RS       <br/>35 lakhs to 50 lakhs     - 35000 RS       <br/>50 lakhs to 75 lakhs     - 50000 RS       <br/>1crore to 1.25 crore      -100000 RS       <br/>1.25 crore to 1.5 crore   -125000 RS         <br/>1.5 crore to 2 crore upto -150000 RS"
  //   },
  //   {
  //     "name": "Professional loan (PL)",
  //     "description": "<b>Loan amount   -   Price amount </b>       </br>10 lakhs to 25lakhs  -  10000 RS       </br>25lakhs to 50 lakhs  -  25000 RS       </br>50 lakhs to 75crore  -  50000 RS"
  //   },

  //   {
  //     "name": "Professional loan (BL)",
  //     "description": "<b>Loan amount   -   Price amount </b>       </br>10 lakhs to 25lakhs - 10000 RS        </br>25lakhs to 75 lakhs - 25000 RS       </br>75 lakhs to 1.25crore - 75000 RS        </br>1.25 crore to 1.5 lakhs - 125000 RS       </br>1.5 crore - 150000 RS        "
  //   },
  //   {
  //     "name": "Home loan",
  //     "description": "<b>Loan amount   -   Price amount </b>       </br>50 lakhs to 1 crore - 12500 RS       </br>1 crore lakhs to 2 crore - 25000 RS       </br>2 crore to 3.5 crore - 50000 RS       </br>3.5 crore to 5 crore - 75000 RS"
  //   },
  //   {
  //     "name": "Mortgage loan",
  //     "description": "<b>Loan amount   -   Price amount </b>       </br>50 lakhs to 1 crore - 12500 RS       </br>1 crore lakhs to 2 crore - 25000 RS       </br>2 crore to 3.5 crore - 50000 RS       </br>3.5 crore to 5 crore - 75000 RS   "
  //   },

  // ];
  // public referfaqs: Array<{ name: string, description: string, image?: string }> = [
  //   {
  //     name: 'WHAT IS REFFERAL WALLET?',
  //     description: 'EMI VALUE  allows you to refer friends and  relatives, acquaintances, colleagues or simply anyone you know who has a loan requirement. for successful disbursement of loan to the person referred  by you, you get reward in the form of a gift card worth up to 500000.there is no cap to earn.  '
  //   },
  //   {
  //     name: 'WHO CAN REFFERAL WALLET?',
  //     description: 'anyone can refer any individual who is having income documents.  '
  //   },
  //   {
  //     name: 'HOWMUCH CAN EARN AS AN INDIVIDUAL?      ',
  //     description: 'There Is no cap, each qualified lead will follow the payout structure.      '
  //   },
  //   {
  //     name: 'CAN I REFER ANYONE?',
  //     description: 'Yes you refer any of your friends and relatives, acquaintances, colleagues or simply anyone you know who has a loan requirement.  '
  //   },
  //   {
  //     name: 'CAN I REFER MY SELF FOR A LOAN THROUGH THIS SITE ?',
  //     description: 'Yes, you can But you are not qualified for referral scheme.  '
  //   },
  //   {
  //     name: 'WHAT IS THE PROCESS TO REFER SOME ONE ?    ',
  //     description: 'Anyone can refer any individual    '
  //   },
  // ];
  constructor(private userAPI: UserService,
    private zone: NgZone,) {
    // this.user = this.service.getUser();
  }

  ngOnInit() {
    this.userAPI.getfaqlist()
    .subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.isSuccess) {
          this.technologies = res.technologies;
          this.referfaqs = res.referfaqs;
        }
      })
    });
  }
  // async onToast(text: any) {

  //   const toast = await this.toastCtrl.create({
  //     cssClass: 'toastTag',
  //     color: "green",
  //     showCloseButton: true,
  //     position: 'top',
  //     message: text,
  //     closeButtonText: '| Done',
  //     duration: 2000,
  //   });
  //   toast.present();
  // }

  captureName(e){

  }



}

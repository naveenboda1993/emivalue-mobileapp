import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-form-forget-one',
  templateUrl: './form-forget-one.page.html',
  styleUrls: ['./form-forget-one.page.scss'],
})
export class FormForgetOnePage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  register: any;
  isOtp: boolean = false;
  isPassword: boolean = false;
  forgotform: FormGroup;
  otp: any;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private router: Router, private toastCtrl: ToastController,
    // public loadingCtrl: LoadingController,
    private service: CustomThemeService,) {
    this.itemColor = ["#F44336"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;

  }
  ngOnInit() {
    this.forgotform = this.formBuilder.group({
      mobile: [''],
      password: [''],
      otp: [''],
      cpassword: ['']
    });
  }
  async onToast(text: any, color?: any) {

    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color: "danger",
      showCloseButton: true,
      position: 'top',
      message: text,
      closeButtonText: '| Done',
      duration: 2000,
    });
    toast.present();
  }
  getOtp() {
    if (this.forgotform.value.mobile.length < 9) {
      this.onToast("Please enter the mobile number")
      return false;
    } else {
      this.userAPI.getmobileotp(this.forgotform.value.mobile).subscribe((res: any) => {
        this.zone.run(() => {
          if (res.isSuccess) {
            this.isOtp = true;
            this.isPassword = true;
            this.otp = res.data.confirm_code;
            // this.ourchannelpartners = res.data;
          } else {
            this.onToast(res.message);
          }
          // this.userAPI.hideLoader();
        })
      });
    }
  }
  changepassword() {
    if (this.forgotform.value.otp.length == 0) {
      this.onToast("Please enter the OTP ")
      return false;
    } else if (this.forgotform.value.otp != this.otp) {
      this.onToast("Please enter the OTP is wrong ")
      return false;
    } else if (this.forgotform.value.password.length == 0 || this.forgotform.value.cpassword.length == 0) {
      this.onToast("Please enter the password fields ")
      return false;
    } else if (this.forgotform.value.password != this.forgotform.value.cpassword) {
      this.onToast("Please enter the password and confirm password as matched ")
      return false;
    } else {
      this.userAPI.changepassword(this.forgotform.value.mobile,this.forgotform.value.otp, encodeURIComponent(this.forgotform.value.password)).subscribe((res: any) => {
        this.zone.run(() => {
          if (res.isSuccess) {
            this.router.navigate(['/form-login-three']);
            // this.ourchannelpartners = res.data;
          } else {
            this.onToast(res.message);
          }
          // this.userAPI.hideLoader();
        })
      });
    }
  }
}

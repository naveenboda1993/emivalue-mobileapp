import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'//toastcontroller package
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';



@Component({
  selector: 'app-form-personal-loan',
  templateUrl: './form-personal-loan.page.html',
  styleUrls: ['./form-personal-loan.page.scss'],
})
export class FormPersonalLoanPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  image: any = ''
  imageData: any = ''
  data: any;
  personalloanform: FormGroup;
  isMatching: any;
  isBussinesloan: boolean = false;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private router: Router,
    private http: HttpClient,
    private service: CustomThemeService,
    public camera: Camera) {
    // this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    // applyloan
    var loan: any = this.service.getLoanpage();
    if (loan != null && loan != '') {
      loan = JSON.parse(loan);
      this.router.navigate([loan.step]);
      console.log(loan);
    }
  }

  error_messages = {

    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length too short.' },
      { type: 'maxlength', message: 'password length is strong.' }
    ],
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'minlength', message: 'password length too short.' },
      { type: 'maxlength', message: 'password length is strong.' }
    ],
    'mobile': [
      { type: 'required', message: 'Mobile Number is required.' },
      { type: 'minlength', message: 'Mobile Number at least 10 Digits' }
    ],

  }


  ngOnInit() {
    this.personalloanform = this.formBuilder.group({
      loanamount: ['', Validators.required],
      salarised_individual: ['', Validators.required],
      salarised: ['', Validators.required],
      personalloan: ['', Validators.required],
      id: [''],
      token: [''],
    });
    console.log("hello")
  }

  checkPassword(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmpassword } = formGroup.get('confirmpassword');
    return password == confirmpassword ? null : { passwordDoNotMatch: true };
  }


  async onToast(text: any, color?: any) {

    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color: color ? color : "danger",
      showCloseButton: true,
      position: 'top',
      message: text,
      closeButtonText: '| Done',
      duration: 2000,
    });
    toast.present();
  }
  isTypeofloan(event) {
    if (event.detail.value === 'business_loan') {
      this.isBussinesloan = true;
    }
  }

  onSubmit() {

    if (!this.personalloanform.valid) {
      this.onToast("Please enter the all fields")
      return false;
    } else {
      // this.router.navigate(['/register-personal-loan']);
      this.personalloanform.get("id").setValue(localStorage.getItem('id'));
      this.personalloanform.get("token").setValue(localStorage.getItem('token'));
      console.log(this.personalloanform.value)
      // this.http.options. { headers: headers }
      this.http.get(this.service.getBackenEndUrl() + 'Login/addpersonalloan/' + localStorage.getItem('id')
        + '/' + this.personalloanform.value.salarised_individual
        + '/' + this.personalloanform.value.salarised
        + '/' + this.personalloanform.value.personalloan
        + '/' + this.personalloanform.value.loanamount
      ).pipe(
      )
        .subscribe((res: any) => {
          this.zone.run(() => {
            if (res.isSuccess) {
              this.onToast("Api success", 'green')
              this.service.setLoanid(res.loan_id);
              this.service.setLoantype(this.personalloanform.value.personalloan);
              if (this.personalloanform.value.personalloan === 'business_loan') {
                this.service.setLoanPage(JSON.stringify({ step: '/register-business-loan', status: 'incomplete', msg: 'Please complete the previous loan', action: 'business', redirectto: false }))
                this.router.navigate(['/register-business-loan']);
              }
              if (this.personalloanform.value.salarised == 'professional') {
                this.service.setLoanPage(JSON.stringify({ step: '/register-personal-loan', status: 'incomplete', msg: 'Please complete the previous loan', action: 'professional', redirectto: false }))
                this.router.navigate(['/register-personal-loan']);
              } else {
                this.service.setLoanPage(JSON.stringify({ step: '/register-personal-loan', status: 'incomplete', msg: 'Please complete the previous loan', action: 'step2', redirectto: false }))
                this.router.navigate(['/register-personal-loan']);
              }

            } else {
              this.onToast(res.message);
            }
          })
        });
      // this.userAPI.personalloancreate(this.personalloanform.value)
      // .subscribe((res) => {
      //   this.zone.run(() => {
      //     console.log(res);
      //     if(res.isSuccess){
      //       this.onToast("Api success",'green')
      //       this.service.setLoanid(res.loan_id);
      //         // // this.form.setValue([name,res]);
      //         // this.form.reset();
      //         this.router.navigate(['/register-personal-loan']);
      //       }
      //     })
      //   });
    }
  }


}

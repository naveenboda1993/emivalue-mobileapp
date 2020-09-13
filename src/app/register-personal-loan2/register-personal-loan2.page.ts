import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'//toastcontroller package
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-register-personal-loan2',
  templateUrl: './register-personal-loan2.page.html',
  styleUrls: ['./register-personal-loan2.page.scss'],
})
export class RegisterPersonalLoan2Page implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  public question: String;
  image: any = ''
  imageData: any = ''
  data: any;
  registerpersonalform2: FormGroup;
  isMatching: any;
  ownhouse: any;
  cibil: any;
  apply: any;
  cheque: any;
  covid: any;
  banker: any;
  loanid: any;
  url: any;
  constructor(
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    private http: HttpClient) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    this.loanid = this.service.getLoanid();
    alert("Loan id" + this.loanid);
    this.url = this.service.getBackenEndUrl();
    if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }

  }


  ngOnInit() {
    this.registerpersonalform2 = this.formBuilder.group({
      ownhouse: ['', Validators.required],
      ownhouse1: ['',],
      cibil: ['', Validators.required],
      cibil1: ['',],
      apply: ['', Validators.required],
      apply1: ['',],
      cheque: ['', Validators.required],
      cheque1: ['',],
      covid: ['', Validators.required],
      covid1: ['',],
      banker: ['', Validators.required]
    }
    );
    console.log("hello")
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


  onSubmit() {

    if (!this.registerpersonalform2.valid) {
      this.onToast("Please Fill All The Fields")
      return false;
    } else {

      console.log(this.registerpersonalform2.value)
      // this.http.options. { headers: headers }
      this.http.get(this.url + 'Login/addpersonalloan3/' + localStorage.getItem('id')
        + '/' + encodeURIComponent(this.loanid)
        + '/' + encodeURIComponent(this.registerpersonalform2.value.ownhouse=='yes'?this.registerpersonalform2.value.ownhouse1:'no')
        + '/' + encodeURIComponent(this.registerpersonalform2.value.cibil=='yes'?this.registerpersonalform2.value.cibil1:'no')
        + '/' + encodeURIComponent(this.registerpersonalform2.value.apply=='yes'?this.registerpersonalform2.value.apply1:'no')
        + '/' + encodeURIComponent(this.registerpersonalform2.value.cheque=='yes'?this.registerpersonalform2.value.cheque1:'no')
        + '/' + encodeURIComponent(this.registerpersonalform2.value.covid=='yes'?this.registerpersonalform2.value.covid1:'no')
        + '/' + encodeURIComponent(this.registerpersonalform2.value.banker)

      ).pipe(
      )
        .subscribe((res: any) => {
          this.zone.run(() => {
            if (res.isSuccess) {
              this.onToast("Api success", 'green')
              this.service.setLoanid(res.loan_id);
              // // this.form.setValue([name,res]);
              // this.form.reset();
              this.router.navigate(['/segment-header-text']);

            } else {
              this.onToast(res.message);
            }
          })
        });
    }
  }

}

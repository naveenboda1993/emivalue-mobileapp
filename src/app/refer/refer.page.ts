import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.page.html',
  styleUrls: ['./refer.page.scss'],
})
export class ReferPage implements OnInit {
  referloanform: FormGroup;
  user: any;

  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private router: Router,
    private http: HttpClient,
    private service: CustomThemeService,) {
    this.user = this.service.getUser();
  }

  ngOnInit() {
    this.referloanform = this.formBuilder.group({
      refername: ['', Validators.required],
      mobilenumber: ['', Validators.required],
      email: ['', Validators.required],
      loanamount: ['', Validators.required],
      typeofloan: ['', Validators.required],
      // loantype: ['', Validators.required],

    });
  }
  async onToast(text: any) {

    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color:  "green",
      showCloseButton: true,
      position: 'top',
      message: text,
      closeButtonText: '| Done',
      duration: 2000,
    });
    toast.present();
  }
  onSubmit() {
    if (!this.referloanform.valid) {
      this.onToast("Please enter the all fields")
      return false;
    } else {
      // this.router.navigate(['/register-personal-loan']);
      // this.referloanform.get("id").setValue(localStorage.getItem('id'));
      // this.referloanform.get("token").setValue(localStorage.getItem('token'));
      console.log(this.referloanform.value)
      // this.http.options. { headers: headers }
      this.http.get(this.service.getBackenEndUrl() + 'Login/referloan/' + localStorage.getItem('id')
        + '/' + encodeURIComponent(this.referloanform.value.refername)
        + '/' + encodeURIComponent(this.referloanform.value.mobilenumber)
        + '/' +  encodeURIComponent(this.referloanform.value.email)
        + '/' + encodeURIComponent(this.referloanform.value.loanamount)
        + '/' + encodeURIComponent(this.referloanform.value.typeofloan)
      ).pipe(
      )
        .subscribe((res: any) => {
          this.zone.run(() => {
            if (res.isSuccess) {
              this.onToast("Successully refer Please refer other one")

              // // this.form.setValue([name,res]);
              this.referloanform.reset();
              // this.router.navigate(['/register-personal-loan']);

            } else {
              this.onToast(res.message);
            }
          })
        });
    }
  }



}

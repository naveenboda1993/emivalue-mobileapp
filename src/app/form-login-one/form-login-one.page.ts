import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-login-one',
  templateUrl: './form-login-one.page.html',
  styleUrls: ['./form-login-one.page.scss'],
})
export class FormLoginOnePage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data: any;
  register: any;
  Otpform: FormGroup;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private zone: NgZone, private http: HttpClient,
    private router: Router,
    private service: CustomThemeService,) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    this.register = this.service.getresponse();
    if (this.register) {
      console.log(this.register);
      console.log(this.register.data.mobile);
    } else {
      this.register = {
        data: { mobile: '8639514842' }
      }
    }

  }
  ngOnInit() {
    this.Otpform = this.formBuilder.group({
      mobile: [''],
      otp: ['']
    });
  }
  onSubmit() {
    this.Otpform.controls['mobile'].setValue(this.register.data.mobile);
    console.log(this.Otpform.value)
    this.http.get(this.service.getBackenEndUrl() + 'Login/appotplogin/' + this.Otpform.value.mobile
      + '/' + this.Otpform.value.otp

    ).pipe(
    )
      .subscribe((res: any) => {
        this.zone.run(() => {
          console.log(res);
          if (res.isSuccess) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("id", res.id);
            this.router.navigate(['/segment-header-text']);
          } else {
            alert("OTP is invalid");
          }
        })
      });
    // this.userAPI.otplogin(this.Otpform.value)
    //   .subscribe((res) => {
    //     this.zone.run(() => {
    //       console.log(res);
    //       if (res.isSuccess) {
    //         localStorage.setItem("token", res.token);
    //         localStorage.setItem("id", res.id);
    //         this.router.navigate(['/segment-header-text']);
    //       }else{
    //         alert("Login failed");
    //       }
    //     })
    //   });
  }

}

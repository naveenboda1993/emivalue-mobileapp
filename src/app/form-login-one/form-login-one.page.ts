import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login-one',
  templateUrl: './form-login-one.page.html',
  styleUrls: ['./form-login-one.page.scss'],
})
export class FormLoginOnePage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  data:any;
  register: any;
  Otpform: FormGroup;
  constructor( private userAPI: UserService,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    this.register = this.service.getresponse();
    if (this.register) {
      console.log(this.register);
      console.log(this.register.data.mobile);
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
    this.userAPI.otplogin(this.Otpform.value)
      .subscribe((res) => {
        this.zone.run(() => {
          console.log(res);
          if (res.isSuccess) {
            localStorage.setItem("token", res.token);
            localStorage.setItem("id", res.id);
            this.router.navigate(['/segment-header-text']);
          }else{
            alert("Login failed");
          }
        })
      });
  }
  
}

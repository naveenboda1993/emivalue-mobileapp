import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login-three',
  templateUrl: './form-login-three.page.html',
  styleUrls: ['./form-login-three.page.scss'],
})
export class FormLoginThreePage implements OnInit {
  register: any;
  isOtp: boolean = false;
  loginform: FormGroup;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,) {
    this.register = this.service.getresponse();
    if (this.register) {
      this.isOtp = true;
      console.log(this.register);
      console.log(this.register.data.mobile);
    }
  }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
      mobile: [''],
      password: ['']
    });
  }
  // routerLink="/segment-header-text"
  onSubmit() {
   
    console.log(this.loginform.value)
    this.userAPI.login(this.loginform.value)
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

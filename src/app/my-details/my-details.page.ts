import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {
  mydetailsform: FormGroup;
  user: any;
  constructor(private formBuilder: FormBuilder,
    private service: CustomThemeService,
    private http: HttpClient,
    private zone: NgZone,
    private router: Router,
    private toastCtrl: ToastController,) { 
      this.user = this.service.getUser();
     
    
    }

  ngOnInit() {
    this.mydetailsform = this.formBuilder.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
     
    });
    this.mydetailsform.setValue({
      fname: this.user.full_name,
      lname: this.user.last_name,
      mobile: this.user.mobile,
      email: this.user.email,
      address: this.user.address,
     
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
  onSubmit() {

    if (!this.mydetailsform.valid) {
      this.onToast("Please enter the all fields")
      return false;
    } else {
      // this.router.navigate(['/register-personal-loan']);      
      console.log(this.mydetailsform.value)
      // this.http.options. { headers: headers }
      this.http.get(this.service.getBackenEndUrl() + 'Login/mydetails/' + this.user.id
      + '/' + encodeURIComponent(this.mydetailsform.value.fname)
      + '/' + encodeURIComponent(this.mydetailsform.value.lname)
      + '/' + encodeURIComponent(this.mydetailsform.value.mobile)
      + '/' + encodeURIComponent(this.mydetailsform.value.email)
      + '/' + encodeURIComponent(this.mydetailsform.value.address)
      ).pipe(
        )
        .subscribe((res: any) => {
          this.zone.run(() => {
            console.log(res)
            if (res.isSuccess) {
              this.onToast(res.message)
              // this.form.setValue([name,res]);
              // this.mydetailsform.reset();
              localStorage.setItem("user",JSON.stringify(res.users));
              this.user=JSON.stringify(res.users);
            } else {
              this.onToast(res.message);
            }
          })
        });

    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.page.html',
  styleUrls: ['./contact-us.page.scss'],
})
export class ContactUsPage implements OnInit {
  constactusform: FormGroup;
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
    this.constactusform = this.formBuilder.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', Validators.required],
      appid: ['', Validators.required],
      query: ['', Validators.required],
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

    if (!this.constactusform.valid) {
      this.onToast("Please enter the all fields")
      return false;
    } else {
      // this.router.navigate(['/register-personal-loan']);      
      console.log(this.constactusform.value)
      // this.http.options. { headers: headers }
      this.http.get(this.service.getBackenEndUrl() + 'Login/contactusform/' + this.user.id
        + '/' + encodeURIComponent(this.constactusform.value.name)
        + '/' + encodeURIComponent(this.constactusform.value.mobile)
        + '/' + encodeURIComponent(this.constactusform.value.email)
        + '/' + encodeURIComponent(this.constactusform.value.appid)
        + '/' + encodeURIComponent(this.constactusform.value.query)
      ).pipe(
      )
        .subscribe((res: any) => {
          this.zone.run(() => {
            if (res.isSuccess) {
              this.onToast(res.message)
              // this.form.setValue([name,res]);
              this.constactusform.reset();

            } else {
              this.onToast(res.message);
            }
          })
        });

    }
  }

}

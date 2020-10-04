import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-our-channel-partners',
  templateUrl: './our-channel-partners.page.html',
  styleUrls: ['./our-channel-partners.page.scss'],
})
export class OurChannelPartnersPage implements OnInit {
  referloanform: FormGroup;
  user: any;
  ourchannelpartners:any;

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
    // this.userAPI.showLoader();
    this.userAPI.getchannel().subscribe((res: any) => {
      this.zone.run(() => {
        if (res.isSuccess) {         
          this.ourchannelpartners = res.data;
        }
        // this.userAPI.hideLoader();
      })
    });
   
  }
 



}

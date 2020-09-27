import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular'//toastcontroller package
import { MissMatch } from './miss-match.validator';
import { finalize } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-form-register-three',
  templateUrl: './form-register-three.page.html',
  styleUrls: ['./form-register-three.page.scss'],
})
export class FormRegisterThreePage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  image: any = ''
  imageData: any = ''
  data: any;
  form: FormGroup;
  isMatching: any;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    private loading: LoadingController,
    private http:HttpClient,
    public camera: Camera) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;

    if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
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
    this.form = this.formBuilder.group({
      firstname: ['', Validators.compose([Validators.required])],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      mobile: ['', Validators.compose([
        Validators.required,
        Validators.minLength(10)])],


      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmpassword: ['', Validators.required],

      // password: ['', Validators.compose([
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(10)])],

      // confirmpassword: ['', Validators.compose([
      //   Validators.required,
      //   Validators.minLength(6),
      //   Validators.maxLength(10)])]
    }, {
      Validator: MissMatch('password', 'confirmpassword')
    });
    console.log("hello")
  }




  async onToast(text:any) {
    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color: "success",
      showCloseButton: true,
      position: 'top',
      message: text,
      closeButtonText: '| Done',
      duration: 2000,
    });
    toast.present();
  }


   onSubmit() {
    // let loading =  this.loading.create();
    //  loading.present();
    // https://www.youtube.com/watch?v=FXpwVLiKowc
    this.http.post('http://emivalue.snitchmedia.in/api/appadduser', this.form.value).pipe(
      // finalize(() => loading.dismiss())
    )
      .subscribe((res:any) => {
        this.zone.run(() => {
          this.service.setresponse(res);
          if (res.isSuccess) {
            // this.form.setValue([name,res]);
            this.form.reset();
            this.router.navigate(['/form-login-one']);
          }else{
            this.onToast(res.message);
          }
        })
      });
    // if (!this.form.valid) {

    //   return false;
    // } else {
    //   console.log(this.form.value)
    //   var res=this.userAPI.addUser(this.form.value)
    //       console.log(res);
    //     // .subscribe((res) => {
    //     //   this.zone.run(() => {
    //     //     this.service.setresponse(res);
    //     //     if(res.isSuccess){
    //     //       // this.form.setValue([name,res]);
    //     //       this.form.reset();
    //     //       this.router.navigate(['/form-login-one']);
    //     //     }
    //     //   })
    //     // });
    // }
  }


}

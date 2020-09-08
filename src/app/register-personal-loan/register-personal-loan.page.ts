import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'//toastcontroller package



@Component({
  selector: 'app-register-personal-loan',
  templateUrl: './register-personal-loan.page.html',
  styleUrls: ['./register-personal-loan.page.scss'],
})
export class RegisterPersonalLoanPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  image: any = ''
  imageData: any = ''
  data: any;
  loanregisterform: FormGroup;
  isMatching: any;
  loanid: any;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    public camera: Camera) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    this.loanid = this.service.getLoanid();
    console.log("Loan id"+this.loanid);
    if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }

  }

  ngOnInit() {
    this.loanregisterform = this.formBuilder.group({
      firstname: ['', Validators.required],
      birth: ['', Validators.required],
      company: ['', Validators.required],
      employee: ['', Validators.required],
      email: ['', Validators.required],
      salary: ['', Validators.required],
      experience: ['', Validators.required],
      pan_no: ['', Validators.required],
      material_status: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
    });
    console.log("hello")
  }

  async onToast(text: any, color? : any) {
    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color: color? color: "danger",
      showCloseButton: true,
      position: 'top',
      message: text,
      closeButtonText: '| Done',
      duration: 2000,
    });
    toast.present();
  }


  onSubmit() {
    if (!this.loanregisterform.valid) {
      this.onToast("Please Enter All The Fields")
      return false;
    } else {
      console.log(this.loanregisterform.value)
      this.onToast("Sucessfull completed", "green")
      // this.userAPI.addUser(this.form.value)
      //   .subscribe((res) => {
      //     this.zone.run(() => {
      //       console.log(res);
      //       this.service.setresponse(res);
      //       if(res.isSuccess){
      //         // this.form.setValue([name,res]);
      //         this.form.reset();
      //         this.router.navigate(['/form-login-one']);
      //       }
      //     })
      //   });
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.loanregisterform.get('image').setValue(file);
    }
  }
  upload() {

    let options = {

      quality: 100
    };

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:

      const fileTransfer: FileTransferObject = this.transfer.create();

      let options1: FileUploadOptions = {
        chunkedMode: false,
        fileKey: 'file',
        fileName: 'name.jpg',
        headers: {}
      }

      fileTransfer.upload(imageData, 'http://emivalue.snitchmedia.in/Login/appupload', options1)
        .then((data) => {
          // success
          alert("success");
        }, (err) => {
          // error
          alert("error" + JSON.stringify(err));
        });


    });


  }
  openCam() {

    const options: CameraOptions = {
      quality: 20,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      //alert(imageData)
      this.imageData = imageData;
      // this.imageData = 'data:image/jpeg;base64,' + imageData
      this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }


  uploadFile() {
    // const loading = await this.loadingController.create({
    //   message: 'Uploading...',
    //   });
    // await loading.present();

    const fileTransfer: FileTransferObject = this.transfer.create();

    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      chunkedMode: false,
      headers: {}

    }

    fileTransfer.upload(this.imageData, encodeURI('http://emivalue.snitchmedia.in/Login/appupload'), options1)
      .then((data) => {
        // success
        // loading.dismiss()
        alert("success");
      }, (err) => {
        // error
        alert("error" + JSON.stringify(err));
      });
  }
}

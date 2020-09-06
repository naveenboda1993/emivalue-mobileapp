import { Component, OnInit,NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder ,Validators} from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
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
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    public camera: Camera) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
   
    if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }
    
  }
  ngOnInit() {
    this.form = this.formBuilder.group({
      firstname: [''],
      lastname: [''],
      email: [''],
      mobile: ['',Validators.required],
      password: [''],
      confirmpassword: ['']
    });
    console.log("hello")
  }
  onSubmit() {
    if (!this.form.valid) {
      return false;
    } else {
      console.log(this.form.value)
      this.userAPI.addUser(this.form.value)
        .subscribe((res) => {
          this.zone.run(() => {
            console.log(res);
            this.service.setresponse(res);
            if(res.isSuccess){
              // this.form.setValue([name,res]);
              this.form.reset();
              this.router.navigate(['/form-login-one']);
            }
          })
        });
    }
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
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

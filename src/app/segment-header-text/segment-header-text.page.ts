import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { PARAMETERS } from '@angular/core/src/util/decorators';
@Component({
  selector: 'app-segment-header-text',
  templateUrl: './segment-header-text.page.html',
  styleUrls: ['./segment-header-text.page.scss'],
  animations: [
    trigger('itemState', [
      transition('void => *', [
        style({ transform: 'translateX(200%)' }),
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class SegmentHeaderTextPage implements OnInit {
  segments: any = 'segmentOne';
  sliderConfig = {
    slidesPerView: 2.2,
    spaceBetween: 0
  };
  isimage: boolean = false;
  isimage1: boolean = false;
  itemColor: string[];
  image: any = '';
  image1: any = '';
  subcategory: any;
  idproof: any;
  addressproof: any;
  imageData1: any = '';
  imageData: any = '';
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    private http: HttpClient,
    private toastCtrl: ToastController,
    public camera: Camera) {
    this.itemColor = ["#03A9F4"];
  }
  async ngOnInit() {
    await this.userAPI.showLoader();
    this.userAPI.getcategory()
      .subscribe((res) => {
        this.zone.run(() => {
          console.log(res);
          if (res.isSuccess) {
            this.subcategory = res.subcategory;
          }
          this.userAPI.hideLoader();
        })
      });
  }
  openCam() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData = imageData;
      this.image = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage = true;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  openCam1() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData1 = imageData;
      this.image1 = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage1 = true;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  async onToast(text: any) {
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

  async uploadFile() {
    // const loading = await this.loadingController.create({
    //   message: 'Uploading...',
    //   });
    // await loading.present();
    await this.userAPI.showLoader();
    this.userAPI.showLoader();
    if (this.segments === 'segmentTwo') {
      var filename = localStorage.getItem('id') + '-' + this.idproof.replace(/\s/g, "") + '-addressproof.jpg';
      var idproof = this.addressproof;
      var imageData = this.imageData1;
      this.onToast("addressproof")
    } else {
      var filename = localStorage.getItem('id') + '-' + this.idproof.replace(/\s/g, "") + '-idproof.jpg';
      var idproof = this.idproof;
      var imageData = this.imageData;
      this.onToast("idproof")
    }


    const fileTransfer: FileTransferObject = this.transfer.create();
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: filename,
      chunkedMode: false,
      headers: { id: localStorage.getItem('id') },
      params: { id: localStorage.getItem('id') }
    }

    fileTransfer.upload(imageData, encodeURI('http://emivalue.snitchmedia.in/Login/appupload'), options1)
      .then((data: any) => {
        // success
        // loading.dismiss()
        this.userAPI.hideLoader();
        console.log(data);
        alert(data);
        if (data.isSuccess) {
          var formdata = {
            path: '/assets/img/temp/' + filename,
            userid: localStorage.getItem('id'),
            loanid: '',
            isLoan: 0,
            idproof: idproof
          }
          this.http.post('http://emivalue.snitchmedia.in/api/test', formdata).pipe(
          )
            .subscribe((res: any) => {
              this.zone.run(() => {
                if (res.isSuccess) {
                  this.onToast(res.message);
                  this.image = '';
                  this.imageData = '';
                  if (this.segments === 'segmentTwo') {
                    this.router.navigate(['/home']);
                  } else {
                    this.segments = 'segmentTwo';
                  }

                } else {
                  this.onToast(res.message);
                }
                this.userAPI.hideLoader();
              })
            });

        }else{
          this.userAPI.hideLoader();
        }
      }, (err) => {
        // error
        alert("error" + JSON.stringify(err));
      });
  }

}
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
import { FileChooser } from '@ionic-native/file-chooser/ngx';
@Component({
  selector: 'app-loan-documnets-upload',
  templateUrl: './loan-documnets-upload.page.html',
  styleUrls: ['./loan-documnets-upload.page.scss'],
  animations: [
    trigger('itemState', [
      transition('void => *', [
        style({ transform: 'translateX(200%)' }),
        animate('300ms ease-in')
      ])
    ])
  ]
})
export class LoanDocumnetsUploadTextPage implements OnInit {
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
    private fileChooser: FileChooser,
    public camera: Camera) {
    this.itemColor = ["#03A9F4"];
  }
  ngOnInit() {
    this.userAPI.getcategory()
      .subscribe((res) => {
        this.zone.run(() => {
          console.log(res);
          if (res.isSuccess) {
            this.subcategory = res.subcategory;
          }
        })
      });
  }
  openFile() {
    this.fileChooser.open({ "mime": "application/pdf" })
      .then(uri => 
      {
        console.log(uri)
         const fileTransfer: FileTransferObject = this.transfer.create();


    // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
      let options1: FileUploadOptions = {
         fileKey: 'file',
         fileName: 'name.pdf',
         headers: {},
         params: {"app_key":"Testappkey"},
         chunkedMode : false
      
      }

      fileTransfer.upload(uri,  encodeURI('http://emivalue.snitchmedia.in/Login/appupload'), options1)
       .then((data) => {
       // success
       alert("success"+JSON.stringify(data));
       }, (err) => {
       // error
       alert("error"+JSON.stringify(err));
           });

      })
      .catch(e => console.log(e));
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

  uploadFile() {
    // const loading = await this.loadingController.create({
    //   message: 'Uploading...',
    //   });
    // await loading.present();
    if (this.segments === 'segmentTwo') {
      var filename = localStorage.getItem('id') + '-' + this.idproof.replace(/\s/g, "") + '-addressproof.jpg';
      var idproof = this.addressproof;
      var imageData=this.imageData1;
      this.onToast("addressproof")
    } else {
      var filename = localStorage.getItem('id') + '-' + this.idproof.replace(/\s/g, "") + '-idproof.jpg';
      var idproof = this.idproof;
      var imageData=this.imageData;
      this.onToast("idproof")
    }
    

    const fileTransfer: FileTransferObject = this.transfer.create();
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: filename,
      chunkedMode: false,
      headers: { id: localStorage.getItem('id') },
      params:{id: localStorage.getItem('id')}
    }

    fileTransfer.upload(imageData, encodeURI('http://emivalue.snitchmedia.in/Login/appupload'), options1)
      .then((data) => {
        // success
        // loading.dismiss()
        alert("success");
        var formdata = {
          path: '/assets/img/temp/' + filename,
          userid: localStorage.getItem('id'),
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
            })
          });
      }, (err) => {
        // error
        alert("error" + JSON.stringify(err));
      });
  }

}
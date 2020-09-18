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
import { ToastController, AlertController } from '@ionic/angular';
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
    public alertController: AlertController,
    public camera: Camera) {
    this.itemColor = ["#03A9F4"];
  }
  async ngOnInit() {
    // ... 
    const alert = await this.alertController.create({
      header: 'Upload Digital Copy',
      message: 'Dear Applicant, do keep the digital copy of following documents handy to avail full benefits Your Loan application .',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });
    await alert.present();
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
      .then(uri => {
        console.log(uri)
        const fileTransfer: FileTransferObject = this.transfer.create();


        // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
        let options1: FileUploadOptions = {
          fileKey: 'file',
          fileName: 'name.pdf',
          headers: {},
          params: { "app_key": "Testappkey" },
          chunkedMode: false

        }

        fileTransfer.upload(uri, encodeURI('http://emivalue.snitchmedia.in/Login/appupload'), options1)
          .then((data) => {
            // success
            alert("success" + JSON.stringify(data));
          }, (err) => {
            // error
            alert("error" + JSON.stringify(err));
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

  nextSlide() {
    switch (this.segments) {
      case 'segmentOne':
        this.segments = 'segmentTwo';
        break;
      case 'segmentTwo':
        this.segments = 'segmentThree';
        break;
      case 'segmentThree':
        this.segments = 'segmentFour';
        break;
      case 'segmentFour':
        this.segments = 'segmentFive';
        break;
      case 'segmentFive':
        this.segments = 'segmentSix';
        break;
      case 'segmentSix':
        this.segments = 'segmentSeven';
        break;
      case 'segmentSeven':
        this.segments = 'segmentEight';
        break;
      case 'segmentEight':
        // this.router.navigate(['/coapplicant-loan-documnets']);
        // this.segments = 'segmentThree';
        break;

      default:
        break;
    }
  }
  swtichcasesegments(segment: any) {
    switch (segment) {
      case 'segmentOne':
        this.segments = 'segmentTwo';
        break;
      case 'segmentTwo':
        this.segments = 'segmentThree';
        break;
      case 'segmentThree':
        this.segments = 'segmentFour';
        break;
      case 'segmentFour':
        this.segments = 'segmentFive';
        break;
      case 'segmentFive':
        this.segments = 'segmentSix';
        break;
      case 'segmentSix':
        this.segments = 'segmentSeven';
        break;
      case 'segmentSeven':
        this.segments = 'segmentEight';
        break;
      case 'segmentEight':
        // this.router.navigate(['/coapplicant-loan-documnets']);
        // this.segments = 'segmentThree';
        break;

      default:
        break;
    }
  }

  uploadFile() {
    // const loading = await this.loadingController.create({
    //   message: 'Uploading...',
    //   });
    // await loading.present();
    this.userAPI.showLoader();
    if (this.segments === 'segmentTwo') {
      var filename = localStorage.getItem('loanid') + '-' + this.addressproof.replace(/\s/g, "") + '-addressproof.jpg';
      var idproof = this.addressproof;
      var imageData = this.imageData1;
    } else if (this.segments === 'segmentOne') {
      var filename = localStorage.getItem('loanid') + '-' + this.idproof.replace(/\s/g, "") + '-idproof.jpg';
      var idproof = this.idproof;
      var imageData = this.imageData;
      this.onToast("idproof")
    }


    const fileTransfer: FileTransferObject = this.transfer.create();
    let options1: FileUploadOptions = {
      fileKey: 'file',
      fileName: filename,
      chunkedMode: false,
      headers: { id: localStorage.getItem('id'), src: 'headers' },
      params: { id: localStorage.getItem('id'), src: 'params' }
    }

    fileTransfer.upload(imageData, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + localStorage.getItem('id')), options1)
      .then((data: any) => {
        // success
        // loading.dismiss()
        this.userAPI.hideLoader();
        var dataObject;
        Object.keys(data).map(function (key) {
          if (key == 'response') {
            dataObject = JSON.parse(data[key]);
          }
          console.log(data[key], key)
        });
        console.log(dataObject);
        alert(dataObject.message);

        if (dataObject.isSuccess) {
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
                    // this.router.navigate(['/home']);
                    this.segments = 'segmentThree';
                  } else {
                    this.segments = 'segmentTwo';
                  }
                } else {
                  this.onToast(res.message);
                }
              })
            });
        }
      }, (err) => {
        // error
        alert("error" + JSON.stringify(err));
      });
  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Prompt!',
      backdropDismiss: false,
      message: 'Please fill the required fields',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Bank Name'
        },

        {
          name: 'From',
          type: 'date'
        },
        {
          name: 'To',
          type: 'date'
        }
      ],
      buttons: [
        {
          text: 'Select Upload Documnets',
          handler: () => {

            this.fileChooser.open({ "mime": "application/pdf" })
              .then(uri => {
                console.log(uri)
                const fileTransfer: FileTransferObject = this.transfer.create();


                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                let options1: FileUploadOptions = {
                  fileKey: 'file',
                  fileName: +new Date() + 'name.pdf',
                  headers: {},
                  params: { "app_key": "Testappkey" },
                  chunkedMode: false

                }

                fileTransfer.upload(uri, encodeURI('http://emivalue.snitchmedia.in/Login/appupload'), options1)
                  .then((data) => {

                  }, (err) => {
                    // error
                  });

              })
              .catch(e => console.log(e));
            return false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Ok',
          handler: (alertData) => {
            console.log(alertData.name1);
            console.log(alertData);
          }
        }
      ]
    });

    await alert.present();
  }
}
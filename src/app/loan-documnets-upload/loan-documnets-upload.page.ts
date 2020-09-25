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
type objbankstatements = {
  bankname?: any,
  from?: any,
  to?: any,
  path?: any,
  id?: any,
};
type objEmistatements = {
  facility?: any,
  banker?: any,
  amount?: any,
  tenure?: any,
  emi?: any,
  outstanding?: any,
  path?: any,
};
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
  isFileUpload: boolean = false;
  UriFileUpload: any;
  itemColor: string[];
  image: any = '';
  image1: any = '';
  subcategory: any;
  idproof: any;
  addressproof: any;
  imageData1: any = '';
  imageData_Own: any = '';
  isimage_Own: boolean = false;
  image_Own: any = '';
  imageData_Company: any = '';
  isimage_Company: boolean = false;
  image_Company: any = '';
  imageData_Job: any = '';
  isimage_Job: boolean = false;
  image_Job: any = '';
  imageData_Pay: any = '';
  isimage_Pay: boolean = false;
  image_Pay: any = '';
  bankStatements: Array<objbankstatements> = [];
  emiStatements: Array<objEmistatements> = [];
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
            // console.log(this.bankStatements);
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
        console.log(uri);
        this.isFileUpload = true;
        this.UriFileUpload = uri;

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
  openCam_Own() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData_Own = imageData;
      this.image_Own = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage_Own = true;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  openCam_Company() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData_Company = imageData;
      this.image_Company = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage_Company = true;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  openCam_Job() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData_Job = imageData;
      this.image_Job = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage_Job = true;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  openCam_Pay() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData_Pay = imageData;
      this.image_Pay = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage_Pay = true;
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
    var isId = true;
    switch (this.segments) {
      case 'segmentOne':
        if (!this.idproof) {
          isId = false;
        } else {
          var filename = +new Date() + localStorage.getItem('loanid') + '-' + this.idproof.replace(/\s/g, "") + '-idproof';
          var idproof = this.idproof;
          var imageData = this.imageData;
        }

        break;
      case 'segmentTwo':
        if (!this.addressproof) {
          isId = false;
        } else {
          var filename = +new Date() + localStorage.getItem('loanid') + '-' + this.addressproof.replace(/\s/g, "") + '-addressproof';
          var idproof = this.addressproof;
          var imageData = this.imageData1;
        }

        break;
      case 'segmentThree':
        // _Own
        var filename = +new Date() + localStorage.getItem('loanid') + '-OwnHouseProof';
        var idproof: any = "OwnHouseProof";
        var imageData = this.imageData_Own;
        break;
      case 'segmentFour':
        // _Company
        var filename = +new Date() + localStorage.getItem('loanid') + '-CompanyIDCard';
        var idproof: any = "CompanyIDCard";
        var imageData = this.imageData_Company;
        break;
      case 'segmentFive':
        // _Job
        var filename = +new Date() + localStorage.getItem('loanid') + '-JobExperienceCertificates';
        var idproof: any = "JobExperienceCertificates";
        var imageData = this.imageData_Job;
        break;
      case 'segmentSix':
        // _Pay
        var filename = +new Date() + localStorage.getItem('loanid') + '-PaySlips';
        var idproof: any = "PaySlips";
        var imageData = this.imageData_Pay;
        break;
      case 'segmentSeven':
        // this.segments = 'segmentEight';
        break;
      case 'segmentEight':
        // this.router.navigate(['/coapplicant-loan-documnets']);
        // this.segments = 'segmentThree';
        break;

      default:
        break;
    }
    if (isId) {
      this.userAPI.showLoader();

      const fileTransfer: FileTransferObject = this.transfer.create();
      let options1: FileUploadOptions;
      if (this.isFileUpload) {
        // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
        options1 = {
          fileKey: 'file',
          fileName: filename + '.pdf',
          headers: {},
          params: { "app_key": "Testappkey" },
          chunkedMode: false

        }
        imageData = this.UriFileUpload;
        // fileTransfer.upload(this.UriFileUpload, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + localStorage.getItem('loanid')), options1)
        //   .then((data) => {
        //     // success
        //     alert("success" + JSON.stringify(data));
        //   }, (err) => {
        //     // error
        //     alert("error" + JSON.stringify(err));
        //   });
      } else {
        options1 = {
          fileKey: 'file',
          fileName: filename + '.jpg',
          chunkedMode: false,
          headers: { id: localStorage.getItem('id'), src: 'headers' },
          params: { id: localStorage.getItem('id'), src: 'params' }
        }

      }

      fileTransfer.upload(imageData, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + localStorage.getItem('loanid')), options1)
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
              path: dataObject.target_path,
              userid: localStorage.getItem('id'),
              loanid: localStorage.getItem('loanid'),
              isLoan: 1,
              idproof: idproof
            }
            this.http.post(this.service.getBackenEndUrl() + 'api/test', formdata).pipe(
            )
              .subscribe((res: any) => {
                this.zone.run(() => {
                  if (res.isSuccess) {
                    this.onToast(res.message);
                    this.nextSlide();
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


    } else {
      alert('Please select id proof')
    }

  }
  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      header: 'Bank From and To dates!',
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
          type: 'date',
          placeholder: 'From Date',
          label: 'From Date'
        },
        {
          name: 'To',
          type: 'date',
          placeholder: 'To Date',
          label: 'To Date'
        }
      ],
      buttons: [
        {
          text: 'Select Upload Documnets',
          handler: (alertData) => {

            this.fileChooser.open({ "mime": "application/pdf" })
              .then(uri => {
                console.log(uri)
                const fileTransfer: FileTransferObject = this.transfer.create();
                var filename = +new Date() + localStorage.getItem('loanid') + '-BankStatement';
                var idproof: any = "BankStatement :" + alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;

                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                let options1: FileUploadOptions = {
                  fileKey: 'file',
                  fileName: filename + '.pdf',
                  headers: {},
                  params: { "app_key": "Testappkey" },
                  chunkedMode: false

                }

                fileTransfer.upload(uri, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + localStorage.getItem('loanid')), options1)
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

                    if (dataObject.isSuccess) {
                      //  alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;
                      var formdata = {
                        path: dataObject.target_path,
                        userid: localStorage.getItem('id'),
                        loanid: localStorage.getItem('loanid'),
                        bankname: alertData.name1,
                        from: alertData.From,
                        to: alertData.To,
                        isLoan: 2,
                        idproof: idproof
                      }
                      this.http.post(this.service.getBackenEndUrl() + 'api/test', formdata).pipe(
                      )
                        .subscribe((res: any) => {
                          this.zone.run(() => {
                            if (res.isSuccess) {
                              this.onToast(res.message);
                              var obj: objbankstatements = { bankname: alertData.name1 };
                              obj.from = alertData.From;
                              obj.bankname = alertData.name1;
                              obj.to = alertData.To;
                              this.bankStatements.push(obj);
                            } else {
                              this.onToast(res.message);
                            }
                          })
                        });
                    }
                  }, (err) => {
                    // error

                  });


              })
              .catch(e => console.log(e));
            // return false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },
        // {
        //   text: 'Ok',
        //   handler: (alertData) => {
        //     console.log(alertData.From);
        //     console.log(alertData);
        //     console.log("BankStatement-"+alertData.name1+": FromDate-"+alertData.From+": EndDate-"+alertData.To);

        //   }
        // }
      ]
    });

    await alert.present();
  }
  async loanstatementsAdd() {
    const alert = await this.alertController.create({
      header: 'Loan Statements!',
      backdropDismiss: false,
      message: 'Please fill the required fields',
      inputs: [
        {
          name: 'facility',
          type: 'text',
          placeholder: 'Type Loan Facility'
        },
        {
          name: 'banker',
          type: 'text',
          placeholder: 'Type of Banker'
        },
        {
          name: 'amount',
          type: 'text',
          placeholder: 'Borrowed loan amount'
        },
        {
          name: 'tenure',
          type: 'text',
          placeholder: 'Borrowed Tenure'
        },
        {
          name: 'emi',
          type: 'text',
          placeholder: 'Current EMI'
        },
        {
          name: 'outstanding',
          type: 'text',
          placeholder: 'Outstanding Tenure'
        },


      ],
      buttons: [
        {
          text: 'Emi Debited Bank Statement',
          handler: (alertData) => {

            this.fileChooser.open({ "mime": "application/pdf" })
              .then(uri => {
                console.log(uri)
                const fileTransfer: FileTransferObject = this.transfer.create();
                var filename = +new Date() + localStorage.getItem('loanid') + '-EMIDebitedBankStatement';
                var idproof: any = "EMIDebitedBankStatement facility:" + alertData.facility + " banker:" + alertData.banker + "amount:" + alertData.amount + " tenure:" + alertData.tenure + "emi:" + alertData.emi + "outstanding:" + alertData.outstanding;

                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                let options1: FileUploadOptions = {
                  fileKey: 'file',
                  fileName: filename + '.pdf',
                  headers: {},
                  params: { "app_key": "Testappkey" },
                  chunkedMode: false

                }

                fileTransfer.upload(uri, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + localStorage.getItem('loanid')), options1)
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

                    if (dataObject.isSuccess) {
                      // "EMIDebitedBankStatement facility:" + alertData.facility + " banker:" + alertData.banker + "amount:" + alertData.amount + " tenure:" + alertData.tenure + "emi:" + alertData.tenure+ "outstanding:" + alertData.outstanding;
                      var formdata = {
                        path: dataObject.target_path,
                        userid: localStorage.getItem('id'),
                        loanid: localStorage.getItem('loanid'),
                        facility: alertData.facility,
                        banker: alertData.banker,
                        amount: alertData.amount,
                        tenure: alertData.tenure,
                        emi: alertData.emi,
                        outstanding: alertData.outstanding,
                        isLoan: 3,
                        idproof: idproof
                      }
                      this.http.post(this.service.getBackenEndUrl() + 'api/test', formdata).pipe(
                      )
                        .subscribe((res: any) => {
                          this.zone.run(() => {
                            if (res.isSuccess) {
                              this.onToast(res.message);
                              var obj: objEmistatements;
                              obj.facility = alertData.facility;
                              obj.banker = alertData.banker;
                              obj.amount = alertData.amount;
                              obj.tenure = alertData.tenure;
                              obj.outstanding = alertData.outstanding;
                              obj.emi = alertData.emi;
                              this.emiStatements.push(obj);
                            } else {
                              this.onToast(res.message);
                            }
                          })
                        });
                    }
                  }, (err) => {
                    // error

                  });


              })
              .catch(e => console.log(e));
            // return false;
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        },

      ]
    });

    await alert.present();
  }
  // success-page
  finalStageSlide() {
    // this.router.navigate(['/coapplicant-loan-documnets']);
    this.router.navigate(['/success-page']);
  }
}
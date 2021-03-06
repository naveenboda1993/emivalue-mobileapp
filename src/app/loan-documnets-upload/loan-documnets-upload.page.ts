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
import { ToastController, AlertController, LoadingController } from '@ionic/angular';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { isEmpty } from 'rxjs/operators';
import { isNull } from '@angular/compiler/src/output/output_ast';
type objbankstatements = {
  bankname?: any,
  from?: any,
  to?: any,
  path?: any,
  id?: any,
};
type objbankpayslips = {
  monthname?: any,
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
  isSkipbutton: boolean = true;
  isFolder: boolean = true;
  image_Pay: any = '';
  bankStatements: Array<objbankstatements> = [];
  bankpayslips: Array<objbankpayslips> = [];
  emiStatements: Array<objEmistatements> = [];
  imageData: any = '';
  uploadPercent: number;
  savedLoan: any;
  loanid: any;
  imageData_Qua: any;
  image_Qua: any;
  isimage_Qua: boolean;
  constructor(private userAPI: UserService,
    public loadingController: LoadingController,
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
    this.loanid = this.service.getLoanid();
    this.savedLoan = this.service.getLoanpage();
    if (this.savedLoan != null && this.savedLoan != '') {
      this.savedLoan = JSON.parse(this.savedLoan);
      if (this.savedLoan.step === '/loan-documnets-upload') {
        this.segments = this.savedLoan.action;
      }
      if (this.savedLoan.redirectto) {
        this.isSkipbutton = false;
        this.loanid = this.savedLoan.loanid;
        this.onToast(this.savedLoan.msg)
      }
      // this.router.navigate([loan.step]);
    }
  }
  async ngOnInit() {
    // ... 
    const alert = await this.alertController.create({
      header: 'Upload Digital Documents',
      message: 'Dear Applicant, do keep the digital copy of following documents handy to avail full benefits Your Loan application .<br>1.Id proof <br>2.Address proof<br>3.Own House Proof<br>4.Company ID Card<br>5.Job Experience Certificates<br>6.Latest 3 month Pay Slips<br>7.Salary Credited Bank Statement<br>8.Existing EMI Statements<br>',
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
        this.uploadFile();
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
      this.isFolder = false;
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
      this.isFolder = false;
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
      this.isFolder = false;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  openCam_Qua() {

    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.imageData_Qua = imageData;
      this.image_Qua = (<any>window).Ionic.WebView.convertFileSrc(imageData);
      this.isimage_Qua = true;
      this.isFolder = false;
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
      this.isFolder = false;
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
      this.isFolder = false;
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
      this.isFolder = false;
    }, (err) => {
      // Handle error
      alert("error " + JSON.stringify(err))
    });

  }
  async onToast(text: any) {
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

  nextSlide() {
    if (!this.isSkipbutton) {
      this.service.setLoanPage('');
      this.router.navigate(['tracker']);
    }
    switch (this.segments) {
      case 'segmentOne':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentTwo', redirectto: false }))
        this.segments = 'segmentTwo';
        break;
      case 'segmentTwo':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentThree', redirectto: false }))
        this.segments = 'segmentThree';
        break;
      case 'segmentThree':
        if (this.service.getLoanProfiletype() == 'professional') {
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentNine', redirectto: false }))
          this.segments = 'segmentNine';
        } else {
          this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentFour', redirectto: false }))
          this.segments = 'segmentFour';
        }

        break;
      case 'segmentNine':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentFour', redirectto: false }))
        this.segments = 'segmentFour';
        break;
      case 'segmentFour':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentFive', redirectto: false }))
        this.segments = 'segmentFive';
        break;
      case 'segmentFive':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentSix', redirectto: false }))
        this.segments = 'segmentSix';
        break;
      case 'segmentSix':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentSeven', redirectto: false }))
        this.segments = 'segmentSeven';
        break;
      case 'segmentSeven':
        this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentEight', redirectto: false }))
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
          var filename = +new Date() + this.loanid + '-' + this.idproof.replace(/\s/g, "") + '-idproof';
          var idproof = this.idproof;
          var imageData = this.imageData;
        }

        break;
      case 'segmentTwo':
        if (!this.addressproof) {
          isId = false;
        } else {
          var filename = +new Date() + this.loanid + '-' + this.addressproof.replace(/\s/g, "") + '-addressproof';
          var idproof = this.addressproof;
          var imageData = this.imageData1;
        }

        break;
      case 'segmentNine':
        // _Own
        var filename = +new Date() + this.loanid + '-pqualificationcertificates';
        var idproof: any = "pqualificationcertificates";
        var imageData = this.imageData_Qua;
        break;
      case 'segmentThree':
        // _Own
        var filename = +new Date() + this.loanid + '-OwnHouseProof';
        var idproof: any = "OwnHouseProof";
        var imageData = this.imageData_Own;
        break;
      case 'segmentFour':
        // _Company
        var filename = +new Date() + this.loanid + '-CompanyIDCard';
        var idproof: any = "CompanyIDCard";
        var imageData = this.imageData_Company;
        break;
      case 'segmentFive':
        // _Job
        var filename = +new Date() + this.loanid + '-JobExperienceCertificates';
        var idproof: any = "JobExperienceCertificates";
        var imageData = this.imageData_Job;
        break;
      case 'segmentSix':
        // _Pay
        // var filename = +new Date() + this.loanid + '-PaySlips';
        // var idproof: any = "PaySlips";
        // var imageData = this.imageData_Pay;
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
      this.loadingController.create({
        message: 'Uploading... ' + this.uploadPercent + '% '
      }).then((res) => {
        res.present();
      });

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
        // fileTransfer.upload(this.UriFileUpload, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + this.loanid), options1)
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
      // fileTransfer.onProgress = function (progressEvent) {
      //   console.log('progress');
      //   console.log(progressEvent);
      //   if (progressEvent) {
      //     this.downloadProgress = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
      //     this.episodeDownloadProgress[feedId].progress = this.downloadProgress;
      //   }
      // };
      fileTransfer.onProgress((data) => {
        this.uploadPercent = Math.round((data.loaded / data.total) * 100);
      });


      fileTransfer.upload(imageData, encodeURI(this.service.getBackenEndUrl()+'/Login/apploanupload/' + this.loanid), options1)
        .then((data: any) => {
          // success
          // loading.dismiss()

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
              loanid: this.loanid,
              isLoan: 1,
              idproof: idproof
            }
            this.http.post(this.service.getBackenEndUrl() + 'api/test', formdata).pipe(
            )
              .subscribe((res: any) => {
                this.isFileUpload = false;
                this.isFolder = true;
                this.UriFileUpload = '';
                this.loadingController.dismiss(null, 'cancel');

                this.zone.run(() => {
                  if (res.isSuccess) {
                    this.onToast(res.message);
                    if (this.savedLoan.redirectto) {
                      this.router.navigate(['tracker']);
                    } else {

                      this.nextSlide();
                    }
                  } else {
                    this.onToast(res.message);
                  }
                })
              });
          }else{
            this.loadingController.dismiss(null, 'cancel');
            alert("error" );

          }
        }, (err) => {
          // error
          this.loadingController.dismiss(null, 'cancel');
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
            if (alertData.name1.length == 0 || alertData.From.length == 0 || alertData.To.length == 0) {
              this.onToast('please fill all the details')
              return false;
            } else {
              this.fileChooser.open({ "mime": "application/pdf" })
                .then(uri => {
                  console.log(uri)
                  const fileTransfer: FileTransferObject = this.transfer.create();
                  var filename = +new Date() + this.loanid + '-BankStatement';
                  var idproof: any = "BankStatement :" + alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;

                  // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                  let options1: FileUploadOptions = {
                    fileKey: 'file',
                    fileName: filename + '.pdf',
                    headers: {},
                    params: { "app_key": "Testappkey" },
                    chunkedMode: false

                  }
                  this.userAPI.showLoader();
                  fileTransfer.upload(uri, encodeURI(this.service.getBackenEndUrl()+'/Login/apploanupload/' + this.loanid), options1)
                    .then((data: any) => {
                      // success
                      // loading.dismiss()

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
                          loanid: this.loanid,
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
                              this.userAPI.hideLoader();
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
  async addingpayslips() {
    const alert = await this.alertController.create({
      header: 'Latest three months payslips!',
      backdropDismiss: false,
      message: 'Please fill the required fields',
      inputs: [
        {
          name: 'month',
          type: 'radio',
          label: 'January',
          value: 'jan',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'February',
          value: 'February',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'March',
          value: 'March',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'April',
          value: 'April',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'May',
          value: 'May',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'June',
          value: 'June',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'July',
          value: 'July',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'August',
          value: 'August',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'September',
          value: 'September',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'October',
          value: 'October',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'November',
          value: 'November',
        },
        {
          name: 'month',
          type: 'radio',
          label: 'December',
          value: 'December',
        }       
      ],
      buttons: [
        {
          text: 'Select Upload Documnets',
          handler: (alertData) => {
            console.log(alertData)
            if (alertData == undefined) {
              this.onToast('please fill all the details')
              return false;
            } else {
              this.fileChooser.open({ "mime": "application/pdf" })
                .then(uri => {
                  console.log(uri)
                  const fileTransfer: FileTransferObject = this.transfer.create();
                  var filename = +new Date() + this.loanid + '-payslips';
                  var idproof: any = "payslips :" + alertData;

                  // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                  let options1: FileUploadOptions = {
                    fileKey: 'file',
                    fileName: filename + '.pdf',
                    headers: {},
                    params: { "app_key": "Testappkey" },
                    chunkedMode: false

                  }
                  this.userAPI.showLoader();
                  fileTransfer.upload(uri, encodeURI(this.service.getBackenEndUrl()+'/Login/apploanupload/' + this.loanid), options1)
                    .then((data: any) => {
                      // success
                      // loading.dismiss()

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
                          loanid: this.loanid,
                          monthname: alertData,
                          from: alertData,
                          to: alertData,
                          isLoan: 4,
                          idproof: idproof
                        }
                        this.http.post(this.service.getBackenEndUrl() + 'api/test', formdata).pipe(
                        )
                          .subscribe((res: any) => {
                            this.zone.run(() => {
                              this.userAPI.hideLoader();
                              if (res.isSuccess) {
                                this.onToast(res.message);
                                var obj: objbankpayslips = { monthname: alertData };
                                obj.from = uri;
                                // obj.monthname = alertData.name1;
                                // obj.to = alertData.To;
                                this.bankpayslips.push(obj);
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
            if (alertData.facility.length == 0 || alertData.banker.length == 0 || alertData.amount.length == 0 || alertData.tenure.length == 0 || alertData.outstanding.length == 0 || alertData.emi.length == 0) {
              this.onToast('please fill all the details')
              return false;
            } else {
              this.fileChooser.open({ "mime": "application/pdf" })
                .then(uri => {
                  console.log(uri)
                  const fileTransfer: FileTransferObject = this.transfer.create();
                  var filename = +new Date() + this.loanid + '-EMIDebitedBankStatement';
                  var idproof: any = "EMIDebitedBankStatement facility:" + alertData.facility + " banker:" + alertData.banker + "amount:" + alertData.amount + " tenure:" + alertData.tenure + "emi:" + alertData.emi + "outstanding:" + alertData.outstanding;

                  // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                  let options1: FileUploadOptions = {
                    fileKey: 'file',
                    fileName: filename + '.pdf',
                    headers: {},
                    params: { "app_key": "Testappkey" },
                    chunkedMode: false

                  }

                  fileTransfer.upload(uri, encodeURI(this.service.getBackenEndUrl()+'/Login/apploanupload/' + this.loanid), options1)
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
                          loanid: this.loanid,
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
                                var obj: objEmistatements = { facility: alertData.facility };
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
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (alertData) => {
            console.log('Confirm Cancel');

          }
        },
        // {
        //   text: 'Ok',
        //   handler: (alertData) => {
        //     console.log(alertData);
        //     if (alertData.facility.length == 0 || alertData.banker.length == 0 || alertData.amount.length == 0 || alertData.tenure.length == 0 || alertData.outstanding.length == 0 || alertData.emi.length == 0) {
        //       this.onToast('please fill all the details')
        //       return false;
        //     } else {
        //       var obj: objEmistatements = { facility: alertData.facility };
        //       obj.banker = alertData.banker;
        //       obj.amount = alertData.amount;
        //       obj.tenure = alertData.tenure;
        //       obj.outstanding = alertData.outstanding;
        //       obj.emi = alertData.emi;
        //       this.emiStatements.push(obj);
        //     }


        //   }
        // }

      ]
    });

    await alert.present();
  }
  // success-page
  finalStageSlide() {
    // this.router.navigate(['/coapplicant-loan-documnets']);
    this.service.setLoanPage(JSON.stringify({ step: '/success-page', status: 'complete', msg: 'Please complete the previous loan', action: 'success', redirectto: false }))
    this.router.navigate(['/success-page']);
  }
}
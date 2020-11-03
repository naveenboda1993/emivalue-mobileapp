import { HttpClient } from '@angular/common/http';
import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';
type objpartners = {
  partnername?: any,
  share?: any,
  idproof?: any,
  addressproof?: any,
  ownhouse?: any,
  latestitr?: any,
  prevoiusitr?: any,
  img?: any,
  id?: any,
};
@Component({
  selector: 'app-partners-business',
  templateUrl: './partners-business.page.html',
  styleUrls: ['./partners-business.page.scss'],
})
export class PartnersBusinessPage implements OnInit {
  items: Array<objpartners> = [];
  loanid: any;
  uploadPercent: any;
  heading: string;
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
    public alertController: AlertController,) {
    // this.loanid = '74';
    this.loanid = this.service.getLoanid();
    this.userAPI.getuserloan(localStorage.getItem('id'), this.loanid).subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.data.loan_type == 'business_loan') {
          switch (res.data.customer_type) {
            // case 'partnership':

            //   break;
            case 'pvt_ltd':
              this.heading = 'Director';
              break;
            case 'trust':
              this.heading = 'Trustee';

              break;
            case 'society':
              this.heading = 'Society member';

              break;

            default:
              this.heading = 'Partner';
              break;
          }
        }
      })
    });

  }
  getpartners() {
    // businesspartners
    this.userAPI.getBussinessPartners(localStorage.getItem('id'), this.loanid).subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.isSuccess) {
          this.items = res.data;
        }
      })
    });
  }

  ngOnInit() {
    this.getpartners();
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
  async partnerAdd() {
    const alert = await this.alertController.create({
      header: 'Adding Partner!',
      backdropDismiss: false,
      message: 'Please fill the required fields',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Partner Name'
        },
        {
          name: 'share',
          type: 'number',
          placeholder: 'Share Holding'
        }


      ],
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            if (alertData.name1.length == 0 || alertData.share.length == 0) {
              this.onToast('please fill all the details')
              return false;
            } else {
              this.http.get(this.service.getBackenEndUrl() + 'Login/businessaddpartner/' + localStorage.getItem('id')
                + '/' + encodeURIComponent(this.loanid)
                + '/' + encodeURIComponent(alertData.name1)
                + '/' + encodeURIComponent(alertData.share)
              ).pipe(
              )
                .subscribe((res: any) => {
                  this.zone.run(() => {
                    if (res.isSuccess) {
                      // // this.form.setValue([name,res]);
                      // this.form.reset();
                      this.getpartners();

                    } else {
                      this.onToast(res.message);
                    }
                  })
                });

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
  fileupload(item: objpartners, type) {
    console.log(item)
    console.log(type)
    this.fileChooser.open({ "mime": "application/pdf" })
      .then(uri => {
        console.log(uri)
        const fileTransfer: FileTransferObject = this.transfer.create();
        var filename = +new Date() + this.loanid + '-bpartner-' + type + '-id-' + item.id;
        var idproof: any = type;

        // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
        let options1: FileUploadOptions = {
          fileKey: 'file',
          fileName: filename + '.pdf',
          headers: {},
          params: { "app_key": "Testappkey" },
          chunkedMode: false

        }
        this.loadingController.create({
          message: 'Uploading... ' + this.uploadPercent + '% '
        }).then((res) => {
          res.present();
        });
        fileTransfer.onProgress((data) => {
          this.uploadPercent = Math.round((data.loaded / data.total) * 100);
        });
        fileTransfer.upload(uri, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + this.loanid), options1)
          .then((data: any) => {
            // success
            // loading.dismiss()

            var dataObject;
            Object.keys(data).map(function (key) {
              if (key == 'response') {
                dataObject = JSON.parse(data[key]);
              }
            });

            if (dataObject.isSuccess) {
              //  alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;
              switch (type) {
                case 'idproof':
                  item.idproof = dataObject.target_path;
                  break;
                case 'addressproof':
                  item.addressproof = dataObject.target_path;
                  break;
                case 'ownhouseproof':
                  item.ownhouse = dataObject.target_path;
                  break;
                case 'latestitr':
                  item.latestitr = dataObject.target_path;
                  break;
                case 'previousitr':
                  item.prevoiusitr = dataObject.target_path;
                  break;

                default:
                  break;
              }
              var formdata = {
                path: dataObject.target_path,
                userid: localStorage.getItem('id'),
                loanid: this.loanid,
                id: item.id,
                partnername: item.partnername,
                addressproof: item.addressproof,
                idproof1: item.idproof,
                latestitr: item.latestitr,
                ownhouse: item.ownhouse,
                prevoiusitr: item.prevoiusitr,
                share: item.share,
                isLoan: 6,
                idproof: idproof
              }
              this.http.post(this.service.getBackenEndUrl() + 'api/test', formdata).pipe(
              )
                .subscribe((res: any) => {
                  this.loadingController.dismiss(null, 'cancel');
                  this.zone.run(() => {
                    if (res.isSuccess) {
                      this.onToast(res.message);
                      this.getpartners();
                    } else {
                      this.onToast(res.message);
                    }
                  })
                }, (err) => {
                  alert(err)
                  this.loadingController.dismiss(null, 'cancel');

                });
            } else {
              this.loadingController.dismiss(null, 'cancel');
            }
          }, (err) => {
            // error

          });


      })
      .catch(e => console.log(e));
    // return false;
  }

  nextpage() {
    if (this.items.length == 0) {
      this.onToast("Please add atleast add one partner ")
    } else {
      this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload-business', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentNine', redirectto: false }));
      this.router.navigate(['/loan-documnets-upload-business']);
    }
  }

}

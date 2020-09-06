import { trigger, state, style, animate, transition } from '@angular/animations';
import { Component, OnInit,NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder ,Validators} from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
@Component({
  selector: 'app-segment-header-text',
  templateUrl: './segment-header-text.page.html',
  styleUrls: ['./segment-header-text.page.scss'],
  animations: [
    trigger('itemState', [
      transition('void => *', [
          style({transform: 'translateX(200%)'}),
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
    isimage:boolean=false;
  itemColor: string[];
  image: any = ''
  imageData: any = ''
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private transfer: FileTransfer,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    public camera: Camera) { 
    this.itemColor = ["#03A9F4"];
  }
  ngOnInit() {
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
      this.isimage=true;
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
      headers: {id:localStorage.getItem('id')}

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
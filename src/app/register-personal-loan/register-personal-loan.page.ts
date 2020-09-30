import { Component, OnInit, NgZone } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UserService } from '../shared/user.service';
import { error } from 'protractor';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular'//toastcontroller package
import { HttpClient } from '@angular/common/http';



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
  url: any;
  savedLoan:any;
  constructor(private userAPI: UserService,
    private formBuilder: FormBuilder,
    private toastCtrl: ToastController,
    private zone: NgZone,
    private router: Router,
    private service: CustomThemeService,
    private http: HttpClient,
    ) {
    this.itemColor = ["#03A9F4"];//to get the coloe from custom-theme service
    this.data = this.service.getTheme();//to get the selected theme color which is by default set as #F44336
    this.iconColorVar = this.data;
    this.loanid = this.service.getLoanid();
    if (this.data == "neon")//if selected color is blue 
    {
      this.itemColor = ["#03A9F4"];
    }
    this.savedLoan = this.service.getLoanpage();
    if (this.savedLoan != null) {
      this.savedLoan=JSON.parse(this.savedLoan);
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
    console.log(this.service.getBackenEndUrl())   ; 
    this.url=this.service.getBackenEndUrl()    ;
  }

  async onToast(text: any, color? : any) {
    const toast = await this.toastCtrl.create({
      cssClass: 'toastTag',
      color:  "success",
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
      this.onToast("Please Fill All The Fields")
      return false;
    } else {
      
      console.log(this.loanregisterform.value)     
      // this.http.options. { headers: headers }
      this.http.get( this.url+'Login/addpersonalloan2/' + localStorage.getItem('id') 
      + '/' + encodeURIComponent(this.loanid)
      + '/' + encodeURIComponent(this.loanregisterform.value.firstname)
      + '/' + encodeURIComponent(this.loanregisterform.value.birth)
      + '/' + encodeURIComponent(this.loanregisterform.value.company)
      + '/' + encodeURIComponent(this.loanregisterform.value.employee)
      + '/' + encodeURIComponent(this.loanregisterform.value.email)
      + '/' + encodeURIComponent(this.loanregisterform.value.salary)
      + '/' + encodeURIComponent(this.loanregisterform.value.experience)
      + '/' + encodeURIComponent(this.loanregisterform.value.pan_no)
      + '/' + encodeURIComponent(this.loanregisterform.value.material_status)
      + '/' + encodeURIComponent(this.loanregisterform.value.address)
      + '/' + encodeURIComponent(this.loanregisterform.value.city)
      + '/' + encodeURIComponent(this.loanregisterform.value.state)
      + '/' + encodeURIComponent(this.loanregisterform.value.pincode)
      ).pipe(
      )
        .subscribe((res: any) => {
          this.zone.run(() => {
            if (res.isSuccess) {
              this.onToast("Api success", 'green')
              // this.service.setLoanid(res.loan_id);
              // // this.form.setValue([name,res]);
              // this.form.reset();
              this.service.setLoanPage(JSON.stringify({ step: '/register-personal-loan2', status: 'incomplete', msg: 'Please complete the previous loan', action: 'step3',redirectto:false }))
              this.router.navigate(['/register-personal-loan2']);

            } else {
              this.onToast(res.message);
            }
          })
        });
    }
  }

}

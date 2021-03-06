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
  selector: 'app-register-business-loan',
  templateUrl: './register-business-loan.page.html',
  styleUrls: ['./register-business-loan.page.scss'],
})
export class RegisterBusinessLoanPage implements OnInit {
  public itemColor = [];
  public iconColorVar = "";
  image: any = ''
  imageData: any = ''
  data: any;
  loanregisterbusinessform: FormGroup;
  isMatching: any;
  loanid: any;
  url: any;
  savedLoan: any;
  emptype: any;
  marialstaus: any;
  states: any;
  cities: any;
  isprofession: any = false;
  isdoctor: any = false;
  professions: any;
  natureofbusiness: any;
  specialization: any;
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
    if (this.savedLoan != null && this.savedLoan != '') {
      this.savedLoan = JSON.parse(this.savedLoan);
      if (this.savedLoan.redirectto) {
        this.loanid = this.savedLoan.loanid;
        this.onToast(this.savedLoan.msg)
      }
      if (this.service.getLoanProfiletype() == 'professional') {
        this.isprofession = true;
      }
    }
    this.getcities();

  }

  async getcities() {
    await this.userAPI.showLoader();
    this.userAPI.getcitiesstates()
      .subscribe((res) => {
        this.zone.run(() => {
          console.log(res);
          if (res.isSuccess) {
            this.emptype = res.emptype;
            this.natureofbusiness = res.natureofbusiness;
            this.professions = res.professions;
            this.specialization = res.specialization;
            this.marialstaus = res.marialstaus;
            this.states = res.states;
          }
          this.userAPI.hideLoader();
        })
      });
  }
  yourFunction(event) {
    this.loanregisterbusinessform.value.city = '';
    this.states.forEach(element => {
      if (element.name == this.loanregisterbusinessform.value.state) {
        this.cities = element.cities;
      }
    });
  }
  ngOnInit() {

    this.loanregisterbusinessform = this.formBuilder.group({
      firstname: ['', Validators.required],
      birth: [''],
      experience: [''],
      material_status: [''],
      company: ['', Validators.required],
      business: ['', Validators.required],
      registrationnumber: ['', Validators.required],
      industry: ['', Validators.required],
      turnover: ['', Validators.required],
      currentstatement: [''],
      pan_no: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      pincode: ['', Validators.required],
      specialization: [''],
      profession: [''],
    });
    this.url = this.service.getBackenEndUrl();
  }

  async onToast(text: any, color?: any) {
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

  isProfession(event) {
    if (event.detail.value == 'Doctor') {
      this.isdoctor = true;
    } else {
      this.isdoctor = false;
    }
    console.log(event)
  }

  onSubmit() {

    if (!this.loanregisterbusinessform.valid) {
      this.onToast("Please Fill All The Fields")
      return false;
    } else {
      if(this.loanregisterbusinessform.value.profession== ""){
        this.loanregisterbusinessform.value.profession="empty";
      }
      if(this.loanregisterbusinessform.value.specialization== ""){
        this.loanregisterbusinessform.value.specialization="empty";
      }
      if(this.loanregisterbusinessform.value.birth== ""){
        this.loanregisterbusinessform.value.birth="nill";
      }
      if(this.loanregisterbusinessform.value.experience== ""){
        this.loanregisterbusinessform.value.experience="nill";
      }
      if(this.loanregisterbusinessform.value.material_status== ""){
        this.loanregisterbusinessform.value.material_status="nill";
      }
      if(this.loanregisterbusinessform.value.currentstatement== ""){
        this.loanregisterbusinessform.value.currentstatement="nill";
      }
      console.log(this.loanregisterbusinessform.value)
      this.http.get(this.url + 'Login/businessbasicdetails/' + localStorage.getItem('id')
        + '/' + encodeURIComponent(this.loanid)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.firstname)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.birth)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.experience)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.material_status)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.company)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.business)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.registrationnumber)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.industry)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.turnover)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.currentstatement)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.pan_no)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.address)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.city)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.state)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.pincode)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.specialization)
        + '/' + encodeURIComponent(this.loanregisterbusinessform.value.profession)
      ).pipe(
      )
        .subscribe((res: any) => {
          this.zone.run(() => {
            if (res.isSuccess) {
              this.onToast("Api success", 'green')
              // this.service.setLoanid(res.loan_id);
              // // this.form.setValue([name,res]);
              // this.form.reset();success-page
              if (this.savedLoan.redirectto) {
                this.service.setLoanPage('')
                this.router.navigate(['tracker'])
              } else {

                this.service.setLoanPage(JSON.stringify({ step: '/register-business-loan2', status: 'incomplete', msg: 'Please complete the previous loan', action: 'step3', redirectto: false }))

                if (this.service.getLoanType() == 'personal_loan') {
                  this.router.navigate(['/register-personal-loan2']);
                }
                else {
                  this.router.navigate(['/register-business-loan2']);
                  // this.router.navigate(['success-page'])
                }
              }

            } else {
              this.onToast(res.message);
            }
          })
        });
    }
  }

}

"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
    if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  }
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

exports.__esModule = true;
exports.FormLoginOnePage = void 0;

var core_1 = require("@angular/core");

var FormLoginOnePage =
/** @class */
function () {
  function FormLoginOnePage(userAPI, formBuilder, zone, http, router, service) {
    this.userAPI = userAPI;
    this.formBuilder = formBuilder;
    this.zone = zone;
    this.http = http;
    this.router = router;
    this.service = service;
    this.itemColor = [];
    this.iconColorVar = "";
    this.itemColor = ["#03A9F4"]; //to get the coloe from custom-theme service

    this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336

    this.iconColorVar = this.data;
    this.register = this.service.getresponse();

    if (this.register) {
      console.log(this.register);
      console.log(this.register.data.mobile);
    } else {
      this.register = {
        data: {
          mobile: '8639514842'
        }
      };
    }
  }

  FormLoginOnePage.prototype.ngOnInit = function () {
    this.Otpform = this.formBuilder.group({
      mobile: [''],
      otp: ['']
    });
  };

  FormLoginOnePage.prototype.onSubmit = function () {
    var _this = this;

    this.Otpform.controls['mobile'].setValue(this.register.data.mobile);
    console.log(this.Otpform.value);
    this.http.get(this.service.getBackenEndUrl() + 'Login/appotplogin/' + this.Otpform.value.mobile + '/' + this.Otpform.value.otp).pipe().subscribe(function (res) {
      _this.zone.run(function () {
        console.log(res);

        if (res.isSuccess) {
          localStorage.setItem("token", res.token);
          localStorage.setItem("id", res.id);

          _this.router.navigate(['/form-login-three']);
        } else {
          alert("OTP is invalid");
        }
      });
    }); // this.userAPI.otplogin(this.Otpform.value)
    //   .subscribe((res) => {
    //     this.zone.run(() => {
    //       console.log(res);
    //       if (res.isSuccess) {
    //         localStorage.setItem("token", res.token);
    //         localStorage.setItem("id", res.id);
    //         this.router.navigate(['/segment-header-text']);
    //       }else{
    //         alert("Login failed");
    //       }
    //     })
    //   });
  };

  FormLoginOnePage = __decorate([core_1.Component({
    selector: 'app-form-login-one',
    templateUrl: './form-login-one.page.html',
    styleUrls: ['./form-login-one.page.scss']
  })], FormLoginOnePage);
  return FormLoginOnePage;
}();

exports.FormLoginOnePage = FormLoginOnePage;
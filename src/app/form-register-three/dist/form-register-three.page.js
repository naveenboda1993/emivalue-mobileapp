"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.FormRegisterThreePage = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var miss_match_validator_1 = require("./miss-match.validator");
var FormRegisterThreePage = /** @class */ (function () {
    function FormRegisterThreePage(userAPI, formBuilder, transfer, toastCtrl, zone, router, service, loading, http, camera) {
        this.userAPI = userAPI;
        this.formBuilder = formBuilder;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.zone = zone;
        this.router = router;
        this.service = service;
        this.loading = loading;
        this.http = http;
        this.camera = camera;
        this.itemColor = [];
        this.iconColorVar = "";
        this.image = '';
        this.imageData = '';
        this.error_messages = {
            'password': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length too short.' },
                { type: 'maxlength', message: 'password length is strong.' }
            ],
            'confirmpassword': [
                { type: 'required', message: 'password is required.' },
                { type: 'minlength', message: 'password length too short.' },
                { type: 'maxlength', message: 'password length is strong.' }
            ],
            'mobile': [
                { type: 'required', message: 'Mobile Number is required.' },
                { type: 'minlength', message: 'Mobile Number at least 10 Digits' }
            ]
        };
        this.itemColor = ["#03A9F4"]; //to get the coloe from custom-theme service
        this.data = this.service.getTheme(); //to get the selected theme color which is by default set as #F44336
        this.iconColorVar = this.data;
        if (this.data == "neon") //if selected color is blue 
         {
            this.itemColor = ["#03A9F4"];
        }
    }
    FormRegisterThreePage.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            firstname: ['', forms_1.Validators.compose([forms_1.Validators.required])],
            lastname: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            mobile: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    forms_1.Validators.minLength(10)
                ])],
            password: ['', [forms_1.Validators.required, forms_1.Validators.minLength(6)]],
            confirmpassword: ['', forms_1.Validators.required]
        }, {
            Validator: miss_match_validator_1.MissMatch('password', 'confirmpassword')
        });
        console.log("hello");
    };
    FormRegisterThreePage.prototype.onToast = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            cssClass: 'toastTag',
                            color: "success",
                            showCloseButton: true,
                            position: 'top',
                            message: text,
                            closeButtonText: '| Done',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    FormRegisterThreePage.prototype.onSubmit = function () {
        var _this = this;
        // let loading =  this.loading.create();
        //  loading.present();
        // https://www.youtube.com/watch?v=FXpwVLiKowc
        // this.http.post('http://emivalue.snitchmedia.in/api/appadduser', this.form.value).pipe(
        this.http.post(this.service.getBackenEndUrl() + 'api/appadduser', this.form.value).pipe(
        // finalize(() => loading.dismiss())
        )
            .subscribe(function (res) {
            _this.zone.run(function () {
                _this.service.setresponse(res);
                if (res.isSuccess) {
                    // this.form.setValue([name,res]);
                    _this.form.reset();
                    _this.router.navigate(['/form-login-one']);
                }
                else {
                    _this.onToast(res.message);
                }
            });
        });
        // if (!this.form.valid) {
        //   return false;
        // } else {
        //   console.log(this.form.value)
        //   var res=this.userAPI.addUser(this.form.value)
        //       console.log(res);
        //     // .subscribe((res) => {
        //     //   this.zone.run(() => {
        //     //     this.service.setresponse(res);
        //     //     if(res.isSuccess){
        //     //       // this.form.setValue([name,res]);
        //     //       this.form.reset();
        //     //       this.router.navigate(['/form-login-one']);
        //     //     }
        //     //   })
        //     // });
        // }
    };
    FormRegisterThreePage = __decorate([
        core_1.Component({
            selector: 'app-form-register-three',
            templateUrl: './form-register-three.page.html',
            styleUrls: ['./form-register-three.page.scss']
        })
    ], FormRegisterThreePage);
    return FormRegisterThreePage;
}());
exports.FormRegisterThreePage = FormRegisterThreePage;

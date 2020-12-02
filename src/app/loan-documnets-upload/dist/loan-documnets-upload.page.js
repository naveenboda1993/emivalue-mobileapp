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
exports.LoanDocumnetsUploadTextPage = void 0;
var animations_1 = require("@angular/animations");
var core_1 = require("@angular/core");
var LoanDocumnetsUploadTextPage = /** @class */ (function () {
    function LoanDocumnetsUploadTextPage(userAPI, loadingController, formBuilder, transfer, zone, router, service, http, toastCtrl, fileChooser, alertController, camera) {
        this.userAPI = userAPI;
        this.loadingController = loadingController;
        this.formBuilder = formBuilder;
        this.transfer = transfer;
        this.zone = zone;
        this.router = router;
        this.service = service;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.fileChooser = fileChooser;
        this.alertController = alertController;
        this.camera = camera;
        this.segments = 'segmentOne';
        this.sliderConfig = {
            slidesPerView: 2.2,
            spaceBetween: 0
        };
        this.isimage = false;
        this.isimage1 = false;
        this.isFileUpload = false;
        this.image = '';
        this.image1 = '';
        this.imageData1 = '';
        this.imageData_Own = '';
        this.isimage_Own = false;
        this.image_Own = '';
        this.imageData_Company = '';
        this.isimage_Company = false;
        this.image_Company = '';
        this.imageData_Job = '';
        this.isimage_Job = false;
        this.image_Job = '';
        this.imageData_Pay = '';
        this.isimage_Pay = false;
        this.isSkipbutton = true;
        this.isFolder = true;
        this.image_Pay = '';
        this.bankStatements = [];
        this.bankpayslips = [];
        this.emiStatements = [];
        this.imageData = '';
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
                this.onToast(this.savedLoan.msg);
            }
            // this.router.navigate([loan.step]);
        }
    }
    LoanDocumnetsUploadTextPage.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Upload Digital Documents',
                            message: 'Dear Applicant, do keep the digital copy of following documents handy to avail full benefits Your Loan application .<br>1.Id proof <br>2.Address proof<br>3.Own House Proof<br>4.Company ID Card<br>5.Job Experience Certificates<br>6.Latest 3 month Pay Slips<br>7.Salary Credited Bank Statement<br>8.Existing EMI Statements<br>',
                            buttons: [
                                {
                                    text: 'Okay',
                                    handler: function () {
                                        // console.log(this.bankStatements);
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        this.userAPI.getcategory()
                            .subscribe(function (res) {
                            _this.zone.run(function () {
                                console.log(res);
                                if (res.isSuccess) {
                                    _this.subcategory = res.subcategory;
                                }
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openFile = function () {
        var _this = this;
        this.fileChooser.open({ "mime": "application/pdf" })
            .then(function (uri) {
            console.log(uri);
            _this.isFileUpload = true;
            _this.UriFileUpload = uri;
            _this.uploadFile();
        })["catch"](function (e) { return console.log(e); });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData = imageData;
            _this.image = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam1 = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData1 = imageData;
            _this.image1 = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage1 = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam_Own = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData_Own = imageData;
            _this.image_Own = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage_Own = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam_Qua = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData_Qua = imageData;
            _this.image_Qua = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage_Qua = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam_Company = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData_Company = imageData;
            _this.image_Company = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage_Company = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam_Job = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData_Job = imageData;
            _this.image_Job = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage_Job = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.openCam_Pay = function () {
        var _this = this;
        var options = {
            quality: 80,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.imageData_Pay = imageData;
            _this.image_Pay = window.Ionic.WebView.convertFileSrc(imageData);
            _this.isimage_Pay = true;
            _this.isFolder = false;
        }, function (err) {
            // Handle error
            alert("error " + JSON.stringify(err));
        });
    };
    LoanDocumnetsUploadTextPage.prototype.onToast = function (text) {
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
    LoanDocumnetsUploadTextPage.prototype.nextSlide = function () {
        if (!this.isSkipbutton) {
            this.service.setLoanPage('');
            this.router.navigate(['tracker']);
        }
        switch (this.segments) {
            case 'segmentOne':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentTwo', redirectto: false }));
                this.segments = 'segmentTwo';
                break;
            case 'segmentTwo':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentThree', redirectto: false }));
                this.segments = 'segmentThree';
                break;
            case 'segmentThree':
                if (this.service.getLoanProfiletype() == 'professional') {
                    this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentNine', redirectto: false }));
                    this.segments = 'segmentNine';
                }
                else {
                    this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentFour', redirectto: false }));
                    this.segments = 'segmentFour';
                }
                break;
            case 'segmentNine':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentFour', redirectto: false }));
                this.segments = 'segmentFour';
                break;
            case 'segmentFour':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentFive', redirectto: false }));
                this.segments = 'segmentFive';
                break;
            case 'segmentFive':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentSix', redirectto: false }));
                this.segments = 'segmentSix';
                break;
            case 'segmentSix':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentSeven', redirectto: false }));
                this.segments = 'segmentSeven';
                break;
            case 'segmentSeven':
                this.service.setLoanPage(JSON.stringify({ step: '/loan-documnets-upload', status: 'incomplete', msg: 'Please complete the previous loan', action: 'segmentEight', redirectto: false }));
                this.segments = 'segmentEight';
                break;
            case 'segmentEight':
                // this.router.navigate(['/coapplicant-loan-documnets']);
                // this.segments = 'segmentThree';
                break;
            default:
                break;
        }
    };
    LoanDocumnetsUploadTextPage.prototype.swtichcasesegments = function (segment) {
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
    };
    LoanDocumnetsUploadTextPage.prototype.uploadFile = function () {
        var _this = this;
        var isId = true;
        switch (this.segments) {
            case 'segmentOne':
                if (!this.idproof) {
                    isId = false;
                }
                else {
                    var filename = +new Date() + this.loanid + '-' + this.idproof.replace(/\s/g, "") + '-idproof';
                    var idproof = this.idproof;
                    var imageData = this.imageData;
                }
                break;
            case 'segmentTwo':
                if (!this.addressproof) {
                    isId = false;
                }
                else {
                    var filename = +new Date() + this.loanid + '-' + this.addressproof.replace(/\s/g, "") + '-addressproof';
                    var idproof = this.addressproof;
                    var imageData = this.imageData1;
                }
                break;
            case 'segmentNine':
                // _Own
                var filename = +new Date() + this.loanid + '-pqualificationcertificates';
                var idproof = "pqualificationcertificates";
                var imageData = this.imageData_Qua;
                break;
            case 'segmentThree':
                // _Own
                var filename = +new Date() + this.loanid + '-OwnHouseProof';
                var idproof = "OwnHouseProof";
                var imageData = this.imageData_Own;
                break;
            case 'segmentFour':
                // _Company
                var filename = +new Date() + this.loanid + '-CompanyIDCard';
                var idproof = "CompanyIDCard";
                var imageData = this.imageData_Company;
                break;
            case 'segmentFive':
                // _Job
                var filename = +new Date() + this.loanid + '-JobExperienceCertificates';
                var idproof = "JobExperienceCertificates";
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
            }).then(function (res) {
                res.present();
            });
            var fileTransfer = this.transfer.create();
            var options1 = void 0;
            if (this.isFileUpload) {
                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                options1 = {
                    fileKey: 'file',
                    fileName: filename + '.pdf',
                    headers: {},
                    params: { "app_key": "Testappkey" },
                    chunkedMode: false
                };
                imageData = this.UriFileUpload;
                // fileTransfer.upload(this.UriFileUpload, encodeURI('http://emivalue.snitchmedia.in/Login/apploanupload/' + this.loanid), options1)
                //   .then((data) => {
                //     // success
                //     alert("success" + JSON.stringify(data));
                //   }, (err) => {
                //     // error
                //     alert("error" + JSON.stringify(err));
                //   });
            }
            else {
                options1 = {
                    fileKey: 'file',
                    fileName: filename + '.jpg',
                    chunkedMode: false,
                    headers: { id: localStorage.getItem('id'), src: 'headers' },
                    params: { id: localStorage.getItem('id'), src: 'params' }
                };
            }
            // fileTransfer.onProgress = function (progressEvent) {
            //   console.log('progress');
            //   console.log(progressEvent);
            //   if (progressEvent) {
            //     this.downloadProgress = Math.floor((progressEvent.loaded / progressEvent.total) * 100);
            //     this.episodeDownloadProgress[feedId].progress = this.downloadProgress;
            //   }
            // };
            fileTransfer.onProgress(function (data) {
                _this.uploadPercent = Math.round((data.loaded / data.total) * 100);
            });
            fileTransfer.upload(imageData, encodeURI(this.service.getBackenEndUrl() + '/Login/apploanupload/' + this.loanid), options1)
                .then(function (data) {
                // success
                // loading.dismiss()
                var dataObject;
                Object.keys(data).map(function (key) {
                    if (key == 'response') {
                        dataObject = JSON.parse(data[key]);
                    }
                    console.log(data[key], key);
                });
                console.log(dataObject);
                alert(dataObject.message);
                if (dataObject.isSuccess) {
                    var formdata = {
                        path: dataObject.target_path,
                        userid: localStorage.getItem('id'),
                        loanid: _this.loanid,
                        isLoan: 1,
                        idproof: idproof
                    };
                    _this.http.post(_this.service.getBackenEndUrl() + 'api/test', formdata).pipe()
                        .subscribe(function (res) {
                        _this.isFileUpload = false;
                        _this.isFolder = true;
                        _this.UriFileUpload = '';
                        _this.loadingController.dismiss(null, 'cancel');
                        _this.zone.run(function () {
                            if (res.isSuccess) {
                                _this.onToast(res.message);
                                if (_this.savedLoan.redirectto) {
                                    _this.router.navigate(['tracker']);
                                }
                                else {
                                    _this.nextSlide();
                                }
                            }
                            else {
                                _this.onToast(res.message);
                            }
                        });
                    });
                }
                else {
                    _this.loadingController.dismiss(null, 'cancel');
                    alert("error");
                }
            }, function (err) {
                // error
                _this.loadingController.dismiss(null, 'cancel');
                alert("error" + JSON.stringify(err));
            });
        }
        else {
            alert('Please select id proof');
        }
    };
    LoanDocumnetsUploadTextPage.prototype.presentAlertPrompt = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function (alertData) {
                                        if (alertData.name1.length == 0 || alertData.From.length == 0 || alertData.To.length == 0) {
                                            _this.onToast('please fill all the details');
                                            return false;
                                        }
                                        else {
                                            _this.fileChooser.open({ "mime": "application/pdf" })
                                                .then(function (uri) {
                                                console.log(uri);
                                                var fileTransfer = _this.transfer.create();
                                                var filename = +new Date() + _this.loanid + '-BankStatement';
                                                var idproof = "BankStatement :" + alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;
                                                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                                                var options1 = {
                                                    fileKey: 'file',
                                                    fileName: filename + '.pdf',
                                                    headers: {},
                                                    params: { "app_key": "Testappkey" },
                                                    chunkedMode: false
                                                };
                                                _this.userAPI.showLoader();
                                                fileTransfer.upload(uri, encodeURI(_this.service.getBackenEndUrl() + '/Login/apploanupload/' + _this.loanid), options1)
                                                    .then(function (data) {
                                                    // success
                                                    // loading.dismiss()
                                                    var dataObject;
                                                    Object.keys(data).map(function (key) {
                                                        if (key == 'response') {
                                                            dataObject = JSON.parse(data[key]);
                                                        }
                                                        console.log(data[key], key);
                                                    });
                                                    console.log(dataObject);
                                                    if (dataObject.isSuccess) {
                                                        //  alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;
                                                        var formdata = {
                                                            path: dataObject.target_path,
                                                            userid: localStorage.getItem('id'),
                                                            loanid: _this.loanid,
                                                            bankname: alertData.name1,
                                                            from: alertData.From,
                                                            to: alertData.To,
                                                            isLoan: 2,
                                                            idproof: idproof
                                                        };
                                                        _this.http.post(_this.service.getBackenEndUrl() + 'api/test', formdata).pipe()
                                                            .subscribe(function (res) {
                                                            _this.zone.run(function () {
                                                                _this.userAPI.hideLoader();
                                                                if (res.isSuccess) {
                                                                    _this.onToast(res.message);
                                                                    var obj = { bankname: alertData.name1 };
                                                                    obj.from = alertData.From;
                                                                    obj.bankname = alertData.name1;
                                                                    obj.to = alertData.To;
                                                                    _this.bankStatements.push(obj);
                                                                }
                                                                else {
                                                                    _this.onToast(res.message);
                                                                }
                                                            });
                                                        });
                                                    }
                                                }, function (err) {
                                                    // error
                                                });
                                            })["catch"](function (e) { return console.log(e); });
                                            // return false;
                                        }
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanDocumnetsUploadTextPage.prototype.addingpayslips = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Latest three months payslips!',
                            backdropDismiss: false,
                            message: 'Please fill the required fields',
                            inputs: [
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'January',
                                    value: 'jan'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'February',
                                    value: 'February'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'March',
                                    value: 'March'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'April',
                                    value: 'April'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'May',
                                    value: 'May'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'June',
                                    value: 'June'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'July',
                                    value: 'July'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'August',
                                    value: 'August'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'September',
                                    value: 'September'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'October',
                                    value: 'October'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'November',
                                    value: 'November'
                                },
                                {
                                    name: 'month',
                                    type: 'radio',
                                    label: 'December',
                                    value: 'December'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Select Upload Documnets',
                                    handler: function (alertData) {
                                        console.log(alertData);
                                        if (alertData == undefined) {
                                            _this.onToast('please fill all the details');
                                            return false;
                                        }
                                        else {
                                            _this.fileChooser.open({ "mime": "application/pdf" })
                                                .then(function (uri) {
                                                console.log(uri);
                                                var fileTransfer = _this.transfer.create();
                                                var filename = +new Date() + _this.loanid + '-payslips';
                                                var idproof = "payslips :" + alertData;
                                                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                                                var options1 = {
                                                    fileKey: 'file',
                                                    fileName: filename + '.pdf',
                                                    headers: {},
                                                    params: { "app_key": "Testappkey" },
                                                    chunkedMode: false
                                                };
                                                _this.userAPI.showLoader();
                                                fileTransfer.upload(uri, encodeURI(_this.service.getBackenEndUrl() + '/Login/apploanupload/' + _this.loanid), options1)
                                                    .then(function (data) {
                                                    // success
                                                    // loading.dismiss()
                                                    var dataObject;
                                                    Object.keys(data).map(function (key) {
                                                        if (key == 'response') {
                                                            dataObject = JSON.parse(data[key]);
                                                        }
                                                        console.log(data[key], key);
                                                    });
                                                    console.log(dataObject);
                                                    if (dataObject.isSuccess) {
                                                        //  alertData.name1 + " FromDate:" + alertData.From + "EndDate:" + alertData.To;
                                                        var formdata = {
                                                            path: dataObject.target_path,
                                                            userid: localStorage.getItem('id'),
                                                            loanid: _this.loanid,
                                                            monthname: alertData,
                                                            from: alertData,
                                                            to: alertData,
                                                            isLoan: 4,
                                                            idproof: idproof
                                                        };
                                                        _this.http.post(_this.service.getBackenEndUrl() + 'api/test', formdata).pipe()
                                                            .subscribe(function (res) {
                                                            _this.zone.run(function () {
                                                                _this.userAPI.hideLoader();
                                                                if (res.isSuccess) {
                                                                    _this.onToast(res.message);
                                                                    var obj = { monthname: alertData };
                                                                    obj.from = uri;
                                                                    // obj.monthname = alertData.name1;
                                                                    // obj.to = alertData.To;
                                                                    _this.bankpayslips.push(obj);
                                                                }
                                                                else {
                                                                    _this.onToast(res.message);
                                                                }
                                                            });
                                                        });
                                                    }
                                                }, function (err) {
                                                    // error
                                                });
                                            })["catch"](function (e) { return console.log(e); });
                                            // return false;
                                        }
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        console.log('Confirm Cancel');
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoanDocumnetsUploadTextPage.prototype.loanstatementsAdd = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
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
                                    handler: function (alertData) {
                                        if (alertData.facility.length == 0 || alertData.banker.length == 0 || alertData.amount.length == 0 || alertData.tenure.length == 0 || alertData.outstanding.length == 0 || alertData.emi.length == 0) {
                                            _this.onToast('please fill all the details');
                                            return false;
                                        }
                                        else {
                                            _this.fileChooser.open({ "mime": "application/pdf" })
                                                .then(function (uri) {
                                                console.log(uri);
                                                var fileTransfer = _this.transfer.create();
                                                var filename = +new Date() + _this.loanid + '-EMIDebitedBankStatement';
                                                var idproof = "EMIDebitedBankStatement facility:" + alertData.facility + " banker:" + alertData.banker + "amount:" + alertData.amount + " tenure:" + alertData.tenure + "emi:" + alertData.emi + "outstanding:" + alertData.outstanding;
                                                // regarding detailed description of this you cn just refere ionic 2 transfer plugin in official website
                                                var options1 = {
                                                    fileKey: 'file',
                                                    fileName: filename + '.pdf',
                                                    headers: {},
                                                    params: { "app_key": "Testappkey" },
                                                    chunkedMode: false
                                                };
                                                fileTransfer.upload(uri, encodeURI(_this.service.getBackenEndUrl() + '/Login/apploanupload/' + _this.loanid), options1)
                                                    .then(function (data) {
                                                    // success
                                                    // loading.dismiss()
                                                    _this.userAPI.hideLoader();
                                                    var dataObject;
                                                    Object.keys(data).map(function (key) {
                                                        if (key == 'response') {
                                                            dataObject = JSON.parse(data[key]);
                                                        }
                                                        console.log(data[key], key);
                                                    });
                                                    console.log(dataObject);
                                                    if (dataObject.isSuccess) {
                                                        // "EMIDebitedBankStatement facility:" + alertData.facility + " banker:" + alertData.banker + "amount:" + alertData.amount + " tenure:" + alertData.tenure + "emi:" + alertData.tenure+ "outstanding:" + alertData.outstanding;
                                                        var formdata = {
                                                            path: dataObject.target_path,
                                                            userid: localStorage.getItem('id'),
                                                            loanid: _this.loanid,
                                                            facility: alertData.facility,
                                                            banker: alertData.banker,
                                                            amount: alertData.amount,
                                                            tenure: alertData.tenure,
                                                            emi: alertData.emi,
                                                            outstanding: alertData.outstanding,
                                                            isLoan: 3,
                                                            idproof: idproof
                                                        };
                                                        _this.http.post(_this.service.getBackenEndUrl() + 'api/test', formdata).pipe()
                                                            .subscribe(function (res) {
                                                            _this.zone.run(function () {
                                                                if (res.isSuccess) {
                                                                    _this.onToast(res.message);
                                                                    var obj = { facility: alertData.facility };
                                                                    obj.facility = alertData.facility;
                                                                    obj.banker = alertData.banker;
                                                                    obj.amount = alertData.amount;
                                                                    obj.tenure = alertData.tenure;
                                                                    obj.outstanding = alertData.outstanding;
                                                                    obj.emi = alertData.emi;
                                                                    _this.emiStatements.push(obj);
                                                                }
                                                                else {
                                                                    _this.onToast(res.message);
                                                                }
                                                            });
                                                        });
                                                    }
                                                }, function (err) {
                                                    // error
                                                });
                                            })["catch"](function (e) { return console.log(e); });
                                            // return false;
                                        }
                                    }
                                },
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function (alertData) {
                                        console.log('Confirm Cancel');
                                    }
                                },
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // success-page
    LoanDocumnetsUploadTextPage.prototype.finalStageSlide = function () {
        // this.router.navigate(['/coapplicant-loan-documnets']);
        this.service.setLoanPage(JSON.stringify({ step: '/success-page', status: 'complete', msg: 'Please complete the previous loan', action: 'success', redirectto: false }));
        this.router.navigate(['/success-page']);
    };
    LoanDocumnetsUploadTextPage = __decorate([
        core_1.Component({
            selector: 'app-loan-documnets-upload',
            templateUrl: './loan-documnets-upload.page.html',
            styleUrls: ['./loan-documnets-upload.page.scss'],
            animations: [
                animations_1.trigger('itemState', [
                    animations_1.transition('void => *', [
                        animations_1.style({ transform: 'translateX(200%)' }),
                        animations_1.animate('300ms ease-in')
                    ])
                ])
            ]
        })
    ], LoanDocumnetsUploadTextPage);
    return LoanDocumnetsUploadTextPage;
}());
exports.LoanDocumnetsUploadTextPage = LoanDocumnetsUploadTextPage;

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.UserService = void 0;
var core_1 = require("@angular/core");
// import { Song } from './song';
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http, http2, service, loadingController) {
        this.http = http;
        this.http2 = http2;
        this.service = service;
        this.loadingController = loadingController;
        this.httpOptions = {
            headers: new http_1.HttpHeaders({ 'Content-Type': 'application/json' })
        };
        this.baseurl = this.service.getBackenEndUrl() + '/api';
        this.baseloginurl = this.service.getBackenEndUrl() + '/Login';
        this.baseloanurl = this.service.getBackenEndUrl() + '/Loan';
    }
    UserService.prototype.getcategory = function () {
        return this.http.get(this.baseurl + '/getcategory', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.gethowitworks = function () {
        return this.http.get(this.baseloanurl + '/gethowitworks', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getfaqlist = function () {
        return this.http.get(this.baseloanurl + '/getfaqlist', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getcitiesstates = function () {
        return this.http.get(this.baseloanurl + '/getcountrieslist', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getuserloan = function (userid, loanid) {
        return this.http.get(this.baseloginurl + '/getuserloan/' + userid + '/' + loanid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getBussinessPartners = function (userid, loanid) {
        return this.http.get(this.baseloginurl + '/businesspartners/' + userid + '/' + loanid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getUserLoans = function (userid) {
        return this.http.get(this.baseloginurl + '/getuserloans/' + userid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getUserReferrals = function (userid) {
        return this.http.get(this.baseloginurl + '/getuserreferrals/' + userid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getLoansTracker = function (loanid) {
        return this.http.get(this.baseloginurl + '/getloantracker/' + loanid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getvalidateloan = function (loanid) {
        return this.http.get(this.baseloginurl + '/getvalidateloan/' + loanid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getchannel = function () {
        return this.http.get(this.baseloanurl + '/channelpartenrs/', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.intro = function () {
        return this.http.get(this.baseloanurl + '/intro/', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getbanners = function () {
        return this.http.get(this.baseloanurl + '/baners/', this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getuserbanks = function (id) {
        return this.http.get(this.baseloginurl + '/getuserbanks/' + id, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.getmobileotp = function (number) {
        return this.http.get(this.baseloginurl + '/getmobileotp/' + number, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.changepassword = function (number, otp, passowrd) {
        return this.http.get(this.baseloginurl + '/changepassword/' + number + '/' + otp + '/' + passowrd, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.deleteuserbank = function (id) {
        return this.http.get(this.baseloginurl + '/deleteuserbank/' + id, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.deleteUserloan = function (loanid) {
        return this.http.get(this.baseloginurl + '/deleteuserloan/' + loanid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.deleteUserrefer = function (referid) {
        return this.http.get(this.baseloginurl + '/deleteuserrefer/' + referid, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('get category error')));
    };
    UserService.prototype.uploadFile = function (data) {
        return this.http.post(this.baseurl + '/appupload', data, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Upload file error')));
    };
    UserService.prototype.addUser = function (user) {
        //    this.http2.post(this.baseurl+'/appadduser', user, {})
        //   .then(data => {
        //     console.log(data.status);
        //     console.log(data.data); // data received by server
        //     console.log(data.headers);
        // return data;
        //   })
        //   .catch(error => {
        //     console.log(error.status);
        //     console.log(error.error); // error message as string
        //     console.log(error.headers);
        //   });
        return this.http.post(this.baseurl + '/appadduser', user, this.httpOptions)
            // return this.http.post<any>('http://emivalue.snitchmedia.in/Crud/test', user, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Add User')));
        // .pipe(catchError( data => of(I caught: ${JSON.stringify(data)})))
        // .subscribe((data)=>{
        //   this.param.data = data;
        //   alert('subscribe : ’ + JSON.stringify(data));
        //   }
    };
    UserService.prototype.login = function (user) {
        return this.http.post(this.baseurl + '/applogin', user, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Add User')));
    };
    UserService.prototype.otplogin = function (user) {
        return this.http.post(this.baseurl + '/appotplogin', user, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Add User')));
    };
    UserService.prototype.personalloancreate = function (data) {
        return this.http.post(this.baseurl + '/test1', data, this.httpOptions)
            .pipe(operators_1.catchError(this.handleError('Add Persnoal Loan')));
    };
    UserService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error);
            console.log(operation + " failed: " + error.message);
            alert(error + ' detailed ' + (operation + " failed: " + error.message));
            return rxjs_1.of(result);
        };
    };
    // Show the loader for infinite time
    UserService.prototype.showLoader = function (text) {
        this.loadingController.create({
            message: 'Please wait...'
        }).then(function (res) {
            res.present();
        });
    };
    // Hide the loader if already created otherwise return error
    UserService.prototype.hideLoader = function () {
        var _this = this;
        setTimeout(function () {
            _this.loadingController.dismiss(null, 'cancel').then(function (res) {
                console.log('Loading dismissed!', res);
            })["catch"](function (error) {
                console.log('error', error);
            });
        }, 2000);
    };
    UserService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

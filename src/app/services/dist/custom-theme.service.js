"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CustomThemeService = void 0;
var core_1 = require("@angular/core");
var CustomThemeService = /** @class */ (function () {
    function CustomThemeService() {
        this.baseurl = 'http://dev.emivalue.com/api';
        // public baseurl = 'http://emivalue.snitchmedia.in/api';
        // public backendurl = 'http://emivalue.snitchmedia.in/';
        this.backendurl = 'http://dev.emivalue.com/';
    }
    CustomThemeService.prototype.getBaseUrl = function () {
        return this.baseurl;
    };
    CustomThemeService.prototype.getBackenEndUrl = function () {
        return this.backendurl;
    };
    CustomThemeService.prototype.setTheme = function (c) {
        this.color = c;
    };
    CustomThemeService.prototype.getTheme = function () {
        return this.color;
    };
    CustomThemeService.prototype.setresponse = function (c) {
        this.response = c;
    };
    CustomThemeService.prototype.getresponse = function () {
        return this.response;
    };
    CustomThemeService.prototype.setLoanid = function (c) {
        localStorage.setItem("loanid", c);
        this.loanid = c;
    };
    CustomThemeService.prototype.getLoanid = function () {
        this.loanid = localStorage.getItem("loanid");
        return this.loanid;
    };
    CustomThemeService.prototype.setLoanPage = function (c) {
        localStorage.setItem("applyloan", c);
    };
    CustomThemeService.prototype.getLoanpage = function () {
        return localStorage.getItem("applyloan");
    };
    CustomThemeService.prototype.getUser = function () {
        return JSON.parse(localStorage.getItem("user"));
    };
    CustomThemeService.prototype.setLoanEmployedType = function (employedType) {
        localStorage.setItem("setLoanEmployedType", employedType);
        this.employedType = employedType;
    };
    CustomThemeService.prototype.getLoanEmployedType = function () {
        return localStorage.getItem("setLoanEmployedType");
        ;
    };
    CustomThemeService.prototype.setLoanProfiletype = function (profileType) {
        localStorage.setItem("profileType", profileType);
    };
    CustomThemeService.prototype.getLoanProfiletype = function () {
        return localStorage.getItem("profileType");
        ;
    };
    CustomThemeService.prototype.setLoantype = function (personalloan) {
        this.loantype = personalloan;
    };
    CustomThemeService.prototype.getLoanType = function () {
        return this.loantype;
    };
    CustomThemeService.prototype.setSavedloanid = function (savedloanid) {
        this.savedloanid = savedloanid;
    };
    CustomThemeService.prototype.getSavedloanid = function () {
        return this.savedloanid;
    };
    CustomThemeService.prototype.setloanprofile = function (loanprofile) {
        this.loanprofile = loanprofile;
    };
    CustomThemeService.prototype.getloanprofile = function () {
        return this.loanprofile;
    };
    CustomThemeService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], CustomThemeService);
    return CustomThemeService;
}());
exports.CustomThemeService = CustomThemeService;

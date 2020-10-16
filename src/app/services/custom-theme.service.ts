import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {

  public color;
  public response;
  public loanid;
  public baseurl = 'http://emivalue.snitchmedia.in/api';
  public backendurl = 'http://emivalue.snitchmedia.in/';
  loantype: any;
  savedloanid: any;
  loanprofile: any;
  constructor() {
  }
  public getBaseUrl() {
    return this.baseurl;
  }
  public getBackenEndUrl() {
    return this.backendurl;
  }
  public setTheme(c) {
    this.color = c;
  }
  public getTheme() {
    return this.color;
  }
  public setresponse(c) {
    this.response = c;
  }
  public getresponse() {
    return this.response;
  }
  public setLoanid(c) {
    localStorage.setItem("loanid", c);
    this.loanid = c;
  }
  public getLoanid() {
    this.loanid = localStorage.getItem("loanid");
    return this.loanid;
  }
  public setLoanPage(c) {
    localStorage.setItem("applyloan", c);
  }
  public getLoanpage() {
    return localStorage.getItem("applyloan");
  }
  public getUser() {
    return JSON.parse(localStorage.getItem("user"));
  }
  public setLoantype(personalloan: any) {
    this.loantype = personalloan;
  }
  public getLoanType() {
    return this.loantype;
  }
  public setSavedloanid(savedloanid: any) {
    this.savedloanid = savedloanid;
  }
  public getSavedloanid() {
    return this.savedloanid;
  }
  public setloanprofile(loanprofile: any) {
    this.loanprofile = loanprofile;
  }
  public getloanprofile() {
    return this.loanprofile;
  }
}

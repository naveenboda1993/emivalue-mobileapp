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
}

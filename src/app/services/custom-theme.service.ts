import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomThemeService {
  public color;
  public response;
  constructor() {
   }
  public setTheme(c){
    this.color = c;
  }
  public getTheme(){
    return this.color;
  }
  public setresponse(c){
    this.response = c;
  }
  public getresponse(){
    return this.response;
  }
}

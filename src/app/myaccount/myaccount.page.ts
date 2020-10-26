import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  constructor(public menuCtrl: MenuController, private router: Router,) {
    this.menuCtrl.close('Menu1');
    this.menuCtrl.close('Menu2');
  }

  ngOnInit() {
    this.menuCtrl.close('Menu1');
    this.menuCtrl.close('Menu2');
  }
  logout() {
    localStorage.removeItem("loanid");
    localStorage.removeItem("id");
    localStorage.removeItem("applyloan");
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    localStorage.removeItem("setLoanEmployedType");
    localStorage.removeItem("profileType");
    this.router.navigate(['form-login-three']);
  }

}

import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.page.html',
  styleUrls: ['./myaccount.page.scss'],
})
export class MyaccountPage implements OnInit {

  constructor( public menuCtrl: MenuController,) { 
    this.menuCtrl.close('Menu1');
    this.menuCtrl.close('Menu2');
  }
  
  ngOnInit() {
    this.menuCtrl.close('Menu1');
    this.menuCtrl.close('Menu2');
  }

}

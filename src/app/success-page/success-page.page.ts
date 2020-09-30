import { Component, OnInit } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';

@Component({
  selector: 'app-success-page',
  templateUrl: './success-page.page.html',
  styleUrls: ['./success-page.page.scss'],
})
export class SuccessPagePage implements OnInit {

  constructor( private service: CustomThemeService) { 
    this.service.setLoanPage('')
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.page.html',
  styleUrls: ['./tracker.page.scss'],
})
export class TrackerPage implements OnInit {
  loantype:any;
  loanamount:any;
  status:any;
  updatedon:any;
  constructor() { }

  ngOnInit() {
    this.loantype=''
    this.loanamount=''
    this.status=''
    this.updatedon=''

    this.GetLoans();
  }

  GetLoans(){
    
  }

}

import { Component, NgZone, OnInit } from '@angular/core';
import { CustomThemeService } from '../services/custom-theme.service';
import { UserService } from '../shared/user.service';

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
  user:any;
  loans:any;
  constructor( private service: CustomThemeService,private userAPI: UserService,private zone: NgZone,) {
     this.user=this.service.getUser();
     this.userAPI.getUserLoans(this.user.id).subscribe((res) => {
      this.zone.run(() => {
        console.log(res);
        if (res.isSuccess) {
         this.loans=res.loans;
        }
        this.userAPI.hideLoader();
      })
    });
   }

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

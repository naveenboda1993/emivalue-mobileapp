import { Component, OnInit } from '@angular/core';
import { Events } from '@ionic/angular';
import { CustomThemeService } from '../services/custom-theme.service';


@Component({
  selector: 'app-badge-setting',
  templateUrl: './badge-setting.page.html',
  styleUrls: ['./badge-setting.page.scss'],
})
export class BadgeSettingPage implements OnInit {
  public itemColor=[
  ];
  public iconColorVar="";
  data: any;
  public items = [
 
    { text: "Chats",     icon: "chatbubbles",  },
    { text: "Help",     icon: "help-circle",   },
    { text: "Account",     icon: "key",   },
    { text: "Chats",     icon: "chatbubbles",  },
    { text: "Help",     icon: "help-circle",   },
    { text: "Account",     icon: "key",   },
    { text: "Passwords",     icon: "lock",   },
    { text: "Notifcation",     icon: "notifications",  },
    { text: "Invite a friend",     icon: "add",   },
    { text: "Data and storage usage",     icon: "cloud",   },
   
  ];
  constructor(private events: Events, private service:CustomThemeService) { 
    this.itemColor= ["#F44336"];
    console.log("SWIPE");

    this.data=this.service.getTheme();

    this.iconColorVar = this.data;
      console.log("SWIPE",this.data);
      if(this.data == "autumn"){
      this.itemColor=["#F44336"];
      }
      else if(this.data == "night"){
      this.itemColor=["#673AB7"];
      }
      else if(this.data == "neon"){
      this.itemColor=["#03A9F4"];
      }
      else if(this.data == "orginal"){
      this.itemColor=["#4CAF50"];
      }
      else if(this.data == "red"){
      this.itemColor=["#9E9E9E"];
      }
      else if(this.data == "purple"){
      this.itemColor=["#E91E63"];
      }
      else if(this.data == "Lightblue"){
      this.itemColor=["#3F51B5"];
      }
      else if(this.data == "Lightgreen"){
      this.itemColor=["#00BCD4"];
      }
      else if(this.data == "Lightgray"){
      this.itemColor=["#8BC34A"];
      }
      else if(this.data == "blue"){
      this.itemColor=["#008577"];
      }
  }

  ngOnInit() {
  }

}

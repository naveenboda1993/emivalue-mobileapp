import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular'//toastcontroller package

@Component({
    selector: 'app-toast-top',
    templateUrl: './toast-top.page.html',
    styleUrls: ['./toast-top.page.scss'],
})
export class ToastTopPage implements OnInit {
    public images = [
        { text: "Deadpool", email: "hannanfarooq@gmail.com ", img: "assets/images/facebook-logo.png", badgeValue: "10" },
        { text: "Batman", email: "hannanfarooq@gmail.com ", img: "assets/images/gmail-logo.png", badgeValue: "20" },
        { text: "Spiderman", email: "hannanfarooq@gmail.com ", img: "assets/images/twitter-logo.png", badgeValue: "5" },
    ];
    //taost package declaration
    constructor(private toastCtrl: ToastController) { }

    ngOnInit() {
    }
     //toast controller function
    async showToastWithOptions() {
        const toast = await this.toastCtrl.create({
            cssClass: 'toastTag',
            color: "primary",
            showCloseButton: true,
            position: 'top',
            message: "Hello this is middle Toast",
            closeButtonText: '| Done',
            duration: 2000,
        });
        toast.present();
    }
}
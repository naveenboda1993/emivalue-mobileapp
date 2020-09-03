import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';//toastcontroller package
import { ToastOptions } from '@ionic/core';

@Component({
    selector: 'app-toast-middle',
    templateUrl: './toast-middle.page.html',
    styleUrls: ['./toast-middle.page.scss'],
})
export class ToastMiddlePage implements OnInit {
    toastoptions: ToastOptions;
    public images = [
        { text: "Deadpool", email: "hannanfarooq@gmail.com ", img: "assets/images/facebook-logo.png", badgeValue: "10" },
        { text: "Batman", email: "hannanfarooq@gmail.com ", img: "assets/images/gmail-logo.png", badgeValue: "20" },
        { text: "Spiderman", email: "hannanfarooq@gmail.com ", img: "assets/images/twitter-logo.png", badgeValue: "5" },
    ];
    //toast package declaration
    constructor(public toast: ToastController, NavCtrl: NavController, alertCtrl: AlertController) {
    }
    ngOnInit() {
    }
    //toast controller function
    async showToastWithOptions() {
        const toast = await this.toast.create({
            cssClass: 'toastTag',
            color: "primary",
            showCloseButton: true,
            position: 'middle',
            message: "Hello this is middle Toast",
            closeButtonText: '| Done',
            duration: 2000,
        });
        toast.present();
    }

}
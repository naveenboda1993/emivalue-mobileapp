import { Component, OnInit } from '@angular/core';
import { ToastController, NavController, AlertController } from '@ionic/angular';//toast controller package

@Component({
    selector: 'app-toast-bottom',
    templateUrl: './toast-bottom.page.html',
    styleUrls: ['./toast-bottom.page.scss'],
})
export class ToastBottomPage implements OnInit {
    //action sheet package declaration
    constructor(public toast: ToastController) { }

    ngOnInit() {
    }
    public images = [
        { text: "Deadpool", email: "hannanfarooq@gmail.com ", img: "assets/images/facebook-logo.png", badgeValue: "10" },
        { text: "Batman", email: "hannanfarooq@gmail.com ", img: "assets/images/gmail-logo.png", badgeValue: "20" },
        { text: "Spiderman", email: "hannanfarooq@gmail.com ", img: "assets/images/twitter-logo.png", badgeValue: "5" },
    ];

    async showToastWithOptions() {
        const toast = await this.toast.create({
            cssClass: 'toastTag',
            color: "danger",
            showCloseButton: true,
            position: 'bottom',
            message: "Error!!! Please enter correct crdentials",
            closeButtonText: '| Done',
            duration: 2000
        });
        toast.present();
    }
}
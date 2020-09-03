import { Component, OnInit } from '@angular/core';

@Component({
selector: 'app-radio-simple-right',
templateUrl: './radio-simple-right.page.html',
styleUrls: ['./radio-simple-right.page.scss'],
})
export class RadioSimpleRightPage implements OnInit {

public listItem = [
"Emma Watson",
"Alina Jason",
"Leta James",
"Maria Amber",
"Amber jeff",
"Leta James",
"Selina Pearls",
"Cardi Gelly",
"Amber jeff",
"Cardi Gelly",
"Emma Watson",
"Alina Jason",
"Leta James",
"Cardi Gelly",
];

constructor() { }

ngOnInit() {
}

}
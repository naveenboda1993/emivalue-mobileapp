import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-searchbar-simple',
    templateUrl: './searchbar-simple.page.html',
    styleUrls: ['./searchbar-simple.page.scss'],
})
export class SearchbarSimplePage implements OnInit {
    items;
    constructor() {
        this.initializeItems();
    }
    //function for searching item
    initializeItems() {
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos Aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington'
        ];
    }
    ngOnInit() {
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();

        // set val to the value of the ev target
        var val = ev.target.value;

        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}
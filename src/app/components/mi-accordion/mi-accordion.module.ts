import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MiAccordionComponent } from './mi-accordion.component';
@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [MiAccordionComponent],
    exports: [MiAccordionComponent]
})
export class MiAccordionPageModule { }

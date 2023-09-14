import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import {SharedModule} from "../../shared/shared.module";
import { WhyUsComponent } from './components/why-us/why-us.component';

@NgModule({
  declarations: [
    HomeComponent,
    WhyUsComponent,
  ],
    imports: [
        CommonModule,
        SharedModule,
    ],
  exports:[
    HomeComponent,
  ]
})
export class HomeModule { }

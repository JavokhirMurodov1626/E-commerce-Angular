import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from  '@angular/common/http';
import { NgToastModule } from 'ng-angular-popup'

import { HomeComponent } from './components/home/home.component';
import { ProductsGridComponent } from './components/products-grid/products-grid.component';
import { AppRoutingModule } from 'src/app/app-routing.module';


@NgModule({
  declarations: [HomeComponent, ProductsGridComponent],
  imports: [CommonModule, SharedModule,HttpClientModule, AppRoutingModule, NgToastModule],
  exports: [HomeComponent],
})
export class HomeModule {}

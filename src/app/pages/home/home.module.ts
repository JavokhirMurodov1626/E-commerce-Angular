import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';

@NgModule({
  declarations: [HomeComponent, FeaturedProductsComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}

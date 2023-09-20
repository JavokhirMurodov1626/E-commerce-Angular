import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { FeaturedProductCardComponent } from './components/featured-product-card/featured-product-card.component';

@NgModule({
  declarations: [HomeComponent, FeaturedProductsComponent, FeaturedProductCardComponent],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}

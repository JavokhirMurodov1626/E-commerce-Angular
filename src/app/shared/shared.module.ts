import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [StarRatingComponent, ProductCardComponent, LoaderComponent, BannerComponent,],
  imports: [CommonModule],
  exports: [StarRatingComponent, ProductCardComponent, LoaderComponent, BannerComponent],
})
export class SharedModule {}

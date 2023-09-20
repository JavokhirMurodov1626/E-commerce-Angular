import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [StarRatingComponent, ProductCardComponent, LoaderComponent,],
  imports: [CommonModule],
  exports: [StarRatingComponent,ProductCardComponent,LoaderComponent],
})
export class SharedModule {}

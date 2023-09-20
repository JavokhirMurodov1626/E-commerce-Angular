import { Component, Input } from '@angular/core';
import { IFeaturedProduct } from '../featured-products/featured-products.component';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss'],
})
export class FeaturedProductCardComponent {
  isImageLoad: boolean = false;
  @Input() featuredProduct?: IFeaturedProduct;

  numToEmptyArray(num: number) {
    return new Array(num).fill(',');
  }

  imageLoad() {
    this.isImageLoad = true;
  }
}

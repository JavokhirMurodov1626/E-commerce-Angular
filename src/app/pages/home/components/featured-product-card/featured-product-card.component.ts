import { Component, Input } from '@angular/core';
import { FeaturedProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-featured-product-card',
  templateUrl: './featured-product-card.component.html',
  styleUrls: ['./featured-product-card.component.scss'],
})
export class FeaturedProductCardComponent {
  isImageLoad: boolean = false;
  @Input() featuredProduct?: FeaturedProductModel;

  numToEmptyArray(num: number) {
    return new Array(num).fill(',');
  }

  imageLoad() {
    this.isImageLoad = true;
  }
}

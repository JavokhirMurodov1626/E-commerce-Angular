import { Component, OnInit } from '@angular/core';
import { FeaturedProductModel } from 'src/app/shared/models/product.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent implements OnInit {
  DUMMY_FEATURED_PRODUCT?: FeaturedProductModel[];
  errorMessage?: string;
  loading: boolean = true;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getFeaturedProduct().subscribe({
      next: (value) => {
        this.DUMMY_FEATURED_PRODUCT = value;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = err.message;
        this.loading = false;
      },
    });
  }
}

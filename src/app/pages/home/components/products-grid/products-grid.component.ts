import { Component, OnInit } from '@angular/core';
import ProductsGridService from '../../services/products-grid.service'; // ProductsCardList,
import { ProductsCardList } from '../../services/products-grid.model';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/shared/components/loader/loader.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-products-grid',
  templateUrl: './products-grid.component.html',
  styleUrls: ['./products-grid.component.scss'],
})
export class ProductsGridComponent implements OnInit {
  categories: { id: string; category: string }[] = [
    { id: 'all', category: 'all' },
  ];

  products: ProductsCardList[] = [];

  displayedProducts: ProductsCardList[] = [];

  currentIndex = 0;

  error: string = '';

  currentCategory: string = '';

  showLoadMoreButton: boolean = true;

  constructor(
    private productsGridService: ProductsGridService,
    private route: ActivatedRoute,
    private router: Router,
    private loaderService: LoaderService,
    private toast: NgToastService
  ) {}

  ngOnInit(): void {
    //setting default all category query
    this.route.queryParams.subscribe((params) => {
      const category = params['category'];

      // If category is not provided or is empty, set it to 'all' by default
   
        this.currentCategory = category;
        this.router.navigate([], {
          relativeTo: this.route,
          queryParams: { category: 'all' },
          queryParamsHandling: 'merge',
        });
      
    });

    //fetching all products
    this.fetchProductsHandler();
    // this.fetchProductsHandler('all');

    //fetching categories
    this.fetchCategoriesHandler();
  }

  fetchProductsHandler() {
    this.loaderService.show();

    this.productsGridService.getProducts().subscribe({
      next: (response) => {
        //emptying displayed products list before fetching products on another category
        this.displayedProducts = [];

        //fetching..
        this.products = response.products.map((product) => {
          let salePrice =
            product.price - (product.price * product.discountPercentage) / 100;
          salePrice = +salePrice.toFixed(2);
          product.salePrice = salePrice;
          return product;
        });
        // this.displayedProducts = [...this.products.slice(0, 8)];
        this.currentIndex=0
        this.loadMoreBtnHandler()
        //resetting loadmoreBtn if user reaches the end of product list
        this.showLoadMoreButton = true;

      },
      error: (error) => {
        this.toast.error({
          detail: 'Error Message',
          summary: error,
          duration: 3000,
        });
        this.loaderService.hide();
      },
      complete: () => {
        this.loaderService.hide();
      },
    });
  }
  // fetchProductsHandler(category:string) {
  //   this.loaderService.show();

  //   this.productsGridService.getProducts(category).subscribe({
  //     next: (response) => {
  //       this.products = response.products.map((product) => {
  //         let salePrice =
  //           product.price - (product.price * product.discountPercentage) / 100;
  //         salePrice = +salePrice.toFixed(2);
  //         product.salePrice = salePrice;
  //         return product;
  //       });
  //     },
  //     error: (error) => {
  //       this.toast.error({
  //         detail: 'Error Message',
  //         summary: error,
  //         duration: 3000,
  //       });
  //       this.loaderService.hide();
  //     },
  //     complete: () => {
  //       this.loaderService.hide();
  //     },
  //   });
  // }

  fetchCategoriesHandler() {
    this.productsGridService.getCategories().subscribe({
      next: (response) => {
        for (let [key, value] of response) {
          this.categories.push({ id: key, category: value });
        }
      },
      error: (error) => {
        this.toast.error({ detail: '', summary: error, duration: 3000 });
        this.loaderService.hide();
      },
    });
  }

  loadMoreBtnHandler() {
    let productsPerPage = 8;
    const endIndex = productsPerPage + this.currentIndex;
    this.displayedProducts = this.products.slice(0, endIndex);
    this.currentIndex = endIndex;
    if (this.currentIndex >= this.products.length) {
      // Hide the "Load More" button when there are no more products
      this.showLoadMoreButton = false;
    }
  }
}

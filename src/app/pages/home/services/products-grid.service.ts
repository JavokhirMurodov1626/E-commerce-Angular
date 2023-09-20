import { ProductsCardList } from './products-grid.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, throwError } from 'rxjs';

interface ResponseModel {
  products: ProductsCardList[];
  total: number;
  skip: number;
  limit: number;
}

@Injectable({ providedIn: 'root' })
class ProductsGridService {
  constructor(private http: HttpClient) {}
  
  //This is example fetch products function, in real one we pass category to url and fetch products accordingly
  // getProducts(category:string) {
  //   return this.http
  //     .get<ResponseModel>(`https://dummyjson.com/products/category=${category}`)
  //     .pipe(catchError(this.errorHandler));
  // }

  getProducts() {
    return this.http
      .get<ResponseModel>('https://dummyjson.com/products')
      .pipe(catchError(this.errorHandler));
  }


  getCategories() {
    return this.http.get<ResponseModel>('https://dummyjson.com/products').pipe(
      map((response) => {
        let categories = new Map<string, string>();
        response.products.forEach((product) => {
          let categoryTitle = product.category.split('-').join(' ');
          categories.set(product.category, categoryTitle);
        });
        return categories;
      }),
      catchError(this.errorHandler)
    );
  }

  private errorHandler(errorResponse: HttpErrorResponse) {
    return throwError(() => errorResponse.error);
  }
}

export default ProductsGridService;

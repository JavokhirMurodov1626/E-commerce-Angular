import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartProductModel} from "./cart.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartProducts: CartProductModel[] = [
    {
      id: 1,
      title: 'Nike Airmax 270 react',
      price: 10,
      salePrice: 499,
      discountPercentage: 15,
      images: ['assets/images/cart/Product Image (2).webp'],
      quantity: 1
    },
    {
      id: 2,
      title: 'Nike Airmax 250 react',
      price: 5,
      salePrice: 499,
      discountPercentage: 15,
      images: ['assets/images/cart/Product Image (2).webp'],
      quantity: 1
    }
  ]

  cartProducts$ = new BehaviorSubject<CartProductModel[]>(this.cartProducts)
}

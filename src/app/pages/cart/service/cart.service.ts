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
      id: 3,
      title: 'New balance Airmax 250 react',
      price: 5,
      salePrice: 499,
      discountPercentage: 15,
      images: ['assets/images/cart/Product Image (2).webp'],
      quantity: 1
    },
    {
      id: 5,
      title: 'Airmax 250 react',
      price: 5,
      salePrice: 499,
      discountPercentage: 15,
      images: ['assets/images/cart/Product Image (2).webp'],
      quantity: 1
    },
    {
      id: 7,
      title: 'Keta Airmax 250 react',
      price: 5,
      salePrice: 499,
      discountPercentage: 15,
      images: ['assets/images/cart/Product Image (2).webp'],
      quantity: 1
    }
  ]

  removeProduct(productId: number) {
    this.cartProducts = this.cartProducts.filter(p => p.id !== productId)
    console.log(this.cartProducts)
  }

  cartProducts$ = new BehaviorSubject<CartProductModel[]>(this.cartProducts)
}

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

  vaucherCodes = [
    {
      id: 1,
      name: 'firstorder',
      discount: 0.15
    }
  ]

  checkVaucher(coupon: string) {
    return this.vaucherCodes.find(vaucher => vaucher.name === coupon.toLowerCase())
  }

  removeProduct(productId: number) {
    this.cartProducts = this.cartProducts.filter(p => p.id !== productId)
  }

  cartProducts$ = new BehaviorSubject<CartProductModel[]>(this.cartProducts)
  vaucherCodes$ = new BehaviorSubject(this.vaucherCodes)
}

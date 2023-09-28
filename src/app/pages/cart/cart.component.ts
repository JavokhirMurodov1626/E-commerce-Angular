import {Component, OnDestroy, OnInit,} from '@angular/core';
import {CartService} from "./service/cart.service";
import {CartProductModel} from "./service/cart.model";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy{
  shippingFee: number = 2 // shipping fee
  vaucherCode: any = {}
  cartProducts!: CartProductModel[];
  checkOutTotal!: number;
  subtotal!: number;
  sub$ = new Subject()

  protected readonly Math = Math;

  constructor(private cartService: CartService) {
  }

  ngOnInit() {
    this.cartService.cartProducts$
      .pipe(takeUntil(this.sub$))
      .subscribe(cartProducts => {
        this.cartProducts = cartProducts
      })
    this.calculateUnitPrice()
  }

  calculateUnitPrice(operator?: string, productIndex: number = 0) {
    if (operator === 'plus') {
      this.cartProducts[productIndex].quantity++
    } else if (operator === 'minus' && this.cartProducts[productIndex].quantity > 1) {
      this.cartProducts[productIndex].quantity--
    }
    this.calculateSubTotal()
    this.calculateTotal()
  }
  calculateSubTotal() {
    this.subtotal = 0
    this.cartProducts.forEach(cartProduct => {
      this.subtotal += (cartProduct.price * cartProduct.quantity)
    })
  }
  calculateTotal() {
    this.subtotal === 0 ? this.shippingFee = 0 : this.shippingFee
    this.checkOutTotal = (this.subtotal * (1 - (this.vaucherCode.first ?? 0)/100)) + this.shippingFee
  }

  removeProductProcess(cartProduct: CartProductModel) {
    this.cartProducts = this.cartProducts.filter((product) => product.id !== cartProduct.id)
    this.cartService.removeProduct(cartProduct.id)
    this.calculateUnitPrice()
  }

  ngOnDestroy() {
    this.sub$.next(null)
    this.sub$.complete()
  }

}

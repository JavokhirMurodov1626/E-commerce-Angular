import {Component, DoCheck, ElementRef, OnInit, ViewChild} from '@angular/core';
import {formatCurrency} from "@angular/common";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, DoCheck{
  itemQuanty: number = 1;
  itemPrice: number = 998
  shippingFee: number = 20
  vaucherCode: any = {first: 10}
  itemUnitPrice: number = this.itemPrice;
  checkOutTotal: number = this.itemUnitPrice;

  constructor() {
  }

  calculateUnitPrice(operator: string) {
    if (operator === 'plus') {
      this.itemQuanty++
    } else if (operator === 'minus' && this.itemQuanty > 1) {
      this.itemQuanty--
    }
    this.itemUnitPrice = this.itemPrice * this.itemQuanty
    this.calculateTotal()
  }
  calculateTotal() {
    this.checkOutTotal = (this.itemUnitPrice * (1 - (this.vaucherCode.first ?? 0)/100)) + this.shippingFee

  }


  ngOnInit() {
    this.calculateTotal()
  }
  ngDoCheck() {
    // console.log(this.itemQuanty)
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyPipe'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, arg = '$'): any {
    let USDollar = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });
    return USDollar.format(value);
  }

}

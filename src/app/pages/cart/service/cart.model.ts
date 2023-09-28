export interface CartProductModel {
  id:number,
  title:string,
  price:number,
  salePrice?:number,
  discountPercentage:number,
  images:string[],
  quantity: number;
}

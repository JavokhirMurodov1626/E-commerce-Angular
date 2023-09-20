
export interface ProductsCardList{
    id:number,
    title:string,
    description:string,
    price:number,
    salePrice?:number,
    discountPercentage:number,
    rating:number,
    stock:number,
    brand:string,
    category:string,
    thumbnail:string,
    images:string[],
}
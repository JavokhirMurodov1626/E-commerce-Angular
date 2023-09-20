import { Component } from '@angular/core';
export interface IFeaturedProduct {
  image: string;
  rating: number;
  title: string;
  price: number;
  salePrice: number;
}
@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'],
})
export class FeaturedProductsComponent {
  DUMMY_FEATURED_PRODUCT: IFeaturedProduct[] = [
    {
      image:
        'https://media2.bulavka.uz/I44Y39wdujLMoKGZ16jrfPlYOL4=/fit-in/485x570/products/jUi8tw4wrL/input.jpeg',
      title: 'Shoes Miqi&Lading 666',
      rating: 3,
      price: 300,
      salePrice: 200,
    },
    {
      image:
        'https://joybox.uz/wp-content/uploads/2023/07/563c553d370479d1055b61c172c14b85_071723151327.jpeg',
      title: 'Nokia 12&80',
      rating: 3,
      price: 600,
      salePrice: 400,
    },
    {
      image:
        'https://www.bmw.uz/content/dam/bmw/common/all-models/m-series/series-overview/bmw-m-series-seo-overview-ms-04.jpg',
      title: 'BMW S200',
      rating: 5,
      price: 20000,
      salePrice: 2000,
    },
  ];
}

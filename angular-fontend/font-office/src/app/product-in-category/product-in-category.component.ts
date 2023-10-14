import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product-in-category',
  templateUrl: './product-in-category.component.html',
  styleUrls: ['./product-in-category.component.css'],
})
export class ProductInCategoryComponent {
  home: HomeComponent = inject(HomeComponent);
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;

  private productUrl = 'http://localhost:8000/products/category/';
  products!: Product[];

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.setProduct();
  }

  async setProduct() {
    var requestOptions = {
      method: 'GET',
    };

    await fetch(this.productUrl + this.housingLocationId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        this.products = JSON.parse(result);
        console.log(this.products);
      })
      .catch((error) => console.log('error', error));
  }

  getProducts() {
    return this.products;
  }

  getImageToShow(name: string): string {
    const path = `../../assets/img/Product/${name}.jpg`;
    return path;
  }

  putToCart(item: Product) {
    this.home.pushCart(item);
  }
}

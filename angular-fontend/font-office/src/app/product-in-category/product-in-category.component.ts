import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../model/product';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product-in-category',
  templateUrl: './product-in-category.component.html',
  styleUrls: ['./product-in-category.component.css'],
})
export class ProductInCategoryComponent implements OnInit {
  home: HomeComponent = inject(HomeComponent);
  route: ActivatedRoute = inject(ActivatedRoute);
  housingLocationId = -1;

  private productUrl = 'http://localhost:8000/products/category/';
  product!: Product[];

  constructor() {}
  ngOnInit(): void {
    this.housingLocationId = Number(this.route.snapshot.params['id']);
    this.setProduct();
  }

  setProduct() {
    var requestOptions = {
      method: 'GET',
    };

    fetch(this.productUrl + this.housingLocationId, requestOptions)
      .then((response) => response.text())
      .then((result) => {
        this.product = JSON.parse(result);
        console.log(this.product);
      })
      .catch((error) => console.log('error', error));
  }
}

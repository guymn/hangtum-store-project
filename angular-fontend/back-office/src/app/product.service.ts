import { Injectable } from '@angular/core';
import { Product } from './model/product';
import { Category } from './model/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = 'http://localhost:8000/products';

  constructor() {}

  async getProducts() {
    const res = await fetch(this.url);
    return res.json();
  }

  async getProduct(id: number) {
    const url = `${this.url}/${id}`;
    const res = await fetch(url);
    return res.json();
  }

  async postProduct(
    name: string,
    description: string,
    price: number,
    image: string,
    category: Category
  ) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: name,
      description: description,
      price: price,
      image: image,
      category: category,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    fetch(this.url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  async deleteProduct(id: number) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
    };

    await fetch(`${this.url}/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
}

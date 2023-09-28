import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private url = 'http://localhost:8000/items';

  constructor(private httpClient: HttpClient) {}

  async getItems() {
    const res = await fetch(this.url);
    return res.json();
  }

  async postItem(
    name: string,
    description: string,
    price: number,
    image: string,
    categoryid: string
  ) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: name,
      description: description,
      price: price,
      image: image,
      categoryid: categoryid,
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    await fetch(this.url, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }

  async deleteItem(id: number) {
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

  async putItem(
    id: number,
    name: string,
    description: string,
    price: number,
    image: string,
    categoryid: string
  ) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: name,
      description: description,
      price: price,
      image: image,
      categoryid: categoryid,
    });

    var requestOptions = {
      method: 'PUT',
      headers: myHeaders,
      body: raw,
    };

    await fetch(`${this.url}/${id}`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error));
  }
}

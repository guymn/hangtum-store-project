import { Injectable } from '@angular/core';
import { Category } from './model/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'http://localhost:8000/categories';


  async getCategories(): Promise<Category[]> {
    const res = await fetch(this.url);
    return res.json();
  }

  async getCategoryById(id: string) {
    const res = await fetch(`${this.url}/${id}`);
    return res.json();
  }

  async postCategory(name: string) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: name,
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

  async deleteCategory(id: number) {
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

  async putCategory(id: number, name: string) {
    var myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    var raw = JSON.stringify({
      name: name,
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

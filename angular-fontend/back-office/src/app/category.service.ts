import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private url = "http://localhost:8000/categories"

  constructor() { }

  async getCategories() {
    const res = await fetch(this.url)
    return res.json();
  }
}

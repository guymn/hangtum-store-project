import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'https://cpsu-test-api.herokuapp.com/api/camt2023/theaters';

  constructor() {}

  async getAllCategory() {
    const response = await fetch('http://example.com/movies.json');
    const category = await response.json();
    console.log(category);
  }
}

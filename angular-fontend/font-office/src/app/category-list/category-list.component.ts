import { Component, inject } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categoryService: CategoryService = inject(CategoryService);
  private categories: Category[] = [];
  private data: Category[] = [];

  constructor() {
    this.setCategory();
  }

  getCategoryToShow() {
    return this.data;
  }

  getImageToShow(name: string): string {
    const path = `../../assets/img/Category/${name}.jpg`;
    console.log(path);
    return path;
  }

  setData() {
    let category = this.categories.pop();
    if (!category) {
      category = new Category();
    }
    this.data.push(category);
  }

  getCategorySize() {
    return this.categories.length;
  }

  async setCategory() {
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories;
      for (let i = 0; i < 5; i++) {
        this.setData();
      }
    });
  }

  checkClick(): boolean {
    return this.data.length <= 5;
  }

  next() {
    console.log(this.categories);
    console.log(this.data);
  }

  previous() {
    console.log(this.categories);
    console.log(this.data);
  }
}

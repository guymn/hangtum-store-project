import { Component, inject } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  categoryService: CategoryService = inject(CategoryService);
  private categories: Category[] = [];
  private data: Category[] = [];

  home: HomeComponent = inject(HomeComponent);

  constructor() {
    this.setCategory();
  }

  getCategoryToShow() {
    return this.data;
  }

  getImageToShow(name: string): string {
    const path = `../../assets/img/Category/${name}.jpg`;
    return path;
  }

  pushData(category: Category | undefined) {
    if (!category) {
      category = new Category();
    }
    this.data.push(category);
  }

  unshiftData(category: Category | undefined) {
    if (!category) {
      category = new Category();
    }
    this.data.unshift(category);
  }

  pushCategory(category: Category | undefined) {
    if (!category) {
      category = new Category();
    }
    this.categories.push(category);
  }

  unshiftCategory(category: Category | undefined) {
    if (!category) {
      category = new Category();
    }
    this.categories.unshift(category);
  }

  getCategorySize() {
    return this.categories.length;
  }

  async setCategory() {
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories;
      for (let i = 0; i < 5; i++) {
        this.pushData(this.categories.pop());
      }
    });
  }

  checkClick(): boolean {
    return this.data.length < 5;
  }

  next() {
    this.pushCategory(this.data.shift());
    this.pushData(this.categories.shift());
  }

  previous() {
    this.unshiftData(this.categories.pop());
    this.unshiftCategory(this.data.pop());
  }

  goProduct(item: Category) {
    this.home.pushBar([item.name, `/${item.id}`]);
    this.home.navigatePage(String(item.id));
  }
}

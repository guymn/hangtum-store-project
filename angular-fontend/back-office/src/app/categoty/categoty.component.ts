import { Component, inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category.model';

@Component({
  selector: 'app-categoty',
  templateUrl: './categoty.component.html',
  styleUrls: ['./categoty.component.css'],
})
export class CategotyComponent {
  categoriesService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  constructor() {
    this.categoriesService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }

  getCategoryList(): Category[] {
    return this.categories;
  }
  zzzzzz() {
    console.log(this.categories);
  }
}

import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-categoty',
  templateUrl: './categoty.component.html',
  styleUrls: ['./categoty.component.css'],
})
export class CategotyComponent {
  categoriesService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  inputName: string = '';
  id: number = 0;

  constructor() {
    this.categoriesService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }

  getCategoryList(): Category[] {
    return this.categories;
  }

  editDetails(category: Category) {
    this.inputName = category.name;
    this.id = category.id;
    this.openDetail();
    console.log(category.id, category.name);
  }

  // createCategory() {
  //   this.categoriesService.
  // }

  updateCategory(name: string) {
    this.categoriesService.putCategory(this.id, name);
    this.closeDetail();
  }
  deleteCategory() {
    this.categoriesService.deleteCategory(this.id);
    this.closeDetail();
  }

  detail: boolean | undefined;

  closeDetail() {
    this.detail = false;
  }
  openDetail() {
    this.detail = true;
  }
}

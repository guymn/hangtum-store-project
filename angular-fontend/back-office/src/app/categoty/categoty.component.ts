import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-categoty',
  templateUrl: './categoty.component.html',
  styleUrls: ['./categoty.component.css'],
})
export class CategotyComponent {
  reloadService: ReloadService = inject(ReloadService);

  categoriesService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  inputName: string = '';
  id: number = 0;

  detail: boolean = false;
  addData: boolean = false;

  constructor() {
    this.setCatrgory();
  }

  setCatrgory() {
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

  addCategory() {
    this.openAddData();
  }

  async updateCategory(name: string) {
    await this.categoriesService.putCategory(this.id, name);
    this.closeDetail();
  }

  async deleteCategory() {
    await this.categoriesService.deleteCategory(this.id);
    this.closeDetail();
  }

  closeDetail() {
    this.setCatrgory();
    this.detail = false;
  }

  openDetail() {
    this.detail = true;
  }

  closeAddData() {
    this.setCatrgory();
    this.addData = false;
  }

  openAddData() {
    this.addData = true;
  }
}

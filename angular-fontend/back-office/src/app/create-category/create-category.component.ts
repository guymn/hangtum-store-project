import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css'],
})
export class CreateCategoryComponent {
  @Input() model: boolean = false;

  @Output() addData = new EventEmitter<boolean>();

  categoriesService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  constructor() {
    this.categoriesService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }

  closeModel() {
    this.model = false;
    this.addData.emit(false);
  }

  createCategory(name: string) {
    this.categoriesService.postCategory(name);
    this.closeModel();
  }
}

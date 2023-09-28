import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  @Input() model: boolean | undefined;

  @Output() addData = new EventEmitter<boolean>();

  categoriesService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  constructor() {
    this.categoriesService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }
}

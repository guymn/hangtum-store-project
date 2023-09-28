import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ItemService } from '../item.service';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css'],
})
export class CreateItemComponent {
  @Input() model: boolean = false;

  @Output() addItem = new EventEmitter<boolean>();

  itemService: ItemService = inject(ItemService);

  categoryService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  errorText: string = '';

  constructor() {
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }

  getCategoryList(): Category[] {
    return this.categories;
  }

  closeModel() {
    this.model = false;
    this.addItem.emit(false);
  }

  createItem(
    name: string,
    description: string,
    price: string,
    image: string,
    categoryid: string
  ) {
    if (name == '' || name == null) {
      this.errorText = 'Product must have name!!!\n';
      return;
    }
    this.itemService.postItem(
      name,
      description,
      parseFloat(price),
      image,
      categoryid
    );
    this.closeModel();
  }
}

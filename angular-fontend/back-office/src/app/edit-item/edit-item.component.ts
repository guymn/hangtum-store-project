import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ItemService } from '../item.service';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css'],
})
export class EditItemComponent {
  @Input() model: boolean = false;

  @Input() item: Item | undefined;


  @Output() editItem = new EventEmitter<boolean>();

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
    this.editItem.emit(false);
  }
}

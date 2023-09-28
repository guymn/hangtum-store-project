import { Component, inject } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/item';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  itemService: ItemService = inject(ItemService);
  categoryService: CategoryService = inject(CategoryService);
  private items!: Item[];

  addItem: boolean = false;

  constructor() {
    this.itemService.getItems().then((items) => {
      this.items = items;
    });
  }

  getCategoryColum(id: number) {
    return this.categoryService.getCategoryById(id);
  }

  getItems() {
    return this.items;
  }

  closeAddItem() {
    this.addItem = false;
  }

  openAddItem() {
    this.addItem = true;
  }
}

import { Component, inject } from '@angular/core';
import { ItemService } from '../item.service';
import { Item } from '../model/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent {
  itemService: ItemService = inject(ItemService);
  private items!: Item[];

  addData: boolean = false;

  constructor() {
    this.itemService.getItems().then((items) => {
      this.items = items;
    });
  }

  getItems() {
    return this.items;
  }
}

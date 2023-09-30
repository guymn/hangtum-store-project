import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  category: string[] = [];
  private carousel: number = 1;

  constructor() {
    this.setCategory();
  }

  setCategory() {
    for (let i = 0; i < 30; i++) {
      this.category.push('ยาฆ่าหญ้า');
    }
  }

  getCarousel(con: any): boolean {
    return this.carousel == con;
  }
  next() {
    this.carousel++;
  }

  previous() {
    this.carousel--;
  }
}

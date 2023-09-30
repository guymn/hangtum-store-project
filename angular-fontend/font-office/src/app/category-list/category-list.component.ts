import { Component } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css'],
})
export class CategoryListComponent {
  private category: string[] = [];
  private data: string[] = [];
  private carouselFirst: number = 0;
  private carouselLast: number = 5;

  constructor() {
    this.setCategory();
    this.setData();
  }

  getCategoryToShow() {
    return this.data;
  }

  setData() {
    this.data = [];
    let temp = this.carouselFirst;
    for (let i = 0; i < 5; i++) {
      this.data.push(this.category[temp]);
      temp = (temp + 1) % this.getCategorySize();
    }
  }

  getCategorySize() {
    return this.category.length;
  }

  setCategory() {
    for (let i = 0; i < 30; i++) {
      this.category.push('ยาฆ่าหญ้า' + i);
    }
  }

  next() {
    this.carouselFirst = (this.carouselFirst + 1) % this.getCategorySize();
    this.carouselLast = (this.carouselLast + 1) % this.getCategorySize();
    this.setData();
  }

  previous() {
    if (this.carouselFirst == 0) {
      this.carouselFirst = this.getCategorySize();
    }
    if (this.carouselLast == 0) {
      this.carouselLast = this.getCategorySize();
    }
    this.carouselFirst--;
    this.carouselLast--;
    this.setData();
  }
}

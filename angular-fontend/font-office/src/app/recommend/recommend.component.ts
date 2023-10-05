import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent {
  private carousel: number = 1;
  private pathImage: string[] = [];

  constructor() {
    for (let i = 1; i < 4; i++) {
      this.pathImage.push(`../../assets/img/recommend/${i}.jpg`);
    }
  }

  getPathImage(num: number): string {
    return this.pathImage[num - 1];
  }

  getCarousel(): number {
    return this.carousel;
  }

  checkCarousel(con: number): boolean {
    return this.carousel == con;
  }

  next() {
    if (this.carousel == this.pathImage.length) {
      this.carousel = 0;
    }
    this.carousel++;
  }

  previous() {
    if (this.carousel == 1) {
      this.carousel = this.pathImage.length+1;
    }
    this.carousel--;
  }
}

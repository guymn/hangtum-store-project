import { Component } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent {
  private carousel: number = 1;

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

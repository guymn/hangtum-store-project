import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
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

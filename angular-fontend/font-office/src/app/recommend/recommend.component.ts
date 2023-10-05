import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css'],
})
export class RecommendComponent implements OnInit{
  private carousel: number = 1;
  private pathImage: string[] = [];
  private intervalId: any; // This will store the interval ID
  private intervalDuration: number = 2500; // Set the interval duration in milliseconds

  constructor() {
    for (let i = 1; i < 4; i++) {
      this.pathImage.push(`../../assets/img/recommend/${i}.jpg`);
    }
  }

  ngOnInit() {
    this.startInterval();
  }

  ngOnDestroy() {
    // Don't forget to clear the interval when the component is destroyed
    this.clearInterval();
  }

  startInterval() {
    // Clear any existing interval and start a new one
    this.clearInterval();
    this.intervalId = setInterval(() => {
      this.next();
    }, this.intervalDuration);
  }

  clearInterval() {
    // Clear the interval if it exists
    if (this.intervalId) {
      clearInterval(this.intervalId);
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
    // Reset the interval timer to 2 seconds when manually triggered
    this.startInterval();
  }

  previous() {
    if (this.carousel == 1) {
      this.carousel = this.pathImage.length + 1;
    }
    this.carousel--;
    this.startInterval();
  }
}

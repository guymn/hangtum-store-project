import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnDestroy {
  @Input() title: string | undefined; // decorate the property with @Input()

  private page: number = 1;

  ngOnDestroy() {
    localStorage.setItem('page', this.page.toString());
  }

  getPageString(): string {
    return this.page.toString();
  }

  goCategory() {
    this.page = 1;
  }

  goItem() {
    this.page = 2;
  }

  pageCategory() {
    if (this.page != 1) {
      return false;
    }
    return true;
  }

  pageItem() {
    if (this.page != 2) {
      return false;
    }
    return true;
  }
}

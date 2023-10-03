import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() title: string | undefined; // decorate the property with @Input()

  expectedRouteCategory = 'category';
  expectedRouteProduct = 'product';

  isCurrentRouteCategory = false;
  isCurrentRouteProduct = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.click();
  }

  isCatrgoryLink(): boolean {
    return this.router.url === '/category' || this.router.url === '/';
  }

  isProductLink(): boolean {
    return this.router.url === '/product';
  }

  click() {
    const currentUrl = this.router.url;
  }
}

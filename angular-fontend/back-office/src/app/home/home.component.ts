import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() title: string | undefined; // decorate the property with @Input()

  expectedRouteItem = 'item';
  expectedRouteCategory = 'category';
  isCurrentRouteItem = false;
  isCurrentRouteCategory = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.click();
  }

  isItemLink(): boolean {
    return this.router.url === '/item';
  }

  isCatrgoryLink(): boolean {
    return this.router.url === '/category';
  }

  click() {
    const currentUrl = this.router.url;
    console.log(currentUrl);
  }
}

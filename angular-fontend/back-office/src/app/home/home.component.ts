import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../model/category';
import { CategoryService } from '../category.service';

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

  categoryService: CategoryService = inject(CategoryService);
  categories: Category[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.categoryService.getCategories().then((result) => {
      this.categories = result;
      console.log(this.categories);
    });
  }

  isCatrgoryLink(): boolean {
    return this.router.url === '/category' || this.router.url === '/';
  }

  isProductLink(): boolean {
    return this.router.url === '/product';
  }
}

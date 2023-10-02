import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  @Input() model: boolean = false;

  @Input()
  product: Product = new Product();

  @Output() editProduct = new EventEmitter<boolean>();

  productService: ProductService = inject(ProductService);

  categoryService: CategoryService = inject(CategoryService);
  private categories: Category[] = [];

  errorText: string = '';

  constructor() {
    this.categoryService.getCategories().then((categories) => {
      this.categories = categories;
    });
  }

  getCategories(): Category[] {
    return this.categories;
  }

  closeModel() {
    this.model = false;
    this.editProduct.emit(false);
  }

  deleteProduct(id: number) {
    this.productService.deleteProduct(id);
    this.closeModel();
  }
}

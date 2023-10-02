import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';
import { ReloadService } from '../reload.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent {
  @Input() model: boolean = false;

  @Output() addProduct = new EventEmitter<boolean>();

  productService: ProductService = inject(ProductService);

  categoryService: CategoryService = inject(CategoryService);
  private categories!: Category[];

  reloadService: ReloadService = inject(ReloadService);

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
    this.addProduct.emit(false);
  }

  createProduct(
    name: string,
    description: string,
    price: string,
    image: string,
    categoryID: string
  ) {
    const img = this.reloadService.setImagePath(image);

    if (!this.reloadService.checkUp(name, price, image, categoryID)) {
      this.errorText = 'Somting Worng!!!\nPlase enter all data';
      return;
    }

    this.productService.postProduct(
      name,
      description,
      parseFloat(price),
      img,
      categoryID
    );
    this.closeModel();
  }
}

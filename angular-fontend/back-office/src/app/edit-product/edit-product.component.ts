import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Category } from '../model/category';
import { ReloadService } from '../reload.service';

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

  reloadService: ReloadService = inject(ReloadService);

  categoryService: CategoryService = inject(CategoryService);
  categories: Category[] = [];

  errorText: string = '';

  constructor() {
    this.setCategoriesEdit();
  }

  getCategories(): Category[] {
    return this.categories;
  }

  async setCategoriesEdit() {
    const categories = await this.categoryService.getCategories();
    this.categories = categories;
  }

  closeModel() {
    this.model = false;
    this.editProduct.emit(false);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id);
    this.closeModel();
  }

  updateProduct(
    name: string,
    description: string,
    price: string,
    image: string,
    categoryID: string
  ) {
    console.log(image);
    const img = this.reloadService.setImagePath(image);

    if (!this.reloadService.checkUp(name, price, image, categoryID)) {
      this.errorText = 'Somting Worng!!!\nPlase enter all data';
      return;
    }
    this.productService.putProduct(
      this.product.id,
      name,
      description,
      parseFloat(price),
      img,
      categoryID
    );
    this.closeModel();
  }
}

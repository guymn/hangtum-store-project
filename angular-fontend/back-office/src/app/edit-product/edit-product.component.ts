import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Product } from '../model/product';
import { ProductService } from '../product.service';
import { ReloadService } from '../reload.service';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent {
  @Input() model: boolean = false;

  @Input()
  product: Product = new Product();

  @Input()
  categoryOfProduct!: string;

  @Output() editProduct = new EventEmitter<boolean>();

  productService: ProductService = inject(ProductService);
  home: HomeComponent = inject(HomeComponent);
  reloadService: ReloadService = inject(ReloadService);
  errorText: string = '';

  constructor() {
    const categoryData = this.getCategoryById(this.product.categoryID);
    if (categoryData) {
      this.home.categories.unshift(categoryData);
    }
  }

  getCategory() {
    return this.home.categories;
  }

  getCategoryById(id: string) {
    const foundCategory = this.home.categories.find(
      (category) => category.id === Number(id)
    );

    if (foundCategory) {
      return foundCategory;
    } else {
      return null;
    }
  }

  closeModel() {
    this.model = false;
    this.editProduct.emit(false);
  }

  deleteProduct() {
    this.productService.deleteProduct(this.product.id);
    this.closeModel();
  }

  async updateProduct(
    name: string,
    description: string,
    price: string,
    categoryID: string,
    image: string
  ) {
    if (image) {
      const pathParts = image.split(/[\\\/]/);
      image = pathParts[pathParts.length - 1];
    } else {
      image = this.product.image;
    }

    console.log(image);

    if (!this.reloadService.checkUp(name, price, categoryID)) {
      this.errorText = 'Somting Worng!!!\nPlase enter all data';
      return;
    }
    await this.productService.putProduct(
      this.product.id,
      name,
      description,
      parseFloat(price),
      categoryID,
      image
    );
    this.closeModel();
  }
}

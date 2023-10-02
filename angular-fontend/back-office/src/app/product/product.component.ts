import { Component, inject } from '@angular/core';
import { ReloadService } from '../reload.service';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  reloadService: ReloadService = inject(ReloadService);
  productService: ProductService = inject(ProductService);
  categoryService: CategoryService = inject(CategoryService);
  private products!: Product[];

  addProduct: boolean = false;
  editProduct: boolean = false;

  productToEdit: Product = new Product();

  constructor() {
    this.productService.getProducts().then((products) => {
      this.products = products;
    });
  }

  getProducts() {
    return this.products;
  }

  // setItemToEdit(item: Item) {
  //   this.productToEdit = item;
  // }

  closeAddProduct() {
    this.reloadService.reloadPage();
    this.addProduct = false;
  }

  openAddProduct() {
    this.addProduct = true;
  }

  // closeEditItem() {
  //   this.reloadService.reloadPage();
  //   this.editItem = false;
  // }

  // openEditItem(item: Item) {
  //   this.setItemToEdit(item);
  //   this.editItem = true;
  // }
}

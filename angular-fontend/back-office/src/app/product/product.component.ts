import { Component, inject } from '@angular/core';
import { ReloadService } from '../reload.service';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../model/product';
import { Category } from '../model/category';

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
  private categoryInColum: string[] = [];

  addProduct: boolean = false;
  editProduct: boolean = false;

  productToEdit: Product = new Product();

  constructor() {
    this.setProducts();
  }

  getProducts() {
    return this.products;
  }

  async setProducts() {
    this.products = await this.productService.getProducts();
    this.setCategoryInColum();
  }

  getCategoryInColum() {
    return this.categoryInColum;
  }

  async setCategoryInColum() {
    const temp = this.products.map((item) =>
      this.getCategoryByID(item.categoryID)
    );
    this.categoryInColum = await Promise.all(temp);
  }

  setProductToEdit(product: Product) {
    this.productToEdit = product;
  }

  closeAddProduct() {
    this.reloadService.reloadPage();
    this.addProduct = false;
  }

  openAddProduct() {
    this.addProduct = true;
  }

  closeEditProduct() {
    this.reloadService.reloadPage();
    this.editProduct = false;
  }

  openEditProduct(product: Product) {
    this.setProductToEdit(product);
    this.editProduct = true;
  }

  async getCategoryByID(categoryID: string) {
    const tempCategory = await this.categoryService.getCategoryById(categoryID);
    return tempCategory.name;
  }
}

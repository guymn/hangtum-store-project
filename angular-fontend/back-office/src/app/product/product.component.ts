import { Component, inject } from '@angular/core';
import { ReloadService } from '../reload.service';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { Product } from '../model/product';
import { Category } from '../model/category';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent {
  reloadService: ReloadService = inject(ReloadService);
  productService: ProductService = inject(ProductService);
  home: HomeComponent = inject(HomeComponent);

  products!: Product[];
  private categoryInColum: string[] = [];

  addProduct: boolean = false;
  editProduct: boolean = false;

  productToEdit: Product = new Product();

  constructor() {
    this.setProducts();
  }

  getCategoryByid(id: string): string {
    const foundCategory = this.home.categories.find(
      (category) => category.id === Number(id)
    );

    if (foundCategory) {
      // Category with the specified ID was found
      return foundCategory.name;
    } else {
      // Category with the specified ID was not found
      return 'none';
    }
  }

  setProducts() {
    this.productService.getProducts().then((res) => {
      this.products = res;
      console.log(this.products);
    });
  }

  getCategoryInColum() {
    return this.categoryInColum;
  }

  setProductToEdit(product: Product) {
    this.productToEdit = product;
  }

  closeAddProduct() {
    this.setProducts();
    this.addProduct = false;
  }

  openAddProduct() {
    this.addProduct = true;
  }

  closeEditProduct() {
    this.setProducts();
    this.editProduct = false;
  }

  openEditProduct(product: Product) {
    this.setProductToEdit(product);
    this.editProduct = true;
  }
}

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

  async createProduct(
    name: string,
    description: string,
    price: string,
    image: string,
    categoryID: string
  ) {
    // Split the path by the backslash (\) or forward slash (/) depending on the browser
    const pathParts = image.split(/[\\\/]/);

    // The last part of the path will be the filename
    const fileName = pathParts[pathParts.length - 1];

    console.log(fileName); // Outputs: ไกลโฟเซท.jpg

    if (!this.reloadService.checkUp(name, price, categoryID)) {
      this.errorText = 'Somting Worng!!!\nPlase enter all data';
      return;
    }

    await this.productService.postProduct(
      name,
      description,
      parseFloat(price),
      fileName,
      categoryID
    );
    this.closeModel();
  }
}

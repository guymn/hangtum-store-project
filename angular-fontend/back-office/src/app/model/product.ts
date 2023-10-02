import { Category } from "./category";

export class Product {
  id!: number;
  name!: string;
  description!: string;
  price!: number;
  image!: string;
  category!: Category;
}

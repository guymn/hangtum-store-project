import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductInCategoryComponent } from './product-in-category/product-in-category.component';

const routes: Routes = [
  { path: '', component: CategoryListComponent },
  { path: 'product', component: ProductInCategoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

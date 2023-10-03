import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategotyComponent } from './categoty/categoty.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  { path: '', component: CategotyComponent },
  { path: 'category', component: CategotyComponent },
  { path: 'product', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

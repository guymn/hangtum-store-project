import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { RecommendComponent } from './recommend/recommend.component';
import { CommonModule } from '@angular/common';
import { ProductInCategoryComponent } from './product-in-category/product-in-category.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    CategoryListComponent,
    RecommendComponent,
    ProductInCategoryComponent,
    CartComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

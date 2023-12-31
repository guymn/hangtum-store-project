import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../model/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private bar: string[][] = [];
  private cart: Product[] = [];
  isCart = true;

  constructor(private router: Router) {
    const barData = localStorage.getItem('bar');
    if (barData) {
      this.bar = JSON.parse(barData);
    } else {
      this.pushBar(['หน้าหลัก', '/']);
    }

    const cartData = localStorage.getItem('cart');
    if (cartData) {
      this.cart = JSON.parse(cartData);
    }
  }

  getBar() {
    return this.bar;
  }

  getCart() {
    return this.cart;
  }

  pushBar(itemBar: string[]) {
    this.bar.push(itemBar);
    localStorage.setItem('bar', JSON.stringify(this.getBar()));
  }

  popBar() {
    this.bar.pop();
    localStorage.setItem('bar', JSON.stringify(this.getBar()));
  }

  navigatePage(page: string) {
    this.router.navigate([page]);
  }

  clickBar(item: string[]) {
    // Find the index of the clicked item in the this.bar array
    const index = this.bar.findIndex((barItem) => barItem === item);

    if (index !== -1) {
      // Use splice to remove all items after the clicked item
      this.bar.splice(index + 1);

      // Save the updated this.bar array in local storage
      localStorage.setItem('bar', JSON.stringify(this.getBar()));

      // Navigate to the selected page
      this.navigatePage(item[1]);
    }
  }

  openCart() {
    this.isCart = false;
    console.log(this.cart);
  }

  closeCart() {
    this.isCart = true;
  }

  toBuy() {
    this.cart = [];
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.closeCart();
    alert('Susscess to buy');
  }

  pushCart(product: Product) {
    this.cart.push(product);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteItemFormCart(item: Product) {
    // Find the index of the item to be removed in the cart array
    const index = this.cart.findIndex((cartItem) => cartItem === item);

    if (index !== -1) {
      // Use splice to remove the item from the cart array
      this.cart.splice(index, 1);

      // Save the updated cart array in local storage
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }
}

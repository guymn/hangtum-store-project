import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  @Input() title: string | undefined; // decorate the property with @Input()

  category: boolean = true;
  item: boolean = false;

  goCategory() {
    this.category = true;
    this.item = false;
  }

  goItem() {
    this.category = false;
    this.item = true;
  }
}

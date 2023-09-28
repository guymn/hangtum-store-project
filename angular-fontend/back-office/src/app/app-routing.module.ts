import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategotyComponent } from './categoty/categoty.component';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  { path: '', component: CategotyComponent },
  { path: 'category', component: CategotyComponent },
  { path: 'item', component: ItemComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

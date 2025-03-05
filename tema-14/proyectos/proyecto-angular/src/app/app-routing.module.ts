import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAddComponent } from './components/product-add/product-add.component';

const routes: Routes = [
  { path: '', redirectTo: '/products', pathMatch: 'full' }, // Ruta predeterminada
  { path: 'products', component: ProductListComponent },
  { path: 'add-product', component: ProductAddComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
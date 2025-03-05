import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product: Product = { name: '', price: 0, url: '' };

  constructor(private productService: ProductService) {}

  addProduct() {
    this.productService.addProduct(this.product).then(() => {
      alert('Producto agregado');
      this.product = { name: '', price: 0, url: '' };
    });
  }
}
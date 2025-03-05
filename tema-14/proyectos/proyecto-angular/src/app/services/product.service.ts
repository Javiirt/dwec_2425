import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private collectionName = 'products';

  constructor(private firestore: AngularFirestore) {}

  getProducts(): Observable<Product[]> {
    return this.firestore.collection<Product>(this.collectionName).valueChanges({ idField: 'id' });
  }

  addProduct(product: Product): Promise<any> {
    return this.firestore.collection(this.collectionName).add(product);
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<Product> | undefined;
  product: AngularFireObject<Product> | undefined;

  constructor(private db: AngularFireDatabase) { }

  getAllProducts(): AngularFireList<Product>{
    this.products = this.db.list('/productos');
    return this.products;
  }

  getOneProduct(key: string): AngularFireObject<Product> {
    this.product = this.db.object('productos/'+ key);
    return this.product
  }

  payProducts(key: string, value: Product): Promise<void> {
    return this.db.list('/productos').update(key, value);
  }
}

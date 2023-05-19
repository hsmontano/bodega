import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: AngularFireList<Product> | undefined;

  constructor(private db: AngularFireDatabase) { }

  getAllProducts(): AngularFireList<Product>{
    return this.products = this.db.list('/productos');
  }

  getOneProduct(key: string): any {
    return this.db.object('productos/'+ key).valueChanges();
  }
}

import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  private cartProducts: Product[] = [];
  private _products: BehaviorSubject<Product[]>;
  private _total: number = 0;

  constructor() { 
    this._products = new BehaviorSubject<Product[]>([]);
  }

  get products() {
    return this._products.asObservable();
  }

  get total() {
    return this._total;
  }

  addNewProduct(product: Product){
    var precio = product.precio;
    var unidades = product.unidadesCart;
    if (precio !== undefined && unidades !== undefined) {
      product.subtotal = precio * unidades;
    }
    this.cartProducts.push(product);
    this._products.next(this.cartProducts);
  }

  removeAllProduct(): void {
    this._products.next([]);
  }
  
}

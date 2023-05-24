import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() product: Product;

  public productCart: Product;

  public addForm: FormGroup;

  constructor(private router: Router,
              private cartService: CartService) {
    this.product = {} as Product;
    this.productCart = {} as Product;
    this.addForm = new FormGroup({
      unidades: new FormControl('1', [Validators.required])
    })
  }

  detail(key: string | null): void {
    this.router.navigate(['dashboard/product/', key]);
  }

  onClick(product: Product) {
    const unidadesCart = Number(this.addForm.get('unidades')?.value);
    product.unidades = product.unidades! - unidadesCart;
    this.productCart.key = product.key;
    this.productCart.nombre = product.nombre;
    this.productCart.precio = product.precio;
    this.productCart.imagen = product.imagen;
    this.productCart.unidades = unidadesCart;
    this.cartService.addNewProduct(this.productCart);
  }

}

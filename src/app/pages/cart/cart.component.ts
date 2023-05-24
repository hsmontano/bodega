import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public products: Product[] = [];
  public total: number = 0;

  constructor(private cartService: CartService,
              private productService: ProductService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.cartService.products.subscribe(
      data => {
        this.products = data;
        this.products.forEach((s) => {
          if (s.subtotal !== undefined) {
            this.total += s.subtotal;
          }
        })
      }
    );
  }

  onPay(): void {
    this.products.forEach((p)=> {
      if (p.key != null) {
        this.productService.payProducts(p.key, p);
      }
    });
    this.cartService.removeAllProduct();
    this.router.navigate(['dashboard/catalog']);
  }

  onCancel(): void {
    this.router.navigate(['dashboard/catalog']);
  }

}

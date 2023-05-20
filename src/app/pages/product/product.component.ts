import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  private key: string;
  public product: Product;

  constructor(private productService: ProductService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    this.key = '';
    this.product = {} as Product;
  }

  ngOnInit(): void {
    const productKey = this.activatedRoute.snapshot.paramMap.get('key');
    if (productKey) {
      this.key = productKey;
    }
    this.getProduct();
  }

  getProduct(): void {
    this.productService.getOneProduct(this.key).valueChanges().subscribe((data) => {
      if (data) {
        this.product = data;
      }
    }, (error) => {
      console.error(error);
    })
  }

  back(): void {
    this.router.navigate(['dashboard']);
  }

}

import { Component } from '@angular/core';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  products: Product[];
  filterproduct = ""
  
  constructor(private productService: ProductService) {
    this.products = [];
  }
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().snapshotChanges().pipe(
      map(
        changes => changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }))
      )
    ).subscribe(data => {
      this.products = data as Product[];
    })

  }
}

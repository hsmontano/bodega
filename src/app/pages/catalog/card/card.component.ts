import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input() product: Product;

  constructor(private router: Router) {
    this.product = {} as Product;
  }

  detail(key: string | null): void {
    this.router.navigate(['dashboard/product/', key], { skipLocationChange: true });
  }

}

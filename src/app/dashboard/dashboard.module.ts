import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardComponent } from '../pages/catalog/card/card.component';
import { CartComponent } from '../pages/cart/cart.component';
import { CatalogComponent } from '../pages/catalog/catalog.component';
import { ProductComponent } from '../pages/product/product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
    CartComponent,
    CardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

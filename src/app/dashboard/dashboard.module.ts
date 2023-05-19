import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { CardComponent } from '../pages/catalog/card/card.component';
import { CarComponent } from '../pages/car/car.component';
import { CatalogComponent } from '../pages/catalog/catalog.component';
import { ProductComponent } from '../pages/product/product.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../pipes/filter.pipe';


@NgModule({
  declarations: [
    CatalogComponent,
    ProductComponent,
    CarComponent,
    CardComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }

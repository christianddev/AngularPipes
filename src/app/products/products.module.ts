import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicPageComponent } from './pages/basic-page/basic-page.component';
import { CanFlyPipe } from './pipes/can-fly/index.pipe';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { OrderPageComponent } from './pages/order-page/order-page.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ToggleCasePipe } from './pipes/toggle-case/index.pipe';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';
import { SortByPipe } from './pipes/sort-by/index.pipe';


@NgModule({
  declarations: [
    BasicPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
    OrderPageComponent,
    ToggleCasePipe,
    CanFlyPipe,
    SortByPipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    PrimeNgModule,
  ]
})
export class ProductsModule { }

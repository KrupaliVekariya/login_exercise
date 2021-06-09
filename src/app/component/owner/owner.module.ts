import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { HomeComponent } from './home/home.component';
import { EditOwnerComponent } from './edit-owner/edit-owner.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateOrderComponent } from './create-order/create-order.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent,
    HomeComponent,
    EditOwnerComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRole } from 'src/app/service/auth.roles';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'Dashboard', component: HomeComponent,
    data: {
      breadcrumb: 'Dashboard',
      roles: UserRole.owner
    },
  },
  {
    path: 'CustomerDetailsList', component: CustomerListComponent,
    data: {
      breadcrumb: 'CustomerDetailsList',
      roles: UserRole.owner
    },
  },
  {
    path: 'CustomerDetailRegistration', component: CustomerDetailComponent,
    data: {
      breadcrumb: 'CustomerDetailRegistration',
      roles: UserRole.owner
    },
  },
  {
    path: 'CreateOrder', component: CreateOrderComponent,
    data: {
      breadcrumb: 'CreateOrder',
      roles: UserRole.owner
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserModule } from './component/user/user.module';
import { AuthGuard } from './service/auth.guard';
import { UserRole } from './service/auth.roles';
const adminRoot = environment.adminRoot.substr(1); // path cannot start with a slash
const ownerRoot = environment.ownerRoot.substr(1);
const customerRoot = environment.customerRoot.substr(1);

let routes: Routes = [
  {
    path: '',
    redirectTo: environment.defaultRole == UserRole.admin ? ownerRoot:environment.defaultRole==UserRole.owner?ownerRoot:customerRoot,
    pathMatch: 'full',
  },
  {
    path: adminRoot,
    loadChildren:()=>import('./component/admin/admin.module').then((m)=>m.AdminModule),
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: ownerRoot,
    loadChildren: () => import('./component/owner/owner.module').then((m) => m.OwnerModule),
    data: { roles: UserRole.owner},
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: customerRoot,
    loadChildren: () => import('./component/customer/customer.module').then((m) => m.CustomerModule),
    data: { roles: UserRole.customer},
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
  },
  {
    path: 'user',
    loadChildren:()=>import('./component/user/user.module').then((m)=> m.UserModule),
  },
];

if (!environment.isAuthGuardActive) {
  routes = [
    {
      path: '',
      redirectTo: 'admin',
      pathMatch: 'full',
    },
    {
      path: 'admin',
      loadChildren: () => import('./component/admin/admin.module').then((m) => m.AdminModule),
    },
    {
      path: 'owner',
      loadChildren: () =>
        import('./component/owner/owner.module').then((m) => m.OwnerModule),
    },
    {
      path: 'customer',
      loadChildren: () =>
        import('./component/customer/customer.module').then((m) => m.CustomerModule),
    },
  ];
}


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

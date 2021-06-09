import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserRole } from 'src/app/service/auth.roles';
import { OwnerDetailComponent } from './owner-detail/owner-detail.component';
import { OwnerListComponent } from './owner-list/owner-list.component';

const routes: Routes = [
  {path: 'admin/ownerDetailList', redirectTo: 'ownerDetailsList'},
  { path: 'ownerDetailsList', component:OwnerListComponent,
    data: {
      breadcrumb: 'ownerDetailsList',
      roles: UserRole.admin
    },
  },
  { path: 'ownerDetailRegistration', component: OwnerDetailComponent,
    data: {
      breadcrumb: 'ownerDetailRegistration',
      roles: UserRole.admin
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

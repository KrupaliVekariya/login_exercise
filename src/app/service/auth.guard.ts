import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from "@angular/router";
import { UserRole } from './auth.roles';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) { }
  async canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const currentUserRole: any = environment.defaultRole == UserRole.admin ? '0' : environment.defaultRole == UserRole.owner ? '1' : '2';
    //check token are exist or not
    if (sessionStorage.getItem('token') && sessionStorage.getItem('role') && currentUserRole) {
      if (route.data && route.data.roles) {
        return true;
      } else {
        return true;
      }
    } else { // redirect to login 
      this.router.navigate(['']);
      return false;
    }
  }

  async canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean> {
    const currentUserRole: any = environment.defaultRole == UserRole.admin ? '0' : environment.defaultRole == UserRole.owner ? '1' : '2';
    //check token are exist or not
    if (sessionStorage.getItem('token') && sessionStorage.getItem('role') && currentUserRole) {
      if (route.data && route.data.roles) {
        return true;
      } else {
        return true;
      }
    } else { // redirect to login 
      this.router.navigate(['']);
      return false;
    }
  }

}



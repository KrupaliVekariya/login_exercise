import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from './api.config';
import { ApiService } from './api.service';
export interface SignInCredential {
  email: string;
  password: string;
}
/* export interface authResponse{
  result:{token:string,email:string,id:string,role:string,is_admin:string}
}
 */@Injectable({
  providedIn: 'root'
})
export class AuthService {
  response:any;
  constructor(private apiService: ApiService, private router: Router) { }

  signIn(credential: SignInCredential) {
    return new Promise((resolve, reject) => {
      let action = config.api.user.login;
      this.apiService.post(action, credential).subscribe(response => {
        this.getToken(credential).then(response => {
          console.log(response);
          resolve(response);
        })
      }, (err) => {
        reject(err);
      });
    })
  }
//get token to response data
  getToken(credential) {
    return new Promise((resolve, reject) => {
      let action = config.api.user.login;
      this.apiService.post(action, credential).subscribe(response => {
        sessionStorage.setItem('token', response['result']['token']);
        resolve(response);
      }, (err) => {
        reject(err);
      })
    })
  }

  signOut() {
    sessionStorage.clear();
    this.router.navigate(['']);
  }
}

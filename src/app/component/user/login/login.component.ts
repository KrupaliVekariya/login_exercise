import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserRole } from 'src/app/service/auth.roles';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
export interface authResponse{
  result:{token:string,email:string,id:string,role:string,is_admin:string}
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //define property for login form
  loginForm:FormGroup;
  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit() {
    //build form for login
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', [Validators.required, Validators.minLength(6)])
    });
  }
  //function will be called user can login 
  async login() {
    if (this.loginForm.invalid) {
      return;
    }
    //store data to the object
    let data = {
      email: this.loginForm.get('email').value,
      password: this.loginForm.get("password").value
    }
    //store data to the session storage
    const response = await this.authService.signIn(data);
    if(response){
      sessionStorage.setItem('email',response['result']['email']);
      sessionStorage.setItem('token',response['result']['token']);
      sessionStorage.setItem('role',response['result']['role']);
      //for admin user
      if(response['result']['role']=='admin'){
        environment.defaultRole=UserRole.admin;
        this.router.navigate(['admin/ownerDetailList']);
      }
      if(response['result']['role']=='owner'){
        sessionStorage.setItem('id',response['result']['id']);
        environment.defaultRole=UserRole.owner;
        this.router.navigate(['owner']);
      }
    }
  }
}

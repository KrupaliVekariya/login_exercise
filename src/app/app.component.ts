import { Component } from '@angular/core';
import { GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleLogin';
  constructor(private socialAuthService:SocialAuthService,private apiService:ApiService){}
  signInWithGoogle(){
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID).then(
      (user)=>{
        this.apiService.googleSignIn(user.idToken).subscribe(
      (res)=>{
        console.log(res);
      },
      (err)=>{
        console.log(err);
      }
        
    )});
  }
}

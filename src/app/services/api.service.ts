import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from './api.config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
    url=`https://identitytoolkit.googleapis.com/v1/accounts:signInWithIdp?key=${config.API_KEY}`;
    constructor(public http: HttpClient) {
    }
    googleSignIn(token:any) {
        return this.http.post(this.url,{
            postBody:`id_token=${token}&providerId=google.com`,
            requestUri:`http://localhost:4200/`,
            returnIdpCredential:true,
            returnSecureToken:true
        });
      }
    }        
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from 'src/app/service/api.config';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url = config.api.url;

  constructor(public http: HttpClient) {
  }

  get(url:any,reqOpts?: any) {
    return this.http.get(this.url + url,reqOpts);
  }

  getById(url:any,id:any) {
    return this.http.post(this.url + url, id);
  }

  post(url:any, body: any,reqOpts?: any) {
    return this.http.post(this.url + url, body,reqOpts);
  }
  delete(url:any,body:any){
    return this.http.delete(this.url+url,body);
    }
   
  }


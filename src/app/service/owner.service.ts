import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from './api.config';
import { ApiService } from './api.service';
//For owner Detail 
export interface ownerDetail{
    name:string,
    last_name:string,
    phone:string,
    shop_name:string,
    logo:string,
    address:string,
    email:string,
    password:string
}
export interface data{
    id:number,
    user_id:number
}
@Injectable({
    providedIn: 'root'
  })
  export class OwnerService{
    constructor(private apiService:ApiService,private router:Router){}

    //function will be callled add owner details
    addOwner(ownerDetail:ownerDetail){
        return new Promise((resolve,reject)=>{
        let action = config.api.shopOwner.createOwner;
        this.apiService.post(action,ownerDetail).subscribe(response=>{
            console.log(response);
            resolve(response);
        },(err)=>{
            reject(err);
        });
        })
    }
    //function willl be called list of owner detail
    ownerList(){
        return new Promise((resolve,reject)=>{
            let action=config.api.shopOwner.ownerList;
            this.apiService.get(action).subscribe(response=>{
                console.log(response);
                resolve(response);
            },(err)=>{
                reject(err);
            });
        })
    }

    //function wil be called delete owner detail
    deleteOwner(data:data){
            return new Promise((resolve,reject)=>{
                let action=config.api.shopOwner.deleteOwner;
                console.log('Data In Owner =>', data);
                this.apiService.post(action,data).subscribe(response=>{ 
                    resolve(response);
                },(err)=>{
                    reject(err);
                });
            })
        }
       
        ownerDetailsById(id:any){
            return new Promise((resolve,reject)=>{
                let action=config.api.shopOwner.ownerDetailById;
                this.apiService.getById(action,id).subscribe(response=>{
                    resolve(response);
                },(err)=>{
                    reject(err);
                });
            })
             
        }
}      
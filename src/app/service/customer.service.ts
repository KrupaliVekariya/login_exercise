import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { config } from './api.config';
import { ApiService } from './api.service';
//For owner Detail 
export interface customerDetail {
    name: string,
    last_name: string,
    phone: string,
    profile_pic: string,
    email?: string,
    password?: string
}
export interface data {
    id: number,
    user_id: number
}

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    constructor(private apiService: ApiService, private router: Router) { }

    //function will be callled add customer details
    addCustomer(customerDetail: customerDetail) {
        return new Promise((resolve, reject) => {
            let action = config.api.customer.createCustomer;
            this.apiService.post(action, customerDetail).subscribe(response => {
                console.log(response);
                console.log("add customer=>",customerDetail);
                resolve(response);
            }, (err) => {
                reject(err);
            });
        })
    }

    //function willl be called list of customer detail
    customerList() {
        return new Promise((resolve, reject) => {
            let action = config.api.customer.customerList;
            this.apiService.get(action).subscribe(response => {
                console.log(response);
                resolve(response);
            }, (err) => {
                reject(err);
            });
        })
    }
    //for customer list by owner id
    customerListByOwnerId(id: any) {
        return new Promise((resolve, reject) => {
            let action = config.api.customer.customerListByOwnerId;
            this.apiService.getById(action, id).subscribe(response => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        })

    }
    //for delete customer detail
    deleteCustomer(data: data) {
        return new Promise((resolve, reject) => {
            let action = config.api.customer.deleteCustomer;
            this.apiService.post(action, data).subscribe(response => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        })
    }
    //for customer detail by id
    customerListById(id: any) {
        return new Promise((resolve, reject) => {
            let action = config.api.customer.customerListById;
            this.apiService.getById(action, id).subscribe(response => {
                resolve(response);
            }, (err) => {
                reject(err);
            });
        })

    }
    //for update customer detail
    editCustomer(id:any){
        
    }   
}
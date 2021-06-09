import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {
  
  customer: any=[];

  constructor(private router:Router,private customerService:CustomerService) { }

  ngOnInit(): void {
    this.onCustomerList();
  }

  onAddCustomer() {
    this.router.navigate(['CustomerDetailRegistration']);
  }
 //For display owner details
 async onCustomerList() {
  this.customer = await this.customerService.customerList();
}

//For delete owner detail
async onDeleteCustomer(idCustomer: number) {
  let data = {
    id: idCustomer
  };//customer Details by Id
  console.log('id=>',data);
  const response = await this.customerService.customerListById(data);
  console.log('Res =>', response);
  //delete customer detail
  if (response) {
    if (confirm('do you want to delete this customer:')) {
      let customerDetail = { id: idCustomer, user_id: response['result']['user_id'] };
      console.log('Customer =>', customerDetail);
      const resData = await this.customerService.deleteCustomer(customerDetail);
      this.onCustomerList(); 
    }
  }
}
//for edit customer detail
async onEditCustomer(idCustomer:number){
  let data = {
    id: idCustomer
  };
  //customer detil by Id
  console.log('id=>',data);
  const response = await this.customerService.customerListById(data);
  if (response) {
      let customerDetail = { id: idCustomer, user_id: response['result']['user_id'] };
      console.log('Customer =>', customerDetail);
      const resData = await this.customerService.editCustomer(customerDetail);
      
    }
  }
}


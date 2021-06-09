import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { CustomerService } from "src/app/service/customer.service";
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  customerDetail:FormGroup;
  imageURL:Observable<string>;
  getUrl: string;
  constructor(private customerService:CustomerService,private storage:AngularFireStorage,
    private router:Router) { }

  ngOnInit(){
      //get value from owner detail form
      this.customerDetail=new FormGroup({
        'name':new FormControl('',Validators.required),
        'last_name': new FormControl('',Validators.required),
        'phone':new FormControl('',Validators.required),
        'logo':new FormControl(null,Validators.required),
        'email':new FormControl('',[Validators.required,Validators.email]),
        'password':new FormControl('',Validators.required)
      });
    
  }
  //upload customer image
  onImageSelected(event){
    const file:File=event.target.files[0];
    console.log('file name',file.name);
    const storageRef=this.storage.ref('logo/customerLogo/');
    const uploadLogo=this.storage.upload('/logo/customerLogo/',file);
    uploadLogo.snapshotChanges().pipe(finalize(()=>{
      this.imageURL=storageRef.getDownloadURL();
      this.imageURL.subscribe(url=>{
        if(url){
          this.getUrl=url;
        }
        console.log(this.getUrl);
      });
    }))
    .subscribe(url=>{
      if(url){
        console.log(url);
      }
    })
  }
  
  //function wil be called admin Add owner details 
  async onAddDetail(){   
    //store a data to the object   
     let data={
      owner_id:sessionStorage.getItem('id'),
      name:this.customerDetail.get('name').value,
      last_name:this.customerDetail.get('last_name').value,
      phone:this.customerDetail.get('phone').value,
      profile_pic:this.getUrl,
      email:this.customerDetail.get('email').value,
      password:this.customerDetail.get('password').value
    };
    await this.customerService.addCustomer(data);
    this.customerDetail.reset();
  } 

  onListCustomer(){
    this.router.navigate(['CustomerDetailsList']);
  }
}





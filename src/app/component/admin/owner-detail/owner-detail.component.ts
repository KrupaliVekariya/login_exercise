import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/service/owner.service';
import { AngularFireStorage } from "@angular/fire/storage";
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-owner-detail',
  templateUrl: './owner-detail.component.html',
  styleUrls: ['./owner-detail.component.scss']
})
export class OwnerDetailComponent implements OnInit {

  ownerDetail:FormGroup;
  imageURL:Observable<string>;
  getUrl: string;
  constructor(private router:Router,private ownerService:OwnerService,private storage:AngularFireStorage) { }

  ngOnInit() {
    //get value from owner detail form
    this.ownerDetail=new FormGroup({
      'name':new FormControl('',Validators.required),
      'last_name': new FormControl('',Validators.required),
      'phone':new FormControl('',Validators.required),
      'shop_name':new FormControl('',Validators.required),
      'logo':new FormControl(null,Validators.required),
      'address':new FormControl('',Validators.required),
      'email':new FormControl('',[Validators.required,Validators.email]),
      'password':new FormControl('',Validators.required)
    });
  }

  //upload owner logo
  onImageSelected(event){
    const file:File=event.target.files[0];
    console.log('file name',file.name);
    const storageRef=this.storage.ref('logo/ownerLogo/');
    const uploadLogo=this.storage.upload('/logo/ownerLogo/',file);
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
      name:this.ownerDetail.get('name').value,
      last_name:this.ownerDetail.get('last_name').value,
      phone:this.ownerDetail.get('phone').value,
      shop_name:this.ownerDetail.get('shop_name').value,
      logo:this.getUrl,
      address:this.ownerDetail.get('address').value,
      email:this.ownerDetail.get('email').value,
      password:this.ownerDetail.get('password').value
    };
    await this.ownerService.addOwner(data);
    this.ownerDetail.reset();
  } 

    onListOwner(){
    this.router.navigate(['admin/ownerDetailList']);
  }
}


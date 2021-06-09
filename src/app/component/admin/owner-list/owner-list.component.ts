import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OwnerService } from 'src/app/service/owner.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {
  owner: any = [];
  id: any;
  constructor(private router: Router, private ownerService: OwnerService) { }

  ngOnInit() {
    this.onOwnerList();
  }
  //For add owner Detail
  onAddOwner() {
    this.router.navigate(['ownerDetailRegistration']);
  }
  //For display owner details
  async onOwnerList() {
    this.owner = await this.ownerService.ownerList();
  }
  //For delete owner detail
  async onDeleteOwner(idOwner: number) {
    let data = {
      id: idOwner
    };//owner Details by Id
    const response = await this.ownerService.ownerDetailsById(data);
    console.log('Res =>', response);
    //delete owner detail
    if (response) {
      if (confirm('do you want to delete this owner:')) {
        let ownerDetail = { id: idOwner, user_id: response['result']['user_id'] };
        console.log('Owner =>', ownerDetail);
        const resData = await this.ownerService.deleteOwner(ownerDetail);
        this.onOwnerList();
      }
    }
  }
}

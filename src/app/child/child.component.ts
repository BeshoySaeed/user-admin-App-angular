import { Component, Input, OnChanges } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {

  @Input() child: any;
  users !: string[];
  admins !: string[];

  constructor(private service: UserDataService){}

  ngOnChanges(){

    this.users = this.service.users;
    this.admins = this.service.admin;
    // console.log(this.users, this.admins)
  }

  removeTherow(tr:any){
    tr.remove()
  }


}

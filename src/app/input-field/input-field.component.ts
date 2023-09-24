import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent {

  // @Input() child2='parent'
  @Input() child: any;
  
  myForm: FormGroup;
  count: number = 0;
  countd: number = 0;
  isRed: boolean = true;

  constructor(private service: UserDataService){
    this.myForm = new FormGroup({
      userName : new FormControl('',[Validators.required, Validators.minLength(3)])
    })
  }

  addUser(element : any ){
    if(element.value.length > 2){
      if(this.child){
        this.service.addUser(element.value);
      }else{
        this.service.addAdmin(element.value)
      }
      element.value = "";
      this.count = this.service.users.length  ;
      this.countd = this.service.admin.length;
    }
    console.log(this.service.admin);
    console.log(this.service.users)

  }
}

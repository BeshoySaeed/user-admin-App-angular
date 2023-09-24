import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  users: string[] =[];
  admin: string[] = []

  constructor() { }

  addUser (user: string) : void {

    this.users.push(user)

  }


  addAdmin (user: string) : void {

    this.admin.push(user)

  }
}

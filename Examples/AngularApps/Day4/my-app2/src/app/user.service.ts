import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  userCollection : any[] = []

  public store(user: any) : void {
    this.userCollection.push(user); 
  }
  public login(username: string, password: string) : any {
    return this.userCollection
    .some(value => value.username == username && value.password == password)
  }
}

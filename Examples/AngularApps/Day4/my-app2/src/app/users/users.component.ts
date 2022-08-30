import { Component, OnInit } from '@angular/core';
import { UsersRequestService } from '../users-request.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private _userRequest: UsersRequestService) { }
  usersArray  !: any;
  ngOnInit(): void {
    this._userRequest.getUsers().subscribe((data) => this.usersArray = data);
    // console.log('________NgOnInit of Users Component_________')
    // this._userRequest.getFakeData()
    // .subscribe((data) => console.log(data));
  }
  
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { UsersRequestService } from '../users-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _builder: FormBuilder, 
    private _service: UserService,
    private _router: Router, 
    private _userRequest: UsersRequestService) { }

  userForm = this._builder.group({
    id: [''], username: [''], password: [''], gender: [''], phone: ['']
  });

  ngOnInit(): void {
  }
  storeUser() : void {
    // subscribe({next:fn, error:fn});
    this._userRequest.save( this.userForm.value )
    .subscribe({
      next : (data) => { 
        console.log(data); 
        this._router.navigate(['login', this.userForm.controls['id'].value])
      },
      error : (err) => {
        console.log(err);
        this.userForm.reset({});
      }
    });
  }
  handleSubmit() : void {
    console.log('_____handleSubmit__________')
    this._service.store(this.userForm.value); // {username: value, password: value,..}
    //this._router.navigate(['login', this.userForm.controls['username'].value]);
    this._router.navigate(['login', this.userForm.controls['username'].value]);
  }
}

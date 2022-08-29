import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private _builder: FormBuilder, 
    private _service: UserService,
    private _router: Router) { }

  userForm = this._builder.group({
    username: [''], password: [''], gender: [''], phone: ['']
  });

  ngOnInit(): void {
  }

  handleSubmit() : void {
    console.log('_____handleSubmit__________')
    this._service.store(this.userForm.value); // {username: value, password: value,..}
    //this._router.navigate(['login', this.userForm.controls['username'].value]);
    this._router.navigate(['login', this.userForm.controls['username'].value]);
  }
}

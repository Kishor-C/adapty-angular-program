import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Router object is required to specify the path
  constructor(
    private _builder: FormBuilder, 
    private _service: UserService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((p:Params) => 
      this.loginForm.controls['username'].setValue(p['user']));
  }

  loginForm = this._builder.group({
    username: ['', Validators.required], 
    password: ['', Validators.required]
  });

  handleSubmit() : void {
    let un : string = <string> (this.loginForm.controls['username'].value);
    let pw : string = <string> (this.loginForm.controls['password'].value);
    let result = this._service.login(un, pw);
    if(result == true) {
      sessionStorage.setItem('userKey', un); // store the key if login is success
      this._router.navigate(['success', un]);  // here path = success/:user=un
    } else {
      sessionStorage.removeItem('userKey'); // remove the key, this must be done on logout
      this.loginForm.reset({});
      this._router.navigate(['login']); // optional 
    }
  }

}

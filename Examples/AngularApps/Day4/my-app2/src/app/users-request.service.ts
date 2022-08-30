import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersRequestService {

  constructor(private _http : HttpClient) { }
  
  url = 'http://localhost:3000/users'
  
  getUsers() : Observable<any> {
    return this._http.get(this.url);
  }
  // RegisterComponent passes user object
  save( user: any ) : Observable<any> {
    return this._http.post(this.url, user);
  }
  // LoginComponent passes id to login, but it uses password to authenticate
  get( id: number ) : Observable<any> {
    let urlById = `${this.url}/${id}`; // urlById = http://localhost:3000/users/1
    return this._http.get(urlById);
  }
  
  getFakeData() : Observable<any> {
    // when you call get() method the request wouldn't be sent
    // the request is sent only when you subscribe
    let url = "https://jsonplaceholder.typicode.com/users";
    return this._http.get(url);
  }
}

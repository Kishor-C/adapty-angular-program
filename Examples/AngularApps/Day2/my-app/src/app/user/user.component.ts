import { Component } from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html'
})
export class UserComponent {
    username = "Sachin";
    phone = 998839933;
    address = {state: "Karnataka", city: "Bangalore", pin: 560001}
}
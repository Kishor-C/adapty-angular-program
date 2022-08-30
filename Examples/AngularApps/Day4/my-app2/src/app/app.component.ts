import { Component, DoCheck, NgZone } from '@angular/core';
import { UserService } from './user.service';
import { UsersRequestService } from './users-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  title = 'my-app2';
  counter : number = 0
  constructor(private _service: UsersRequestService, 
    private _zone : NgZone) {

  }
  ngDoCheck(): void {
    this.counter++;
    console.log('___Do Check is called___', this.counter);
  }
  handleClick() {
    this._zone.runOutsideAngular(() =>{
      this._service.getFakeData().subscribe((data) => {
        console.log('____we got some response___');  
      })
    })
    
  }
}

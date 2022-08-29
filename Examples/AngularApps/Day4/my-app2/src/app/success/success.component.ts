import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css'],

})
export class SuccessComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }

  username !: string;

  // this is called after constructor automatically
  ngOnInit(): void {
    // this.username = 'Guest';
    // Before Angular13, this.username = p.user used work
    this._activatedRoute.params.subscribe((p:Params) => this.username = p['user']);
  }

}

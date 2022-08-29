import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute) { }
  user !: string;
  ngOnInit(): void {
    this._activatedRoute.parent?.params
    .subscribe((p: Params) => this.user = p['user'])
  }
}

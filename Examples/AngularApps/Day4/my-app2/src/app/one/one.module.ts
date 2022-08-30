import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OneRoutingModule } from './one-routing.module';
import { OneComponent } from './one.component';
import { SimpleComponent } from './simple/simple.component';


@NgModule({
  declarations: [
    OneComponent,
    SimpleComponent
  ],
  imports: [
    CommonModule,
    OneRoutingModule
  ]
})
export class OneModule { }

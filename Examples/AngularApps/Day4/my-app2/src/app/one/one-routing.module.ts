import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OneComponent } from './one.component';


// http://localhost:4200/one

const routes: Routes = [{ path: '', component: OneComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OneRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DemoComponent } from './demo/demo.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NameSalutation } from './custom.pipe';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, DemoComponent, DirectiveDemoComponent,
    NameSalutation,
    DataBindingComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

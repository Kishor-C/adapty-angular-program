import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { DemoComponent } from './demo/demo.component';
import { DirectiveDemoComponent } from './directive-demo/directive-demo.component';
import { NameSalutation } from './custom.pipe';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SimpleDirective } from './custom-directives/simple.directive';
import { VideoDirective } from './custom-directives/video.directive';
import { TdfDemoComponent } from './tdf-demo/tdf-demo.component';
import { MdfDemoComponent } from './mdf-demo/mdf-demo.component';
import { MdfBuilderDemoComponent } from './mdf-builder-demo/mdf-builder-demo.component';

@NgModule({
  declarations: [
    AppComponent, UserComponent, DemoComponent, DirectiveDemoComponent,
    SimpleDirective, VideoDirective,
    NameSalutation,
    DataBindingComponent,
    ParentComponent,
    ChildComponent,
    TdfDemoComponent,
    MdfDemoComponent,
    MdfBuilderDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

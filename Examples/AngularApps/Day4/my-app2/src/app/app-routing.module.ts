import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthdemoGuard } from './authdemo.guard';
import { LoginComponent } from './login/login.component';
import { ParentComponent } from './parent/parent.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { SettingsComponent } from './settings/settings.component';
import { SuccessComponent } from './success/success.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path : '', component: LoginComponent},
  {path : 'login', component: LoginComponent},
  {path: 'login/:user', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'success/:user', component: SuccessComponent, canActivate: [AuthdemoGuard], children: [
    {path : '', component: ProfileComponent},
    {path : 'profile', component: ProfileComponent},
    {path: 'settings', component: SettingsComponent}
  ]},
  {path: 'parent', component: ParentComponent},
  {path: 'users', component: UsersComponent},
  
  { path: 'one', 
   loadChildren: () => import('./one/one.module').then(m => m.OneModule) }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

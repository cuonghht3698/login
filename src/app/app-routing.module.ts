import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthentComponent } from './authent/authent.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
const routes: Routes = [
  {path:"authent",component:AuthentComponent},
  {path:"authent/login",component:LoginComponent},
  {path:"authent/register",component:RegisterComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

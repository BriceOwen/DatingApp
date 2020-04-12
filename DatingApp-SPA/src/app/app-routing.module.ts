import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'matches', component: ValueComponent },
  { path: 'lists', component: ValueComponent },
  { path: 'messages', component: ValueComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

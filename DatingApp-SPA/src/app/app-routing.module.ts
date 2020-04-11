import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ValueComponent } from './value/value.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'matches', component: ValueComponent },
  { path: 'lists', component: ValueComponent },
  { path: 'messages', component: ValueComponent },
  { path: 'signup', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

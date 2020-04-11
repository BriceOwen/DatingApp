import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(
      next => {
        console.log('Logged in successfully');
      },
      error => {
        console.log('Failed to login');
      }
    );
  }
}

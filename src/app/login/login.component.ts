import { Component, OnInit } from '@angular/core';

import { LoginService } from './login.service';
import { Login } from '../model/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  loginModel:Login = new Login('', '');
  errorMsg = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.logout();
  }

  login() {
    if(!this.loginService.login(this.loginModel)) {
      this.errorMsg = 'Failed to login.';
    }
  }

}

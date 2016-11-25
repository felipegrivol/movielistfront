import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Login } from '../model/login';

@Injectable()
export class LoginService {

  users = [
    new Login('felipe', 'senha')
  ];

  constructor(private router: Router) { }

  login(login:Login):boolean {
      
    let authenticatedUser = this.users.find(u => u.user === login.user);
    if (authenticatedUser && authenticatedUser.password === login.password){
      localStorage.setItem("userToken", authenticatedUser.user);
      this.router.navigate(['']);      
      
      return true;
    }

    return false;
  }

  logout() {
    localStorage.removeItem("userToken");
  }

  checkLogged() {
    if (localStorage.getItem("userToken") === null){
        return false;
    }

    return true;
  }

}

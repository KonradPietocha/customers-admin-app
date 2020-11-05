import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interface/user';

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent implements OnInit {
  title: string = "Panel logowania";
  userData: User;
  isLogin: boolean;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.loginService.getLogin(form.value)
      .subscribe(userData => this.userData = userData)
    this.isLogin = this.loginService.isLogin;
  }

}

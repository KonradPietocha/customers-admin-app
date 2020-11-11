import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../interface/user';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar'

import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-panel',
  templateUrl: './login-panel.component.html',
  styleUrls: ['./login-panel.component.scss']
})
export class LoginPanelComponent {
  title: string = "Panel logowania";
  userData: User;
  isLogin: boolean;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private loginService: LoginService, private _snackBar: MatSnackBar) { }


  onSubmit(form: NgForm) {
    this.loginService.getLogin(form.value)
      .subscribe(userData => this.userData = userData)
    this.isLogin = this.loginService.isLogin;
    if (this.isLogin === false) {
      this._snackBar.open('Wpisz jakiś login i hasło', 'X', {
        duration: 5000,
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
    }
  }

}

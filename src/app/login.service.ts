import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { User } from './interface/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLogin: boolean;

  getLogin(data: User): Observable<User> {
    if (data.name !== "" && data.password !== "") {
      this.isLogin = true;
    } else this.isLogin = false;
    return of(data);
  }
}

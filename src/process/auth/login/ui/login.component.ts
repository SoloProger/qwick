import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginApiService } from '../api/services/login-api.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss',
})
export class LoginComponent {
  public loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: LoginApiService) {}

  public login() {
    this.loginService
      .login({
        identifier: this.loginForm.value.login as string,
        password: this.loginForm.value.password as string,
      })
      .subscribe();
  }
}

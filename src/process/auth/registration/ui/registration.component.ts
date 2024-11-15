import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RegistrationApiService } from '../api/services/registration-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrl: 'registration.component.scss',
})
export class RegistrationComponent {
  public registerForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private registration: RegistrationApiService) {}

  public register() {
    this.registration.register({
      username: 'test2',
      email: this.registerForm.value.login as string,
      password: this.registerForm.value.password as string,
    }).subscribe();
  }
}

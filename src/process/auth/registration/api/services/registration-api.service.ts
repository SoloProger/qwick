import { Injectable } from '@angular/core';
import { Registration } from '../../model/types/registration';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment.development';

@Injectable()
export class RegistrationApiService {
  constructor(private http: HttpClient) {}

  public register(registerForm: Registration) {
    return this.http.post(`${environment.apiUrl}/auth/local/register`, registerForm);
  }
}

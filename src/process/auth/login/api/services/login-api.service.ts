import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "../../../../../environments/environment.development";
import { Login } from "../../model/types/login";

@Injectable()
export class LoginApiService {
  constructor(private http: HttpClient) {}

  public login(loginForm: Login) {
    return this.http.post(`${environment.apiUrl}/auth/local`, loginForm);
  }
}

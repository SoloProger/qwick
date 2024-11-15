import { NgModule } from '@angular/core';

import { LoginComponent } from './login/ui/login.component';
import { RegistrationComponent } from './registration/ui/registration.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistrationApiService } from './registration/api/services/registration-api.service';
import { LoginApiService } from './login/api/services/login-api.service';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]),
    ReactiveFormsModule,
  ],
  exports: [LoginComponent, RegistrationComponent],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [RegistrationApiService, LoginApiService],
})
export class AuthModule {}

import { NgModule } from '@angular/core';

import { LoginComponent } from './login/ui/login.component';
import { RegistrationComponent } from './registration/ui/registration.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      { path: '', redirectTo: '/auth/login', pathMatch: 'full' },
    ]),
  ],
  exports: [LoginComponent, RegistrationComponent],
  declarations: [LoginComponent, RegistrationComponent],
  providers: [],
})
export class AuthModule {}

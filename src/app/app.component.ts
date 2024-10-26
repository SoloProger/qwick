import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PasswordIconComponent } from '../shared/ui/icons/password-icon.component';
import {BurgerIconComponent} from "../shared/ui/icons/burger-icon.component";
import {SwitchComponent} from "../shared/ui/switch/switch.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    PasswordIconComponent,
    BurgerIconComponent,
    SwitchComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent {}
